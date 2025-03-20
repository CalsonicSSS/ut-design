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
  const [hoveredProjectItem, setHoveredProjectItem] = useState<string | null>(null);
  const [hoveredResourceItem, setHoveredResourceItem] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const teamDropdownRef = useRef<HTMLDivElement | null>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement | null>(null);

  // Project dropdown items with associated secondary items
  const projectItems = [
    {
      href: 'https://cleverleylab.com/projects/longitudinal-youth-in-transition-study-lyits/',
      label: 'Longitudinal Youth in Transitional Study',
      secondaryItems: [],
    },
    {
      href: 'https://cleverleylab.com/projects/delphi-study/',
      label: 'National Delphi Study',
      secondaryItems: [
        { href: 'https://cleverleylab.com/projects/delphi-study/delphi-video/', label: 'Delphi Video' },
        { href: 'https://cleverleylab.com/projects/delphi-study/core-components/', label: 'Core Components' },
      ],
    },
    {
      href: 'https://cleverleylab.com/projects/navigator-evaluation/',
      label: 'Navigator Evaluation Advancing Transitions',
      secondaryItems: [],
    },
    {
      href: 'https://cleverleylab.com/projects/navigatecampus/',
      label: 'Navigate CAMPUS',
      secondaryItems: [],
    },
    {
      href: 'https://cleverleylab.com/unite-toolkit/',
      label: 'UNITE Toolkit',
      secondaryItems: [],
    },
    {
      href: 'https://cleverleylab.com/projects/studentmentalhealth/',
      label: 'Connaught Award',
      secondaryItems: [],
    },
    {
      href: 'https://cleverleylab.com/projects/tips/',
      label: 'TIPS',
      secondaryItems: [],
    },
  ];

  // Team dropdown items
  const teamItems = [
    { href: 'https://cleverleylab.com/team/research-team/', label: 'Research Team' },
    { href: 'https://cleverleylab.com/team/supervision/', label: 'Supervision / Trainees' },
  ];

  // Resources dropdown items with associated secondary items
  const resourcesItems = [
    {
      href: 'https://cleverleylab.com/resources/publications/',
      label: 'Our Publication',
      secondaryItems: [],
    },
    {
      href: 'https://cleverleylab.com/resources/presentations/',
      label: 'Our Presentation',
      secondaryItems: [{ href: 'https://cleverleylab.com/resources/presentations/tbi/', label: 'TBI Workshop' }],
    },
    {
      href: 'https://cleverleylab.com/resources/toolbox/',
      label: 'Resource Toolbox',
      secondaryItems: [],
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Close Projects dropdown if clicked outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsDropdownOpen(false);
        setHoveredProjectItem(null);
      }

      // Close Team dropdown if clicked outside
      if (teamDropdownRef.current && !teamDropdownRef.current.contains(event.target as Node)) {
        setIsTeamDropdownOpen(false);
      }

      // Close Resources dropdown if clicked outside
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node)) {
        setIsResourcesDropdownOpen(false);
        setHoveredResourceItem(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside as EventListener);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as EventListener);
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
                <div className='absolute top-full left-0 z-50 bg-white shadow-lg border border-gray-200'>
                  <div className='relative w-72'>
                    {projectItems.map((item) => (
                      <div
                        key={item.label}
                        className='relative'
                        onMouseEnter={() => setHoveredProjectItem(item.label)}
                        onMouseLeave={() => (item.secondaryItems.length === 0 ? setHoveredProjectItem(null) : null)}
                      >
                        <Link
                          href={item.href}
                          className='block py-3 px-4 hover:bg-gray-50 text-gray-700 border-b border-gray-100 last:border-b-0'
                          onClick={() => {
                            setIsProjectsDropdownOpen(false);
                            setHoveredProjectItem(null);
                          }}
                        >
                          {item.label}
                          {item.secondaryItems.length > 0 && <ChevronRight className='w-4 h-4 absolute right-4 top-4' />}
                        </Link>

                        {/* Secondary items for projects */}
                        {hoveredProjectItem === item.label && item.secondaryItems.length > 0 && (
                          <div className='absolute top-0 left-full bg-gray-50 shadow-lg border border-gray-200 w-64' onMouseLeave={() => setHoveredProjectItem(null)}>
                            {item.secondaryItems.map((secondaryItem) => (
                              <Link
                                key={secondaryItem.label}
                                href={secondaryItem.href}
                                className='block py-3 px-4 hover:bg-gray-100 text-gray-700'
                                onClick={() => {
                                  setIsProjectsDropdownOpen(false);
                                  setHoveredProjectItem(null);
                                }}
                              >
                                {secondaryItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
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
                <div className='absolute top-full left-0 z-50 bg-white shadow-lg border border-gray-200'>
                  <div className='relative w-64'>
                    {resourcesItems.map((item) => (
                      <div
                        key={item.label}
                        className='relative'
                        onMouseEnter={() => setHoveredResourceItem(item.label)}
                        onMouseLeave={() => (item.secondaryItems.length === 0 ? setHoveredResourceItem(null) : null)}
                      >
                        <Link
                          href={item.href}
                          className='block py-3 px-4 hover:bg-gray-50 text-gray-700 border-b border-gray-100 last:border-b-0'
                          onClick={() => {
                            setIsResourcesDropdownOpen(false);
                            setHoveredResourceItem(null);
                          }}
                        >
                          {item.label}
                          {item.secondaryItems.length > 0 && <ChevronRight className='w-4 h-4 absolute right-4 top-4' />}
                        </Link>

                        {/* Secondary items for resources */}
                        {hoveredResourceItem === item.label && item.secondaryItems.length > 0 && (
                          <div className='absolute top-0 left-full bg-gray-50 shadow-lg border border-gray-200 w-64' onMouseLeave={() => setHoveredResourceItem(null)}>
                            {item.secondaryItems.map((secondaryItem) => (
                              <Link
                                key={secondaryItem.label}
                                href={secondaryItem.href}
                                className='block py-3 px-4 hover:bg-gray-100 text-gray-700'
                                onClick={() => {
                                  setIsResourcesDropdownOpen(false);
                                  setHoveredResourceItem(null);
                                }}
                              >
                                {secondaryItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
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
                  {projectItems.map((item) => (
                    <div key={item.label}>
                      <Link href={item.href} className='block py-2 px-12 hover:bg-gray-100 text-gray-700 text-sm' onClick={() => setIsMobileMenuOpen(false)}>
                        {item.label}
                      </Link>

                      {/* Secondary items nested under their primary item */}
                      {item.secondaryItems.length > 0 && (
                        <div className='ml-4'>
                          {item.secondaryItems.map((secondaryItem) => (
                            <Link
                              key={secondaryItem.label}
                              href={secondaryItem.href}
                              className='block py-2 px-12 hover:bg-gray-100 text-gray-700 text-sm'
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {secondaryItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
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
                  {resourcesItems.map((item) => (
                    <div key={item.label}>
                      <Link href={item.href} className='block py-2 px-12 hover:bg-gray-100 text-gray-700 text-sm' onClick={() => setIsMobileMenuOpen(false)}>
                        {item.label}
                      </Link>

                      {/* Secondary items nested under their primary item */}
                      {item.secondaryItems.length > 0 && (
                        <div className='ml-4'>
                          {item.secondaryItems.map((secondaryItem) => (
                            <Link
                              key={secondaryItem.label}
                              href={secondaryItem.href}
                              className='block py-2 px-12 hover:bg-gray-100 text-gray-700 text-sm'
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {secondaryItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
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
