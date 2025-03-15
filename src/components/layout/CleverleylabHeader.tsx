'use client';

import Link from 'next/link';
import { Search, Menu } from 'lucide-react';
import { useState } from 'react';

const CleverleylabHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='w-full'>
      {/* Preserve exact desktop layout at 1440px+ while making it responsive below */}
      <div className='h-[80px] px-4 sm:px-8 lg:px-32 xl:px-64 flex items-center justify-between'>
        {/* Logo and Navigation Group */}
        <div className='flex items-center'>
          {/* Logo */}
          <Link href='/' className='font-open-sans font-bold sm:text-2xl md:text-3xl tracking-[1px] text-navy-3'>
            cleverleylab
          </Link>

          {/* Desktop Navigation - hidden on mobile, exact positioning maintained on desktop */}
          <nav className='hidden lg:flex items-center gap-6 ms-20'>
            {[
              { href: '/', label: 'Home' },
              { href: '/', label: 'Projects' },
              { href: '/', label: 'Team' },
              { href: '/', label: 'Resources' },
              { href: '/', label: 'In the Media' },
              { href: '/', label: 'Contact Us' },
            ].map((link) => (
              <Link key={link.label} href={link.href} className='font-open-sans text-base text-nav-item hover:text-navy-1'>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side controls */}
        <div className='flex items-center gap-4'>
          {/* Mobile menu button - only visible on mobile */}
          <button className='lg:hidden p-2' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className='w-6 h-6 text-nav-item' />
          </button>

          {/* Search Icon */}
          <button className='p-2'>
            <Search className='w-5 h-5 text-nav-item' strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu - slides in from top when menu is opened */}
      {isMobileMenuOpen && (
        <div className='lg:hidden absolute z-50 w-full bg-white border-b shadow-lg'>
          <nav className='flex flex-col py-2'>
            {[
              { href: '/', label: 'Home' },
              { href: '/', label: 'Projects' },
              { href: '/', label: 'Team' },
              { href: '/', label: 'Resources' },
              { href: '/', label: 'In the Media' },
              { href: '/', label: 'Contact Us' },
            ].map((link) => (
              <Link key={link.label} href={link.href} className='font-open-sans text-base text-nav-item hover:bg-gray-50 px-8 py-3' onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default CleverleylabHeader;
