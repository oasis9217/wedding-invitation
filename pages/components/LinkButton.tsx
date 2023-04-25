import React from 'react';
import ScrollLink from '@/pages/components/ScrollLink';

export default function LinkButton(props: { scrollTo: string; isLast?: boolean }) {
  const Path = () => {
    return props.isLast === true ? (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
      />
    ) : (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
      />
    );
  };

  return (
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
      {/*<div clas/sName="">*/}
      <ScrollLink href={'#section-' + props.scrollTo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-10 h-10 fill-transparent stroke-slate-50"
        >
          <Path />
        </svg>
      </ScrollLink>
    </div>
  );
}
