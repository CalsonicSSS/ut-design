'use client';

import { ReactNode, useState } from 'react';
import Footer from '@/components/layout/Footer';
import DocSidebar from '@/components/layout/DocSidebar';
import DocHeader from '@/components/layout/DocHeader';
import GlossarySidebar from '@/components/layout/GlossarySidebar';
import { usePathname } from 'next/navigation';
import CleverleylabHeader from '@/components/layout/CleverleylabHeader';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

export default function DocLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isMainElement = pathname.includes('/main-contents/element');
  const [glossaryOpen, setGlossaryOpen] = useState(false);

  if (isMainElement) {
    return (
      <div className='min-h-screen flex flex-col'>
        <CleverleylabHeader />
        <main>{children}</main>;
        <div className='lg:block sm:hidden'>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <DocHeader />

      <div className='flex flex-1 relative'>
        {/* mobile sidebar */}
        <Sheet>
          <SheetTrigger asChild>
            <button className='lg:hidden fixed z-50 top-[60px] left-4 bg-white rounded-full p-2 shadow-lg' aria-label='Toggle element sidebar'>
              <Menu size={24} />
            </button>
          </SheetTrigger>

          {/* Mobile Sidebar Sheet */}
          <SheetContent side='left' className='w-[80%] p-6 overflow-y-auto max-h-screen'>
            <DocSidebar />
          </SheetContent>
        </Sheet>

        {/* Mobile glossary toggle button */}
        <button onClick={() => setGlossaryOpen(!glossaryOpen)} className='lg:hidden fixed z-50 top-[60px] right-4 bg-white rounded-full p-2 shadow-md' aria-label='Toggle glossary'>
          {glossaryOpen ? (
            <X size={24} />
          ) : (
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path d='M9 4V22' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          )}
        </button>

        {/* regular Sidebar */}
        <aside
          className='
            hidden lg:block 
            lg:sticky lg:top-0 lg:max-h-screen 
            w-[30%] 
            shrink-0
          '
        >
          <div className='overflow-y-auto max-h-screen py-16 pl-32 pr-16'>
            <DocSidebar />
          </div>
        </aside>

        {/* Main content area - adjusted padding for mobile */}
        <main className='flex-1 px-8 sm:pt-4 sm:pb-8 lg:py-16 lg:pl-24 lg:pr-96'>{children}</main>

        {/* Right side glossary sidebar - transforms for mobile */}
        <aside
          className={`
          ${glossaryOpen ? 'translate-x-0' : 'translate-x-full'}
          lg:translate-x-0
          fixed 
          top-0 
          right-0 
          z-40 
          h-full 
          w-full sm:w-1/5 lg:w-auto
          bg-transparent 
          transition-transform duration-300 ease-in-out
          pt-20 lg:pt-0
        `}
        >
          <GlossarySidebar />
        </aside>
      </div>

      <Footer />
    </div>
  );
}
