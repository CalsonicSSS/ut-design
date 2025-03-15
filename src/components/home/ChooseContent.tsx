import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function ChooseContent() {
  // Sort items by number and split into two columns for desktop view
  const contentItems = [
    {
      number: '01',
      title: 'Organizational Transition Policy',
      description: 'Develop a transition policy and provide staff training on facilitating transitions.',
      width: '224px',
      href: '/doc#e1',
    },
    {
      number: '02',
      title: 'Transition tracking and monitoring',
      description: 'Establish a protocol for tracking and monitoring transition steps.',
      width: '224px',
      href: '/doc#e2',
    },
    {
      number: '03',
      title: 'Transition readiness',
      description: 'Identify youth’s transition-related needs and goals then co-create a transition plan with youth.',
      width: '250px',
      href: '/doc#e3',
    },
    {
      number: '04',
      title: 'Transition planning',
      description: 'Implement the transition plan, including identifying and collaborating with the adult services.',
      width: '230px',
      href: '/doc#e4',
    },
    {
      number: '05',
      title: 'Transfer of care',
      description: 'Prepare a transfer package and hold a transfer meeting between child and adult services.',
      width: '230px',
      href: '/doc#e5',
    },
    {
      number: '06',
      title: 'Transfer completion',
      description: 'Follow up with youth post-transition to ensure they have connected with adult services.',
      width: '230px',
      href: '/doc#e6',
    },
  ].sort((a, b) => parseInt(a.number) - parseInt(b.number));

  // Split items into two arrays for desktop columns
  const firstColumn = contentItems.slice(0, 3);
  const secondColumn = contentItems.slice(3);

  return (
    <>
      <div className='font-open-sans sm:py-20 lg:py-32 bg-[#F7FCFE]'>
        <div className='flex flex-col lg:flex-row'>
          <div className='lg:ps-[7%] mb-8 text-center lg:text-left'>
            <p className='main-title text-3xl sm:text-4xl lg:text-5xl'>
              The Six <br className='hidden lg:block' /> Core Elements of <br className='hidden lg:block' /> Healthcare <br className='hidden lg:block' /> Transitions
            </p>
          </div>

          <div className='lg:mt-8 lg:ms-[8%] w-full lg:w-auto flex justify-center'>
            {/* Mobile view - single column */}
            <div className='md:hidden'>
              {contentItems.map((item, index) => (
                <Link href={item.href} key={index} className='flex items-start group mb-8'>
                  <p className='text-[#C9CBC7] text-4xl sm:text-6xl lg:text-special font-bold mr-3 sm:mr-5 group-hover:text-[#43CDC1] leading-none'>{item.number}</p>
                  <div>
                    <p className='font-bold text-sm text-[#454545] mb-2 text-start'>{item.title}</p>
                    <p className='text-[12px] text-[#454545] font-light text-start w-full sm:w-[224px]'>{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Desktop view - two columns */}
            <div className='hidden md:flex gap-x-8 lg:gap-x-32'>
              {/* First Column */}
              <div className='flex flex-col gap-y-8'>
                {firstColumn.map((item, index) => (
                  <Link href={item.href} key={index} className='flex items-center group'>
                    <p className='text-[#C9CBC7] text-4xl sm:text-6xl lg:text-special font-bold mr-3 sm:mr-5 group-hover:text-[#43CDC1] leading-none'>{item.number}</p>
                    <div>
                      <p className='font-bold text-sm text-[#454545] mb-2 text-start'>{item.title}</p>
                      <p className='text-xs text-[#454545] font-light text-start w-full sm:w-[224px] lg:w-[230px]'>{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Second Column */}
              <div className='flex flex-col gap-y-8'>
                {secondColumn.map((item, index) => (
                  <Link href={item.href} key={index} className='flex items-center group'>
                    <p className='text-[#C9CBC7] text-4xl sm:text-6xl lg:text-special font-bold mr-3 sm:mr-5 group-hover:text-[#43CDC1] leading-none'>{item.number}</p>
                    <div>
                      <p className='font-bold text-sm text-[#454545] mb-2 text-start'>{item.title}</p>
                      <p className='text-xs text-[#454545] font-light text-start w-full sm:w-[224px] lg:w-[230px]'>{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center items-center bg-white bg-opacity-43 px-4 sm:px-8 lg:px-0 lg:py-40 py-24'>
        <div className='w-full lg:w-[1217px] border-dashed border-2 border-[#8E98A8] rounded-3xl flex flex-col lg:flex-row justify-between items-center p-6 lg:px-[80px] lg:h-[157px]'>
          <p className='w-full lg:w-[635px] base-text-content text-size-base lg:text-xl text-center lg:text-left mb-6 lg:mb-0'>
            Further support for the implementation of these core components can be found in the <span className='text-navy-1 font-semibold'>Unite Implementation Workbook.</span>{' '}
            These two resources are intended to be used together.
          </p>
          <button className='button-fill pr-4 w-full sm:w-auto'>
            Download PDF
            <ArrowRight size={20} className='ms-3' />
          </button>
        </div>
      </div>
    </>
  );
}
