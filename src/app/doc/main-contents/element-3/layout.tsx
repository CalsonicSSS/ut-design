'use client';

import React, { ReactNode } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import InnerPageNavButtons from '@/components/layout/InnerPageNavButtons';
import ElementHeader from '@/components/layout/ElementHeader';
import ElementSidebar from '@/components/layout/ElementSidebar';

const subsections = [
  {
    id: '3.1',
    title:
      'Conduct regular transition readiness assessments, and in collaboration with youth (and family members/caregivers, if appropriate) identify youths’ needs and goals, update regularly.',
  },
  {
    id: '3.2',
    title: 'Provide youth (and their family members/caregivers, if appropriate) information about what to expect from adult mental health services.',
  },
  {
    id: '3.3',
    title:
      'Develop individualized transition plan in collaboration with youth (and their family members/caregivers, if appropriate) a minimum of 6-months before planned transition, or as early as possible.',
  },
];

export default function Element3Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Extract subsection ID from the pathname
  // Assuming paths like /doc/main-contents/element-1/e1.1
  const subsectionMatch = pathname.match(/e(\d+\.\d+)$/);
  const activeSubsection = subsectionMatch ? subsectionMatch[1] : '3.1';

  const elementTitle = 'Element 3 Transition Readiness';
  const currentElementNumber = 3;

  // Get current index and determine next/previous sections
  const currentIndex = subsections.findIndex((section) => section.id === activeSubsection);
  const prevSection = currentIndex > 0 ? subsections[currentIndex - 1] : null;
  const nextSection = currentIndex < subsections.length - 1 ? subsections[currentIndex + 1] : null;

  // Check if we're at the last subsection of this element
  const isLastSubsection = activeSubsection === '3.3';

  return (
    <div className='w-full'>
      {/* Blue header section */}
      <ElementHeader elementTitle={elementTitle} subsectionId={activeSubsection} subsectionTitle={subsections.find((s) => s.id === activeSubsection)?.title || ''} />

      {/* mobile sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <button className='lg:hidden fixed z-50 top-[60px] left-4 bg-white rounded-full p-2 shadow-lg' aria-label='Toggle element sidebar'>
            <Menu size={24} />
          </button>
        </SheetTrigger>

        {/* Mobile Sidebar Sheet */}
        <SheetContent side='left' className='w-[80%] py-6 px-0 overflow-y-auto max-h-screen'>
          <ElementSidebar currentElementNumber={currentElementNumber} elementTitle={elementTitle} subsections={subsections} activeSubsection={activeSubsection} />
        </SheetContent>
      </Sheet>

      {/* regular side bar */}
      <div className='flex relative'>
        <aside
          className='
            hidden lg:block 
            lg:sticky lg:top-0 lg:max-h-screen 
            w-[30%] 
            shrink-0
          '
        >
          <div className='py-16 px-6 lg:pl-32 lg:pr-16 overflow-y-auto'>
            <ElementSidebar currentElementNumber={currentElementNumber} elementTitle={elementTitle} subsections={subsections} activeSubsection={activeSubsection} />
          </div>
        </aside>

        {/* Main content area */}
        <div className='flex-1 px-8 py-10 lg:pl-24 lg:pr-96 lg:py-14 pb-24 lg:pb-14'>
          <main>{children}</main>

          {/* Enhanced Navigation buttons with cross-element support */}
          <InnerPageNavButtons prevSection={prevSection} nextSection={nextSection} currentElementNumber={currentElementNumber} isLastSubsection={isLastSubsection} />
        </div>
      </div>
    </div>
  );
}
