import React, { ReactNode } from 'react';

export default function Dot({ dotKey }: { dotKey: string }): ReactNode {
  return (
    <div key={dotKey} className='py-[12px]'>
      <div className='w-[2px] h-[2px] rounded-full bg-[#454545] mr-3' />
    </div>
  );
}
