import Head from 'next/head'
import { Inter } from 'next/font/google';
import React, { useEffect } from 'react';
import PageWrapper from '@/pages/components/PageWrapper';
import Hello from '@/pages/components/Hello';
import Map from '@/pages/components/Map';
import Gallery from '@/pages/components/Gallery';
import Messages from '@/pages/components/Messages';
import QnA from '@/pages/components/Qna';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    alert("모바일 청첩장 아직 만드는 중!")
  })

  return (
    <div className="bg-scroll bg-center bg-my_bg_sm2">
    {/*<div className="bg-scroll bg-my_bg_md h-[972px] relative w-full h-60 lg:max-w-2xl lg:h-80">*/}
    {/*  <div className="bg-scroll bg-center bg-no-repeat bg-my_bg_main h-screen"></div>*/}
      <Head>
        <meta property="og:title" content="김정선🤵‍♂️👰‍♀️류송희️" key="title" />
        <meta property="og:url" content="https://oasis9217.github.io/wedding-invitation/" key="url" />
        <meta property="og:type" content="website" key="type"/>
        <meta property="og:image" content="https://drive.google.com/uc?id=1YItuBPYiAbccoTfAojd4KIzvApBu9UMB" key="image" />
        <meta property="og:description" content="으아니 얘가 결혼을!?" key="desc" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover" />
      </Head>

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

        <PageWrapper id={'4'} scrollTo={'0'} title={'QnA'} isLast={true}>
          <QnA />
        </PageWrapper>
      </div>

    </div>
  );
}
