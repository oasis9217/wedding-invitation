import { Inter } from 'next/font/google';
import React from 'react';
import PageWrapper from '@/pages/components/PageWrapper';
import Hello from '@/pages/components/Hello';
import Map from '@/pages/components/Map';
import Gallery from '@/pages/components/Gallery';
import Messages from '@/pages/components/Messages';
import QnA from '@/pages/components/Qna';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="snap-y snap-mandatory overflow-scroll h-screen">
      <PageWrapper id={'0'} scrollTo={'1'}>
        <Hello />
      </PageWrapper>

      <PageWrapper id={'1'} scrollTo={'2'} title={'오시는 길'}>
        <Map />
      </PageWrapper>

      <PageWrapper id={'2'} scrollTo={'3'} title={'사진첩'}>
        <Gallery />
      </PageWrapper>

      <PageWrapper id={'3'} scrollTo={'4'} title={'메세지 남기기'}>
        <Messages />
      </PageWrapper>

      <PageWrapper id={'4'} scrollTo={'0'} title={'QnA'}>
        <QnA />
      </PageWrapper>
    </div>
  );
}
