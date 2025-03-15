import Image from 'next/image';
import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { assetPathMode } from '@/utils';

export default function ResourceFlow(): ReactNode {
  return (
    <div className='w-full pb-10 lg:pb-20'>
      {/* First section */}
      <div className='flex flex-col lg:flex-row items-center lg:px-0'>
        {/* Image scales down on mobile but maintains original size on desktop */}
        <div className='w-full lg:w-auto'>
          <Image
            src={`${assetPathMode === 'PROD' ? '/unite-toolkit' : ''}/flow_1.svg`}
            alt='flow_1 illustration'
            className='object-contain w-full h-auto'
            height={682}
            width={599}
            priority
          />
        </div>

        {/* Content section */}
        <div className='w-full lg:w-[663px] lg:ms-[8%] mt-8 lg:mt-0 px-4 sm:px-8 lg:px-0'>
          <p className='main-title mb-8 lg:mb-12 text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left'>Using this Resource</p>
          <p className='base-text-content mb-8 text-base lg:text-lg text-center lg:text-left'>
            Core components are divided into six categories, or &ldquo;elements&rdquo;, intended to support thinking of the transition process from beginning to end. Each core
            component includes a brief description of the component as well as other resources to support your understanding where relevant. <br />
            This might include:
          </p>
          <div>
            <ul className='ps-5'>
              {/* List items remain the same structure but with responsive text */}
              {['Definitions of keywords', 'Linked citations', 'References to sections of the Implementation Workbook', 'Quotes or notes from expert knowledge users'].map(
                (item, index) => (
                  <li key={index} className='flex items-center gap-4 mb-3'>
                    <div className='flex-shrink-0 rounded-full w-4 h-4 bg-[#FFDBA8]' />
                    <p className='text-base lg:text-lg'>{item}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className='flex flex-col lg:flex-row justify-between mt-28'>
        {/* Left content */}
        <div className='lg:pt-24 lg:ps-[180px] lg:pr-[80px] w-full lg:w-auto'>
          <p className='base-text-content text-base lg:text-lg mb-8 lg:mb-0 lg:w-[618px] lg:h-[116px] text-center lg:text-left sm:px-4 lg:px-0'>
            In many of the components, we describe and link to external resources. These resources provide further learning opportunities and implementation support in alignment
            with that core component. Resources can include:
          </p>

          {/* Tools image */}
          <div className='w-full flex justify-center lg:justify-start sm:px-4 lg:px-0'>
            <Image
              src={`${assetPathMode === 'PROD' ? '/unite-toolkit' : ''}/tools.svg`}
              alt='tools_illustration'
              className='object-contain mt-8 lg:mt-14'
              height={111}
              width={618}
            />
          </div>

          {/* Button container */}
          <div className='w-full flex justify-center lg:justify-start'>
            <Link href='/doc#resources-lists' className='button-fill pr-4 mt-14 w-full sm:w-auto'>
              Resource lists
              <ArrowRight size={20} className='ms-3' />
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className='mt-12 lg:mt-0 w-full lg:w-auto flex justify-center lg:justify-end'>
          <Image
            src={`${assetPathMode === 'PROD' ? '/unite-toolkit' : ''}/flow_2.svg`}
            alt='flow_2_illustration'
            className='object-contain w-full h-auto'
            height={752}
            width={732}
          />
        </div>
      </div>
    </div>
  );
}
