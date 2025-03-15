import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ElementHeaderProps {
  elementTitle: string;
  subsectionId: string;
  subsectionTitle: string;
}

export default function ElementHeader({ elementTitle, subsectionId, subsectionTitle }: ElementHeaderProps) {
  return (
    <>
      <div className='w-full bg-[#193E72] text-white'>
        {/* Mobile view - only breadcrumb */}
        <div className='lg:hidden py-6 px-4'>
          <div className='flex flex-wrap gap-y-2 items-center font-roboto font-medium text-[12px] leading-tight whitespace-nowrap'>
            <Link href='/doc' className='flex-shrink-0'>
              Guidebook
            </Link>
            <ChevronRight size={13} className='mx-2 flex-shrink-0' />
            <Link href='/doc/main-contents' className='flex-shrink-0'>
              Main Contents
            </Link>
            <ChevronRight size={13} className='mx-2 flex-shrink-0' />
            <span className='flex-shrink-0'>{elementTitle}</span>
            <ChevronRight size={13} className='mx-2 flex-shrink-0' />
            <span className='flex-shrink-0'>Element {subsectionId}</span>
          </div>
        </div>

        {/* Desktop view - full header with breadcrumb and title */}
        <div className='hidden lg:block py-20 px-28'>
          <div className='flex items-center mb-4 font-roboto font-normal text-[13px] leading-[22px] overflow-x-auto whitespace-nowrap'>
            <Link href='/doc' className='hover:underline flex-shrink-0'>
              Guidebook
            </Link>
            <ChevronRight size={13} className='mx-2 flex-shrink-0' />
            <Link href='/doc/main-contents' className='hover:underline flex-shrink-0'>
              Main Contents
            </Link>
            <ChevronRight size={13} className='mx-2 flex-shrink-0' />
            <span className='flex-shrink-0'>{elementTitle}</span>
            <ChevronRight size={13} className='mx-2 flex-shrink-0' />
            <span className='flex-shrink-0'>Element {subsectionId}</span>
          </div>

          {/* Subsection title - only on desktop */}
          <h1 className='font-lato text-[36px] font-medium leading-[50px] w-[75%]'>
            {subsectionId} {subsectionTitle}
          </h1>
        </div>
      </div>
      <p className='lg:hidden font-lato text-[24px] font-medium leading-[25px] text-[#043F76] px-8 pt-8'>
        {subsectionId} {subsectionTitle}
      </p>
    </>
  );
}
