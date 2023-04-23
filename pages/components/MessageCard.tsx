import React, { memo } from 'react';

export default function MessageCard(props: { writer: string; message: string; timestamp: number }) {
  const now = new Date(props.timestamp);

  return (
    <div
      key={'msg:' + props.writer}
      className="grid grid-cols-2 gap-1 my-1 p-2 tracking-tighter text-justify rounded-lg"
      style={{
        backgroundColor: 'rgba(255,255,255,0.5)',
      }}
    >
      <div className="col-span-2 flex flex-row">
        <div className="basis-1/2 font-bold text-left">{props.writer}</div>
        <div className="basis-1/2 text-right">{now.getUTCMonth() + '/' + now.getDate()}</div>
      </div>
      <div className="col-span-2">{props.message}</div>
    </div>
  );
}
