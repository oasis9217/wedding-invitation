import React, { FormEvent, useState, useEffect } from 'react';
import { Alert } from "flowbite-react";
import MessageCard from '@/components/MessageCard'
import { useStateContext } from "@/components/StateContext";


const appendMessageToSheet = async (newMessage: {writer: string, message: string}) => {
  const response = await fetch('/api/sheets', {
    method: 'POST',
    body: JSON.stringify(newMessage),
  })

  if (!response.ok) {
    throw await response.json();
  }
  return response.json();
}

const getAllMessageFromSheet = async () => {
  const response = await fetch('/api/sheets', {
    method: 'GET',
  })

  if (!response.ok) {
    throw await response.json();
  }
  return response.json();
}

function sanitizeInput(input: string) {
  // Remove any single quotes, backslashes, and semicolons from the input
  return input.replace(/[<>'\\;]/g, '').trim();
}

export default function Messages() {
  const { error, setError } = useStateContext();
  const [ messages, setMessages ] = useState([]);
  const [ fetched, setFetched ] = useState(false);
  let [ messageWriter, setMessageWriter ] = useState("")
  let [ messageText, setMessageText ] = useState("")

  useEffect(() => {
    (async () => {
      if (!fetched) {
        const allMessages = await getAllMessageFromSheet()
        setMessages(allMessages);
      }
    })();

    return () => {
      setFetched(true)
    }
  }, [ fetched, messages ])

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();

      messageWriter = sanitizeInput(messageWriter);
      messageText = sanitizeInput(messageText);



      await appendMessageToSheet({
        writer: messageWriter,
        message: messageText,
      })

      setMessageWriter("");
      setMessageText("");
      setError(null);
      setFetched(false);

      return;

    } catch(err) {
      // @ts-ignore
      setError(err.message);
    }
  };

  return (
    <main
      className="
        grid
        grid-cols-1
        h-full
        max-h-full
        content-center
        place-items-center
        justify-center
        justify-between
        space-y-5
        "
    >

      <div className="h-48 w-full max-w-[500px] overflow-auto container">
        {messages?.map(
          (v: { writer: string; message: string; createdAt: string; }, i: number) => {
            return (
              <MessageCard
                writer={v.writer}
                message={v.message}
                timestamp={v.createdAt}
                key={i}
              />
            );
          },
        )}
      </div>

      <div className="h-full w-full max-w-[500px] relative">
        <form onSubmit={handleSubmit} method="post" id="messageForm">
          <div className="grid grid-cols-1 gap-2">
            <label className="block">
              <span className="content-text">글쓴이</span>
              <input
                type="text"
                className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        bg-gray-100
                        border-transparent
                        focus:border-gray-500 focus:bg-white focus:ring-purple-200
                        text-gray-900
                      "
                id="writerElement"
                name="writerElement"
                value={messageWriter}
                onChange={(e) => {setMessageWriter(e.target.value)}}
                placeholder={"누구? (15자 이내)"}
              />
            </label>

            <label className="block">
              <span className="content-text"> 메세지 ({messageText.length}/{300}) </span>
              <textarea
                className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        bg-gray-100
                        border-transparent
                        focus:border-gray-500 focus:bg-white focus:ring-purple-200
                        text-gray-900
                      "
                rows={3}
                id="messageElement"
                name="messageElement"
                value={messageText}
                onChange={(e) => {setMessageText(e.target.value)}}
                placeholder={"전하고 싶은 말 (300자 이내)"}
                maxLength={300}
              />
            </label>

            {error && <div><Alert color="failure"> { error } </Alert></div>}

            <button
              className="
                    bg-purple-200
                    hover:bg-purple-400
                    font-bold
                    py-1
                    px-1
                    rounded-full
                    text-gray-900
                  "
              type="submit"
            >
              완료
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
