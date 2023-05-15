import React from 'react';
import LinkButton from '@/components/LinkButton';

export default function PageWrapper(props: {
  id: string;
  children: React.ReactNode;
  scrollTo: string;
  title?: string;
  isFront?: boolean;
  isLast?: boolean;
}) {
  const Header = (props: { title?: string }) => {
    return props.title ? (
      <div className="p-10">
        <p className="text-4xl font-extrabold"> {props.title} </p>
      </div>
    ) : (
      <div />
    );
  };

  const Content = () => {
    return <div>{props.children}</div>;
  };

  const properties = "snap-start h-screen max-h-screen content-center place-items-center justify-around";

  return (
    <div className={properties + ((props.id === '0') ? "" : " backdrop-blur-lg") }>
      <section className="relative min-h-screen" id={'section-' + props.id}>
        <div className="">
          <Header title={props.title || ''} />
        </div>
        <div className="px-10 h-full min-h-full">
          <Content />
        </div>
        <LinkButton scrollTo={props.scrollTo} isLast={props.isLast || false} />
      </section>
    </div>
  );
}
