import React, { memo } from 'react';

export default function MessageCard(props: { writer: string; message: string; timestamp: string | number; }) {
  const now = new Date(props.timestamp);
  const timestring = now.getUTCFullYear() + '/' + now.getUTCMonth() + '/' + now.getDate();

  return (
    <div
      key={'msg:' + props.writer}
      className="grid grid-cols-2 gap-1 my-1 p-2 tracking-tighter text-justify rounded-lg bg-transparent text-purple-900"
    >
      <div className="col-span-2 flex flex-row">
        <div className="basis-1/2 font-bold text-left">{props.writer}</div>
        <div className="basis-1/2 text-right">{ timestring }</div>
      </div>
      <div className="col-span-2">{props.message}</div>
    </div>
  );
}
