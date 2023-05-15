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
    return <div className="px-10">{props.children}</div>;
  };

  const properties = "relative snap-start snap-always h-screen max-h-screen content-center place-items-center justify-around";

  return (
    <section className={properties + ((props.id === '0') ? "" : " backdrop-blur-lg")} id={'section-' + props.id}>
        <Header title={props.title || ''} />
        <Content />
        <LinkButton scrollTo={props.scrollTo} isLast={props.isLast || false} />
    </section>
  );
}
