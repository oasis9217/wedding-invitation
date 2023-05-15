import Head from 'next/head';
import { Hahmlet } from 'next/font/google';
import React, { useEffect, useState } from 'react';

import PageWrapper from '@/components/PageWrapper';
import Hello from '@/components/Hello';
import Map from '@/components/Map';
import Gallery from '@/components/Gallery';
import Messages from '@/components/Messages';
import Attend from '@/components/Attend';
import QnA from '@/components/Qna';
import { StateContext } from '@/components/StateContext';

const googleFont = Hahmlet({ subsets: ['latin'] });

export default function Home() {
  const [error, setError] = useState(null);

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

    const handleErrors = (event: Event | CustomEvent) => {
      setError((event as CustomEvent).detail);
    };
    window.addEventListener('httpError', handleErrors);

    return () => {
      window.removeEventListener('httpError', handleErrors);
    };
  });
  return (
    <div>
      <Head>
        <meta property="og:title" content="김정선🤵‍♂️👰‍♀️류송희️" key="title" />
        <meta property="og:url" content="https://wedding.songhuiryu.dev" key="url" />
        <meta property="og:type" content="website" key="type" />
        <meta
          property="og:image"
          content="https://drive.google.com/uc?id=1LkYq_EAm9pErrxm3OmXDwy1Il4OH3xbD"
          key="image"
        />
        <meta property="og:description" content="으아니 얘가 결혼을!?" key="desc" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
        />
      </Head>

      <StateContext.Provider value={{ error, setError }}>
        <div className="
          snap-y
          snap-mandatory
          overflow-auto
          h-full
          max-h-screen
          max-w-[50rem]
          bg-no-repeat
          bg-cover
          md:bg-contain
          bg-main-x-extended
          bg-center
        ">
          <PageWrapper id={'0'} scrollTo={'1'} isFront={true}>
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

          <PageWrapper id={'4'} scrollTo={'5'} title={'참석 여부 알리기'}>
            <Attend />
          </PageWrapper>

          <PageWrapper id={'5'} scrollTo={'0'} title={'QnA'} isLast={true}>
            <QnA />
          </PageWrapper>
        </div>
      </StateContext.Provider>
    </div>
  );
}
