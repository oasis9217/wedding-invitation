import React, { FormEvent, useState } from 'react';
import MessageCard from '@/components/MessageCard'
import { useStateContext } from "@/components/StateContext";
import {Alert} from "flowbite-react";

const createMessage = async (newMessage: {writer: string, message: string}) => {
  const response = await fetch('/api/messages', {
    method: 'POST',
    body: JSON.stringify(newMessage),
  })

  if (!response.ok) {
    throw await response.json();
  }
  return response.json();
}

function sanitizeInput(input: string) {
  // Remove any single quotes, backslashes, and semicolons from the input
  const sanitizedInput = input.replace(/[<>'\\;]/g, '').trim();
  return sanitizedInput
}

export default function Messages() {
  const { messages, setMessages, error, setError } = useStateContext();
  let [ messageWriter, setMessageWriter ] = useState("")
  let [ messageText, setMessageText ] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();

      messageWriter = sanitizeInput(messageWriter);
      messageText = sanitizeInput(messageText);

      await createMessage({
        writer: messageWriter,
        message: messageText,
      })

      messages.unshift({
        writer: messageWriter,
        message: messageText,
      });

      setMessages(messages);
      setMessageWriter("");
      setMessageText("");
      setError(null);

      return;

    } catch(err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(err)
      }
    }
  };

  return (
    <main
      className="
          flex
          flex-col
          h-full
          content-center
          place-items-center
          justify-center
          justify-between
          space-y-5
          text-white
        "
    >

      <div className="h-48 w-full max-w-[500px] overflow-auto container">
        {messages.map(
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

      <div className="h-full w-full max-w-[500px]">
        <form onSubmit={handleSubmit} method="post" id="messageForm">
          <div className="grid grid-cols-1 gap-2">
            <label className="block">
              <span className="text-white">글쓴이</span>
              <input
                type="text"
                className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        bg-gray-100
                        border-transparent
                        focus:border-gray-500 focus:bg-white focus:ring-0
                        text-gray-700
                      "
                id="writerElement"
                name="writerElement"
                value={messageWriter}
                onChange={(e) => {setMessageWriter(e.target.value)}}
                placeholder={"누구? (15자 이내)"}
              />
            </label>

            <label className="block">
              <span className="text-white">메세지</span>
              <textarea
                className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        bg-gray-100
                        border-transparent
                        focus:border-gray-500 focus:bg-white focus:ring-0
                        text-gray-700
                      "
                rows={3}
                id="messageElement"
                name="messageElement"
                value={messageText}
                onChange={(e) => {setMessageText(e.target.value)}}
                placeholder={"전하고 싶은 말 (100자 이내)"}
              />
            </label>

            {error && <div><Alert color="failure"> { error } </Alert></div>}

            <button
              className="
                    bg-green-200
                    hover:bg-green-600
                    font-bold
                    py-1
                    px-1
                    rounded-full
                    text-gray-700
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
