'use client';

import React, { ReactNode } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import InnerPageNavButtons from '@/components/layout/InnerPageNavButtons';
import ElementHeader from '@/components/layout/ElementHeader';
import ElementSidebar from '@/components/layout/ElementSidebar';

const subsections = [
  { id: '4.1', title: 'Identify the most responsible person to coordinate the transition process, act as the main contact, and ensure continuity in the youth’s care.' },
  {
    id: '4.2',
    title:
      'Identify everyone else involved in the transition and their specific role in supporting the transition process (e.g. child and adolescent mental health services, adult mental health services, youth and family members/caregivers, transition navigator, primary care practitioners, etc.).',
  },
  {
    id: '4.3',
    title:
      'Collaborate with youth (and family members/caregivers, if invited by youth) to identify adult services that are an appropriate fit, and confirm the adult mental health service eligibility criteria.',
  },
  { id: '4.4', title: 'Identify the most responsible person to coordinate the transition process, act as the main contact, and ensure continuity in the youth’s care.' },
  {
    id: '4.5',
    title: 'In collaboration with youth (and their family members/caregivers, if appropriate), complete an individualized transition plan and keep it up-to-date.',
  },
  {
    id: '4.6',
    title:
      'At least 6-months prior to transfer of care child and adolescent mental health services clinician initiate transition planning with the adult mental health services provider, which may include joint working meetings or a period of parallel care; include youth (and their family members/caregivers, if appropriate) in meetings.',
  },
  {
    id: '4.7',
    title:
      'With youth’s consent, communicate processes with primary care provider (i.e. family physician, nurse practitioner, or pharmacist) to ensure they have consistent up-to-date medication and treatment information.',
  },
  {
    id: '4.8',
    title:
      'Provide youth (and their family members/caregivers, if appropriate) with up-to-date contact information for developmentally appropriate self-care management resources, community supports, and community mental health resources.',
  },
  { id: '4.9', title: 'If desired by youth, facilitate connections to peer support during the transition process.' },
];

export default function Element4Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Extract subsection ID from the pathname
  // Assuming paths like /doc/main-contents/element-1/e1.1
  const subsectionMatch = pathname.match(/e(\d+\.\d+)$/);
  const activeSubsection = subsectionMatch ? subsectionMatch[1] : '4.1';

  const elementTitle = 'Element 4 Transition Planning ';
  const currentElementNumber = 4;

  // Get current index and determine next/previous sections
  const currentIndex = subsections.findIndex((section) => section.id === activeSubsection);
  const prevSection = currentIndex > 0 ? subsections[currentIndex - 1] : null;
  const nextSection = currentIndex < subsections.length - 1 ? subsections[currentIndex + 1] : null;

  // Check if we're at the last subsection of this element
  const isLastSubsection = activeSubsection === '4.9';

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
