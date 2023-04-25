import { Accordion } from 'flowbite-react';
import LinkButton from '@/pages/components/LinkButton';
import React from 'react';

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
          <Accordion.Title className="bg-slate-50">속도위반인가요?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">아닙니다 🤣</p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="bg-slate-50">뷔페식인가요?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              아니요. 예식이 끝나고 앉으신 자리에서 식사하십니다. 안타깝게 착석하지 못하시는 경우
              답례품을 드려요! 🎁
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="bg-slate-50">TBD</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">TBD</p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>

      {/*<div className="grow pt-80">*/}
      {/*  <LinkButton className="" scrollTo={"0"} isLast={true}></LinkButton>*/}
      {/*</div>*/}
    </main>
  );
}