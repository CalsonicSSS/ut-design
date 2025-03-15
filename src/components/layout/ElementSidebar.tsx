import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { assetPathMode } from '@/utils';

interface SubSection {
  id: string;
  title: string;
}

interface ElementSidebarProps {
  subsections: SubSection[];
  activeSubsection: string;
  elementTitle: string;
  currentElementNumber: number;
}

export default function ElementSidebar({ elementTitle, subsections, activeSubsection, currentElementNumber }: ElementSidebarProps) {
  return (
    <>
      <h3 className='hidden lg:block font-lato text-[#63B1E5] text-[15px] lg:text-[15px] font-semibold leading-[16px] mb-6 lg:mb-4'>{elementTitle}</h3>
      <p className='lg:hidden font-lato text-[16px] font-bold leading-[22px] text-[#043F76] px-7 break-words whitespace-normal pb-6 border-b'>{elementTitle}</p>

      <div className='p-6 lg:hidden'>
        <button className='bg-[#07308C] w-full text-white py-[8px] px-[18px] flex justify-center items-center rounded-xl'>
          <Image src={`${assetPathMode === 'PROD' ? '/unite-toolkit' : ''}/back_to_home.svg`} alt='back_to_home img' height={16} width={16} priority />
          <Link href='/doc/main-contents' className='flex items-center ml-3 hover:opacity-70 font-bold text-[14px]'>
            <span>Back to Toolkit Home</span>
          </Link>
        </button>
      </div>

      <ul className='space-y-3 lg:space-y-2'>
        {subsections.map((each) => (
          <li key={each.id}>
            <Link
              href={`/doc/main-contents/element-${currentElementNumber}/e${each.id}`}
              className={`block ml-0 lg:ml-1 py-3 lg:py-2 font-medium leading-[18px] font-lato px-4 lg:px-3 text-[14px] text-[#454545] ${
                activeSubsection === each.id ? 'bg-[#D837371A] border-l-4 border-[#FD5045] text-[#63B1E5]' : 'hover:bg-gray-100'
              }`}
            >
              <span>
                <span>{each.id}</span> {each.title.length > 40 ? `${each.title.substring(0, 40)}...` : each.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className='mt-8 ml-0 lg:ml-1 sm:hidden lg:block'>
        <Link href='/doc/main-contents' className='flex items-center text-[#193E72] hover:opacity-70 font-medium text-[14px] lg:text-sm'>
          <ArrowLeft size={20} className='mr-2 h-4 flex-shrink-0' />
          <span>Return to Guidebook</span>
        </Link>
      </div>
    </>
  );
}
