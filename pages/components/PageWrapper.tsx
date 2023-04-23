import React from 'react';
import LinkButton from '@/pages/components/LinkButton';

export default function PageWrapper(props: {
  id: string;
  children: React.ReactNode;
  scrollTo: string;
  title?: string;
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

  return (
    <div className="snap-start snap-always">
      <section className="relative min-h-screen max-h-screen" id={'section-' + props.id}>
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
