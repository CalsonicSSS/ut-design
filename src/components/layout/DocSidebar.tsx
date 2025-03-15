'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const sidebarSections = [
  { name: 'Getting Started', path: '/doc/getting-started' },
  { name: 'About this Resource', path: '/doc/about-this-resource' },
  { name: 'Main Contents', path: '/doc/main-contents' },
  { name: 'Resources Lists', path: '/doc/resources-lists' },
  {
    name: 'Appendices',
    path: '/doc/glossary',
    subItems: [
      { name: 'Glossary', path: '/doc/glossary' },
      { name: 'Citation', path: '/doc/citation' },
    ],
  },
];

interface DocSidebarProps {
  onNavClick?: () => void;
}

export default function DocSidebar({ onNavClick }: DocSidebarProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionPath: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionPath]: !prev[sectionPath],
    }));
  };

  const handleNavClick = () => {
    if (onNavClick) onNavClick();
  };

  return (
    <nav className='space-y-5'>
      <h2 className='font-bold text-lg mb-6 lg:hidden'>Documentation Menu</h2>

      {sidebarSections.map((section) => {
        const isMainActive = pathname === section.path || (section.subItems && section.subItems.some((subItem) => subItem.path === pathname));
        const hasSubItems = section.subItems && section.subItems.length > 0;
        const isExpanded = expandedSections[section.path] || isMainActive;

        return (
          <div key={section.path} className='w-full'>
            <div className='flex items-center'>
              <Link
                href={section.path}
                onClick={handleNavClick}
                className={`flex-grow block px-5 sm:py-1 lg:py-3 sm:doc-sidebar-item-sm lg:doc-sidebar-item border-l-[4px] lg:border-l-[6px] border-[#FD5045] ${
                  isMainActive ? 'bg-[#D837371A]' : 'hover:bg-gray-100'
                }`}
              >
                {section.name}
              </Link>

              {hasSubItems && (
                <button
                  onClick={() => toggleSection(section.path)}
                  className='p-2 ml-2 text-gray-600 hover:text-gray-900 focus:outline-none'
                  aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
                >
                  {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>
              )}
            </div>

            {/* Render sub-items if they exist and section is expanded */}
            {hasSubItems && isExpanded && (
              <div className='mt-2 space-y-2 pl-4'>
                {section.subItems.map((subItem) => {
                  const isSubActive = pathname === subItem.path;

                  return (
                    <Link
                      key={subItem.path}
                      href={subItem.path}
                      onClick={handleNavClick}
                      className={`block px-4 py-3 rounded-md doc-sidebar-sub-item ${isSubActive ? 'bg-[#D837371A]' : 'hover:bg-gray-100'}`}
                    >
                      {subItem.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
