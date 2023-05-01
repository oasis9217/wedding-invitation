import Head from 'next/head'
import { Inter } from 'next/font/google';
import React, {useEffect, useState } from 'react';
import { Alert } from 'flowbite-react';
import { PrismaClient } from "@prisma/client";

import PageWrapper from '@/components/PageWrapper';
import Hello from '@/components/Hello';
import Map from '@/components/Map';
import Gallery from '@/components/Gallery';
import Messages from '@/components/Messages';
import QnA from '@/components/Qna';
import { StateContext } from '@/components/StateContext'

const inter = Inter({ subsets: ['latin'] });
const prisma = new PrismaClient();

export interface Message {
  id?: string,
  writer: string,
  message: string,
  createdAt?: string,
}

export async function getServerSideProps() {
  try {
    let allMessages = await prisma.message.findMany({
      orderBy: { id: 'desc'}
    })
    allMessages = JSON.parse(JSON.stringify(allMessages))

    return {
      props: {
        initialMessages: allMessages,
      },
    };
  } catch (err) {
    console.error('getServerSideProps()', err);
    return {
      props: {},
      notFound: true,
    };
  }
}

export default function Home(props : { initialMessages: Message[] }) {
  const [messages, setMessages] = useState(props.initialMessages);
  const [error, setError] = useState(null)

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
      setError((event as CustomEvent).detail)
    }
    window.addEventListener('httpError', handleErrors)

    alert("모바일 청첩장 만드는 중!")

    return () => {
      window.removeEventListener('httpError', handleErrors)
    }
  })

  return (
    <div className="bg-scroll bg-center bg-no-repeat bg-cover bg-my_bg_sm">
      <Head>
        <meta property="og:title" content="김정선🤵‍♂️👰‍♀️류송희️" key="title" />
        <meta property="og:url" content="https://oasis9217.github.io/wedding-invitation/" key="url" />
        <meta property="og:type" content="website" key="type"/>
        <meta property="og:image" content="https://drive.google.com/uc?id=1YItuBPYiAbccoTfAojd4KIzvApBu9UMB" key="image" />
        <meta property="og:description" content="으아니 얘가 결혼을!?" key="desc" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover" />
      </Head>

      <StateContext.Provider value={{messages, setMessages, error, setError}}>
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
      </StateContext.Provider>
    </div>
  );
}
