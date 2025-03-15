import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

// Define all elements and their first subsections for cross-element navigation
const elementMap = [
  { element: 1, path: '/doc/main-contents/element-1', firstSubsection: '1.1' },
  { element: 2, path: '/doc/main-contents/element-2', firstSubsection: '2.1' },
  { element: 3, path: '/doc/main-contents/element-3', firstSubsection: '3.1' },
  { element: 4, path: '/doc/main-contents/element-4', firstSubsection: '4.1' },
  { element: 5, path: '/doc/main-contents/element-5', firstSubsection: '5.1' },
  { element: 6, path: '/doc/main-contents/element-6', firstSubsection: '6.1' },
];

interface InnerPageNavButtonsProps {
  prevSection: { id: string; title: string } | null;
  nextSection: { id: string; title: string } | null;
  currentElementNumber: number;
  isLastSubsection: boolean;
}

export default function InnerPageNavButtons({ prevSection, nextSection, currentElementNumber, isLastSubsection }: InnerPageNavButtonsProps) {
  // Find next element for navigation if we're at the last subsection
  const nextElement = isLastSubsection ? elementMap.find((item) => item.element === currentElementNumber + 1) : null;

  // Find previous element for navigation if we're at the first subsection
  const isPrevElementNeeded = !prevSection && currentElementNumber > 1;
  const prevElement = isPrevElementNeeded ? elementMap.find((item) => item.element === currentElementNumber - 1) : null;

  return (
    <div
      className='sm:border-t lg:border-none
        fixed bottom-0 left-0 w-full p-4 bg-white shadow-md 
        flex flex-col sm:flex-row sm:justify-between gap-4 
        lg:relative lg:mt-24 lg:shadow-none'
    >
      {/* Previous navigation - check if previous section exists, otherwise link to previous element's last section or main contents */}
      {prevSection ? (
        <Link href={`/doc/main-contents/element-${currentElementNumber}/e${prevSection.id}`} className='flex items-center font-roboto text-[16px] leading-[25px] hover:opacity-70'>
          <ArrowLeft className='mr-2 flex-shrink-0' />
          <span className='truncate'>Previous Element: {prevSection.id}</span>
        </Link>
      ) : prevElement ? (
        <Link href={prevElement.path} className='flex items-center font-roboto text-[16px] leading-[25px] hover:opacity-70'>
          <ArrowLeft className='mr-2 flex-shrink-0' />
          <span className='truncate'>Previous: Element {currentElementNumber - 1}</span>
        </Link>
      ) : (
        <Link href='/doc/main-contents' className='flex items-center font-roboto text-[16px] leading-[25px] hover:opacity-70'>
          <ArrowLeft className='mr-2 flex-shrink-0' />
          <span>Back to Guidebook</span>
        </Link>
      )}

      {/* Next navigation - check if next section exists, otherwise link to next element's first section */}
      {nextSection && !isLastSubsection ? (
        <Link
          href={`/doc/main-contents/element-${currentElementNumber}/e${nextSection.id}`}
          className='flex items-center font-roboto text-[16px] leading-[25px] hover:opacity-70 sm:justify-end'
        >
          <span className='truncate'>Next Element: {nextSection.id}</span>
          <ArrowRight className='ml-2 flex-shrink-0' />
        </Link>
      ) : nextElement ? (
        <Link href={nextElement.path} className='flex items-center font-roboto text-[16px] leading-[25px] hover:opacity-70 sm:justify-end'>
          <span className='truncate'>Next: Element {currentElementNumber + 1}.1</span>
          <ArrowRight className='ml-2 flex-shrink-0' />
        </Link>
      ) : null}
    </div>
  );
}
