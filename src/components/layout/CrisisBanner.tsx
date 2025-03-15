'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function CrisisBanner() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <>
      {isBannerVisible && (
        <div className='w-full bg-navy-3 text-white py-4 relative'>
          <p className='font-karla font-bold text-sm text-center px-4 md:px-32 sm:pr-20'>
            Please note that the Cleverley Lab does not provide mental health services. If you are in a crisis, please call 911 or go to your nearest Emergency Department.
          </p>
          <button className='absolute right-5 top-1/2 -translate-y-1/2 text-white' onClick={() => setIsBannerVisible(false)}>
            <X size={'20px'} />
          </button>
        </div>
      )}
    </>
  );
}
