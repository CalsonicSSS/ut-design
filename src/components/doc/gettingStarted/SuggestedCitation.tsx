import { assetPathMode } from '@/utils';
import Image from 'next/image';
import React from 'react';

export default function SuggestedCitationContent() {
  return (
    <section className='py-10 doc-content-text'>
      <h1 className='doc-content-title sm:text-[26px] lg:text-[32px] mb-8'>Suggested Citation</h1>
      <p className='mb-6'>
        Cleverley et al. (2023). The UNITE Guidebook: Core Components of CAMHS to AMHS Transitions. University of Toronto. Retrieved from cleverleylab.com/guidebook
      </p>
      <p>For more information, please contact: </p>
      <p>Dr. Kristin Cleverley </p>
      <div className='flex'>
        <Image src={`${assetPathMode === 'PROD' ? '/unite-toolkit' : ''}/email.svg`} alt='email' height={15} width={15} priority />
        <p className='text-[#00B6EF] ms-2'>k.cleverley@utoronto.ca</p>
      </div>
    </section>
  );
}
