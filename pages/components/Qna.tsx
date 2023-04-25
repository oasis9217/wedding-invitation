import { Accordion } from 'flowbite-react';
import LinkButton from '@/pages/components/LinkButton';
import React from 'react';

const bgStyle= {
  backgroundColor: 'rgba(255,255,255,0.5)',
}

export default function Qna() {
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
      "
    >
      <Accordion className="w-full max-w-[500px] max-h-[500px]">
        <Accordion.Panel>
          <Accordion.Title className="bg-gray-100">속도위반인가요?</Accordion.Title>
          <Accordion.Content style={bgStyle} >
            <p className="mb-2 text-gray-700 dark:text-gray-900">아닙니다 🤣</p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="bg-gray-100">뷔페식인가요?</Accordion.Title>
          <Accordion.Content style={bgStyle} >
            <p className="mb-2 text-gray-700 dark:text-gray-900">
              아니요. 예식이 끝나고 앉으신 자리에서 식사하십니다. 안타깝게 착석하지 못하시는 경우
              답례품을 드려요! 🎁
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="bg-gray-100">TBD</Accordion.Title>
          <Accordion.Content style={bgStyle}>
            <p className="mb-2 text-gray-700 dark:text-gray-900">TBD</p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>

      {/*<div className="grow pt-80">*/}
      {/*  <LinkButton className="" scrollTo={"0"} isLast={true}></LinkButton>*/}
      {/*</div>*/}
    </main>
  );
}
