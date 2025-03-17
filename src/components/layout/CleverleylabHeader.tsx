'use client';

import Link from 'next/link';
import { Search, Menu, ChevronDown, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const CleverleylabHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const [isMobileTeamOpen, setIsMobileTeamOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const teamDropdownRef = useRef<HTMLDivElement | null>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement | null>(null);

  // Project dropdown items
  const projectItems = [
    { href: 'https://cleverleylab.com/projects/longitudinal-youth-in-transition-study-lyits/', label: 'Longitudinal Youth in Transitional Study' },
    { href: 'https://cleverleylab.com/projects/delphi-study/', label: 'National Delphi Study' },
    { href: 'https://cleverleylab.com/projects/navigator-evaluation/', label: 'Navigator Evaluation Advancing Transitions' },
    { href: 'https://cleverleylab.com/projects/navigatecampus/', label: 'Navigate CAMPUS' },
    { href: 'https://cleverleylab.com/unite-toolkit/', label: 'UNITE Toolkit' },
    { href: 'https://cleverleylab.com/projects/studentmentalhealth/', label: 'Connaught Award' },
    { href: 'https://cleverleylab.com/projects/tips/', label: 'TIPS' },
  ];

  // Secondary dropdown items (shown on right of Projects menu)
  const secondaryItems = [
    { href: 'https://cleverleylab.com/projects/delphi-study/delphi-video/', label: 'Delphi Video' },
    { href: 'https://cleverleylab.com/projects/delphi-study/core-components/', label: 'Core Components' },
  ];

  // Team dropdown items
  const teamItems = [
    { href: 'https://cleverleylab.com/team/research-team/', label: 'Research Team' },
    { href: 'https://cleverleylab.com/team/supervision/', label: 'Supervision / Trainees' },
  ];

  // Resources dropdown items
  const resourcesItems = [
    { href: 'https://cleverleylab.com/resources/publications/', label: 'Our Publication' },
    { href: 'https://cleverleylab.com/resources/presentations/', label: 'Our Presentation' },
    { href: 'https://cleverleylab.com/resources/toolbox/', label: 'Resource Toolbox' },
  ];

  // Secondary Resources dropdown items
  const resourcesSecondaryItems = [{ href: 'https://cleverleylab.com/resources/presentations/tbi/', label: 'TBI Workshop' }];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Close Projects dropdown if clicked outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsDropdownOpen(false);
      }

      // Close Team dropdown if clicked outside
      if (teamDropdownRef.current && !teamDropdownRef.current.contains(event.target as Node)) {
        setIsTeamDropdownOpen(false);
      }

      // Close Resources dropdown if clicked outside
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node)) {
        setIsResourcesDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            <Link href='https://cleverleylab.com/' className='font-open-sans text-base text-nav-item hover:text-navy-1'>
              Home
            </Link>

            {/* Projects dropdown */}
            <div className='relative' ref={dropdownRef}>
              <button
                className='font-open-sans text-base text-nav-item hover:text-navy-1 flex items-center gap-1'
                onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                aria-expanded={isProjectsDropdownOpen}
              >
                Projects <ChevronDown className='w-4 h-4' />
              </button>

              {isProjectsDropdownOpen && (
                <div className='absolute top-full left-0 z-50 bg-white shadow-lg border border-gray-200 flex'>
                  {/* Primary project items */}
                  <div className='w-72'>
                    {projectItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className='block py-3 px-4 hover:bg-gray-50 text-gray-700 border-b border-gray-100 last:border-b-0'
                        onClick={() => setIsProjectsDropdownOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  {/* Secondary items */}
                  <div className='w-64 bg-gray-50'>
                    {secondaryItems.map((item) => (
                      <Link key={item.label} href={item.href} className='block py-3 px-4 hover:bg-gray-100 text-gray-700' onClick={() => setIsProjectsDropdownOpen(false)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Team dropdown */}
            <div className='relative' ref={teamDropdownRef}>
              <button
                className='font-open-sans text-base text-nav-item hover:text-navy-1 flex items-center gap-1'
                onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)}
                aria-expanded={isTeamDropdownOpen}
              >
                Team <ChevronDown className='w-4 h-4' />
              </button>

              {isTeamDropdownOpen && (
                <div className='absolute top-full left-0 z-50 bg-white shadow-lg border border-gray-200'>
                  <div className='w-64'>
                    {teamItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className='block py-3 px-4 hover:bg-gray-50 text-gray-700 border-b border-gray-100 last:border-b-0'
                        onClick={() => setIsTeamDropdownOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resources dropdown */}
            <div className='relative' ref={resourcesDropdownRef}>
              <button
                className='font-open-sans text-base text-nav-item hover:text-navy-1 flex items-center gap-1'
                onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
                aria-expanded={isResourcesDropdownOpen}
              >
                Resources <ChevronDown className='w-4 h-4' />
              </button>

              {isResourcesDropdownOpen && (
                <div className='absolute top-full left-0 z-50 bg-white shadow-lg border border-gray-200 flex'>
                  {/* Primary resources items */}
                  <div className='w-64'>
                    {resourcesItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className='block py-3 px-4 hover:bg-gray-50 text-gray-700 border-b border-gray-100 last:border-b-0'
                        onClick={() => setIsResourcesDropdownOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  {/* Secondary resource items */}
                  <div className='w-64 bg-gray-50'>
                    {resourcesSecondaryItems.map((item) => (
                      <Link key={item.label} href={item.href} className='block py-3 px-4 hover:bg-gray-100 text-gray-700' onClick={() => setIsResourcesDropdownOpen(false)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other navigation items */}
            {[
              { href: 'https://cleverleylab.com/in-the-media/', label: 'In the Media' },
              { href: 'https://cleverleylab.com/contact/', label: 'Contact Us' },
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
          <button className='lg:hidden p-2' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-expanded={isMobileMenuOpen} aria-label='Toggle navigation menu'>
            <Menu className='w-6 h-6 text-nav-item' />
          </button>

          {/* Search Icon */}
          <button className='p-2' aria-label='Search'>
            <Search className='w-5 h-5 text-nav-item' strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu - slides in from top when menu is opened */}
      {isMobileMenuOpen && (
        <div className='lg:hidden absolute z-50 w-full bg-white border-b shadow-lg'>
          <nav className='flex flex-col py-2'>
            <Link href='https://cleverleylab.com/' className='font-open-sans text-base text-nav-item hover:bg-gray-50 px-8 py-3' onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>

            {/* Mobile Projects dropdown */}
            <div>
              <button
                className='font-open-sans text-base text-nav-item hover:bg-gray-50 px-8 py-3 w-full text-left flex items-center justify-between'
                onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                aria-expanded={isMobileProjectsOpen}
              >
                Projects
                {isMobileProjectsOpen ? <ChevronDown className='w-4 h-4' /> : <ChevronRight className='w-4 h-4' />}
              </button>

              {isMobileProjectsOpen && (
                <div className='bg-gray-50'>
                  {/* Primary project items */}
                  {projectItems.map((item) => (
                    <Link key={item.label} href={item.href} className='block py-2 px-12 hover:bg-gray-100 text-gray-700 text-sm' onClick={() => setIsMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}

                  {/* Secondary items in mobile view */}
                  {secondaryItems.map((item) => (
                    <Link key={item.label} href={item.href} className='block py-2 px-12 hover:bg-gray-100 text-gray-700 text-sm' onClick={() => setIsMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Team dropdown */}
            <div>
              <button
                className='font-open-sans text-base text-nav-item hover:bg-gray-50 px-8 py-3 w-full text-left flex items-center justify-between'
                onClick={() => setIsMobileTeamOpen(!isMobileTeamOpen)}
                aria-expanded={isMobileTeamOpen}
              >
                Team
                {isMobileTeamOpen ? <ChevronDown className='w-4 h-4' /> : <ChevronRight className='w-4 h-4' />}
              </button>

              {isMobileTeamOpen && (
                <div className='bg-gray-50'>
                  {teamItems.map((item) => (
                    <Link key={item.label} href={item.href} className='block py-2 px-12 hover:bg-gray-100 text-gray-700 text-sm' onClick={() => setIsMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Resources dropdown */}
            <div>
              <button
                className='font-open-sans text-base text-nav-item hover:bg-gray-50 px-8 py-3 w-full text-left flex items-center justify-between'
                onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                aria-expanded={isMobileResourcesOpen}
              >
                Resources
                {isMobileResourcesOpen ? <ChevronDown className='w-4 h-4' /> : <ChevronRight className='w-4 h-4' />}
              </button>

              {isMobileResourcesOpen && (
                <div className='bg-gray-50'>
                  {/* Primary resources items */}
                  {resourcesItems.map((item) => (
                    <Link key={item.label} href={item.href} className='block py-2 px-12 hover:bg-gray-100 text-gray-700 text-sm' onClick={() => setIsMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}

                  {/* Secondary resource items */}
                  {resourcesSecondaryItems.map((item) => (
                    <Link key={item.label} href={item.href} className='block py-2 px-12 hover:bg-gray-100 text-gray-700 text-sm' onClick={() => setIsMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other navigation items */}
            {[
              { href: 'https://cleverleylab.com/in-the-media/', label: 'In the Media' },
              { href: 'https://cleverleylab.com/contact/', label: 'Contact Us' },
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
