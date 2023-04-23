import React, { FormEvent, useState } from 'react';
import MessageCard from '@/pages/components/MessageCard';
import LinkButton from '@/pages/components/LinkButton';

const sampleMessages = [
  { timestamp: 1682258385769, writer: 'Alice', message: '축하합니다~!' },
  {
    timestamp: 1682258385669,
    writer: 'Bob',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  { timestamp: 1682258385569, writer: 'Chris', message: 'Lorem ipsum dolor sit amet. ' },
  { timestamp: 1682258385469, writer: 'Dave', message: 'Lorem ipsum dolor sit amet. ' },
  { timestamp: 1682258385369, writer: 'Elliot', message: 'Lorem ipsum dolor sit amet. ' },
  { timestamp: 1682258385269, writer: 'F', message: 'Lorem ipsum dolor sit amet. ' },
  { timestamp: 1682258385169, writer: 'G', message: 'Lorem ipsum dolor sit amet. ' },
];

export default class Messages extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      messages: sampleMessages,
    };
  }

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // @ts-ignore
    const [writerElement, messageElement] = e.target.elements;

    if (writerElement.value.length < 2) {
      console.log('too short');
      return;
    }

    if (messageElement.value.value < 3) {
      console.log('too short');
      return;
    }

    writerElement.value.replace(/[\/<>]/g, '');
    messageElement.value.replace(/[\/<>]/g, '');

    this.state.messages.unshift({
      writer: writerElement.value,
      message: messageElement.value,
      timestamp: Date.now(),
    });
    this.setState({ messages: this.state.messages });

    console.log(this.state.messages[0]);
    return;
  };

  render() {
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
          text-gray-600
        "
      >
        <div className="h-48 w-full max-w-[500px] overflow-auto container">
          {this.state.messages.map(
            (v: { writer: string; message: string; timestamp: number }, i: number) => {
              return (
                <MessageCard
                  writer={v.writer}
                  message={v.message}
                  timestamp={v.timestamp}
                  key={i}
                />
              );
            },
          )}
        </div>

        <div className="h-full w-full max-w-[500px]">
          <form onSubmit={this.handleSubmit} method="post">
            <div className="grid grid-cols-1 gap-2">
              <label className="block">
                <span className="text-gray-700">글쓴이</span>
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
                      "
                  placeholder=""
                  id="writerElement"
                  name="writerElement"
                />
              </label>

              <label className="block">
                <span className="text-gray-700">메세지</span>
                <textarea
                  className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        bg-gray-100
                        border-transparent
                        focus:border-gray-500 focus:bg-white focus:ring-0
                      "
                  rows={3}
                  id="messageElement"
                  name="messageElement"
                />
              </label>
              <button
                className="
                    bg-blue-500
                    hover:bg-blue-700
                    font-bold
                    py-1
                    px-1
                    rounded-full
                  "
                type="submit"
              >
                완료
              </button>
            </div>
          </form>
        </div>

        {/*<div className="grow">*/}
        {/*  <LinkButton scrollTo={"0"} isLast={true}></LinkButton>*/}
        {/*</div>*/}
      </main>
    );
  }
}
