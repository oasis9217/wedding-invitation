import React from 'react';
import Link from 'next/link';
import { Button } from "flowbite-react";

export default function Attend() {
  return (
    <main
      className="
        grid
        grid-cols-1
        h-full
        content-center
        place-items-center
        justify-center
        justify-between
        space-y-10
        "
    >
      <div className="content-text"> 참석 여부를 알려주시면 큰 도움이 됩니다.</div>
      <b> 💖 💖 💖 </b>
      <Link href="https://forms.gle/p7Qg7LoTsA1jADiQA" target="_blank">
        <Button className="border-1 border-purple-400 bg-gradient-to-r from-purple-200 to-pink-200" size="xl">
          <b className="text-gray-900"> 📝 설문 조사로 바로가기! 📝 </b>
        </Button>
      </Link>
      <b> 💖 💖 💖 </b>
    </main>
  );
}
