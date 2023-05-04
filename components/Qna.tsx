import { Accordion } from 'flowbite-react';
import React from 'react';

const bgStyle= {
  backgroundColor: 'rgba(255,255,255,0.5)',
}

const questions = [
  {q: '🚗 주차 가능한가요?', a: '네, 넉넉히 가능합니다.'},
  {q: '🌼 식후 꽃을 가져가도 되나요?', a: '아니요, 안 된다고 합니다 😢'},
  {q: '🍽️ 뷔페식인가요?', a: '아니요. 예식이 끝나고 앉으신 자리에서 식사하십니다. 안타깝게 착석하지 못하시는 경우 답례품을 드려요! 🎁'},
  {q: '🥬 알러지 혹은 채식을 고려한 식단이 가능한가요?', a: '1주일 전까지 미리 알려주시면 가능합니다. 신랑 혹은 신부에게 꼭 말씀해 주세요!'},
  {q: '👶 아기를 데려가도 될까요?', a: '대환영입니다! 다만, 반려동물은 곤란합니다.'},
  {q: '🚥 신호위반인가요?', a: '아닙니다 🤣'},
  {q: '⛱️ 신혼 여행은 어디로 가나요?', a: '🧜🏻‍♀️ 니가 가라 하와이 ~ 🌴'}
]

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
      "
    >
      <Accordion className="w-full max-w-screen max-h-full">
        { questions.map(((q, i) => {
          return (
            <Accordion.Panel key={i}>
              <Accordion.Title className="bg-gray-100"> {q.q} </Accordion.Title>
              <Accordion.Content style={bgStyle} >
                <p className="mb-2 text-gray-700 dark:text-gray-900"> {q.a}</p>
              </Accordion.Content>
            </Accordion.Panel>
          )
        }))}
      </Accordion>
    </main>
  );
}
