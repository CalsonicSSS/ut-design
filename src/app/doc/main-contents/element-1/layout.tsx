'use client';

import React, { ReactNode } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import InnerPageNavButtons from '@/components/layout/InnerPageNavButtons';
import ElementHeader from '@/components/layout/ElementHeader';
import ElementSidebar from '@/components/layout/ElementSidebar';

const subsections = [
  { id: '1.1', title: 'Develop an integrated care pathway that describes the steps that make up the transition process.' },
  {
    id: '1.2',
    title:
      'Develop an organization-specific transition policy with youth (with input from family members/caregivers) that describes the organization’s approach to mental health care transitions, and make it publicly available.',
  },
  {
    id: '1.3',
    title:
      'Develop a youth-centered and developmentally appropriate transition protocol in collaboration with both the child and adolescent mental health services and the adult mental health services, that outlines standards for communication and information sharing.',
  },
  { id: '1.4', title: 'Ensure that all staff have the knowledge, skills and training to effectively support the agency/services approach to transitions.' },
  {
    id: '1.5',
    title: 'Determine clear responsibilities for all roles within the organization involved in the transition of care, to be further informed by the needs of each youth.',
  },
  { id: '1.6', title: 'Partner with the youth (and family members/caregivers, if appropriate) at all phases of transition and decision-making' },
  { id: '1.7', title: 'Establish a plan to evaluate the organization’s transition protocol.' },
];

export default function Element1Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Extract subsection ID from the pathname
  // Assuming paths like /doc/main-contents/element-1/e1.1
  const subsectionMatch = pathname.match(/e(\d+\.\d+)$/);
  const activeSubsection = subsectionMatch ? subsectionMatch[1] : '1.1';

  const elementTitle = 'Element 1 Organization Transition Policy';
  const currentElementNumber = 1;

  // Get current index and determine next/previous sections
  const currentIndex = subsections.findIndex((section) => section.id === activeSubsection);
  const prevSection = currentIndex > 0 ? subsections[currentIndex - 1] : null;
  const nextSection = currentIndex < subsections.length - 1 ? subsections[currentIndex + 1] : null;

  // Check if we're at the last subsection of this element
  const isLastSubsection = activeSubsection === '1.7';

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

      <div className='flex relative'>
        {/* regular side bar */}
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
