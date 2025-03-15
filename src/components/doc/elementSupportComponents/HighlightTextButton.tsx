'use client';

import { useRouter } from 'next/navigation';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ArrowRight } from 'lucide-react';

export default function HighlightTextButton({ title, clickToId, tooltipDesc }: { title: string; clickToId?: string; tooltipDesc: string }) {
  const router = useRouter();

  const handleNavigateToGlossary = () => {
    if (clickToId) {
      // Navigate to glossary page with the specific term ID as hash
      router.push(`/doc/glossary#${clickToId}`);
    }
  };

  return (
    <>
      <div className='sm:hidden lg:block'>
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger className='text-sm font-semibold text-[#FFAE00] leading-[16px] px-4 py-2 rounded-2xl bg-[#FFF8EE] mr-5'>{title}</TooltipTrigger>
            <TooltipContent side='bottom' className={`bg-white w-[228px] p-5`}>
              <p className='text-[#828282] text-[13px] font-urbanist font-medium leading-[20px]'>{tooltipDesc}</p>
              {clickToId && (
                <div className='flex items-center mt-5 hover:opacity-75 transition-opacity cursor-pointer' onClick={handleNavigateToGlossary}>
                  <button className='text-[#00B6EF] text-[12px] font-urbanist font-semibold mr-1'>Go to definition lists</button>
                  <ArrowRight className='flex-shrink-0 text-[#63B1E5] w-6 h-4' />
                </div>
              )}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div
        onClick={handleNavigateToGlossary}
        className='cursor-pointer sm:block lg:hidden text-sm font-semibold text-[#FFAE00] leading-[16px] px-4 py-2 rounded-2xl bg-[#FFF8EE] mr-5'
      >
        {title}
      </div>
    </>
  );
}
