import Link, { LinkProps } from 'next/link';
import React, { PropsWithChildren } from 'react';

// mirror the props of next/link component
type AnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;

const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);

    if (!elem) {
      return;
    }

    elem.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <Link href={props.href ?? ''} onClick={handleScroll}>
      {children}
    </Link>
  );
};
export default ScrollLink;
