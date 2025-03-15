import React, { ReactNode } from 'react';

export default function Quote({ title, quote, author }: { title?: string; quote: string | ReactNode; author?: string }) {
  return (
    <div className={`lg:flex justify-end mt-14 lg:mr-16`}>
      <div className='lg:w-[600px] text-[14px] font-medium leading-[18px] text-[#333E5F] rounded-xl bg-[#eff7fc]/50  px-8 py-5'>
        <p className={`text-center ${title && 'mb-4'}`}>{title && `${title}`}</p>
        <p>{quote}</p>
        <p className='mt-3 text-end'>{author && `- ${author}`}</p>
      </div>
    </div>
  );
}
