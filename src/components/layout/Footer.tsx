import React, { ReactElement } from 'react';
import Image from 'next/image';
import { assetPathMode } from '@/utils';

export default function Footer(): ReactElement {
  return (
    <div className='font-open-sans w-full bg-navy-3 py-8 sm:py-10 lg:py-12 px-4 sm:px-8 lg:px-32 xl:px-80'>
      <div className='flex sm:flex-col lg:flex-row items-center justify-between gap-8 sm:gap-4'>
        {/* Text content - centered on mobile, left-aligned on desktop */}
        <p className='text-size-base text-white font-bold tracking-[2px] text-center'>Uncomplicated access, seamless transitions, continuous care.</p>

        {/* Images container */}
        <div className='flex items-center gap-6 sm:gap-0'>
          <Image src={`${assetPathMode === 'PROD' ? '/unite-toolkit' : ''}/social_links.svg`} alt='social_links illustration' className='object-contain' height={32} width={62} />
          {/* Spacer - hidden on mobile */}
          <div className='hidden sm:block sm:mr-10 lg:mr-20' />
          <Image src={`${assetPathMode === 'PROD' ? '/unite-toolkit' : ''}/logo.svg`} alt='logo illustration' className='object-contain' height={73} width={129} />
        </div>
      </div>

      {/* Copyright text */}
      <p className='text-center text-sm mt-8 sm:mt-10 text-[#717170]'>Copyright Dr. Kristin Cleverley 2023.</p>
    </div>
  );
}
