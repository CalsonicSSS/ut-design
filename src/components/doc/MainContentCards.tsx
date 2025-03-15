import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

// Define the element data type
type ElementData = {
  id: number;
  title: string;
  description: string;
  link: string;
};

// All the element data
const elements: ElementData[] = [
  {
    id: 1,
    title: 'Element 1',
    description: 'Organizational Transition Policy',
    link: '/doc/main-contents/element-1',
  },
  {
    id: 2,
    title: 'Element 2',
    description: 'Transition Tracking and Monitoring',
    link: '/doc/main-contents/element-2',
  },
  {
    id: 3,
    title: 'Element 3',
    description: 'Transition Readiness',
    link: '/doc/main-contents/element-3',
  },
  {
    id: 4,
    title: 'Element 4',
    description: 'Transition Planning',
    link: '/doc/main-contents/element-4',
  },
  {
    id: 5,
    title: 'Element 5',
    description: 'Transfer of Care',
    link: '/doc/main-contents/element-5',
  },
  {
    id: 6,
    title: 'Element 6',
    description: 'Transfer Completion',
    link: '/doc/main-contents/element-6',
  },
];

const MainContentsCard = () => {
  return (
    <div className='w-full py-10'>
      <h2 className='text-2xl md:text-[32px] font-bold mb-6 md:mb-[35px] font-urbanist'>Main Contents</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
        {elements.map((element) => (
          <Card key={element.id} className='shadow-md hover:shadow-lg transition-shadow font-lato'>
            <div className='h-2 bg-blue-500 rounded-t-lg'></div>
            <CardContent className='pt-5 pb-6 md:pt-6 md:pb-8 min-h-0 md:min-h-[140px]'>
              <h3 className='text-base md:text-lg font-semibold text-gray-900 mb-1'>{element.title}</h3>
              <p className='text-sm md:text-[16px] text-gray-600 mb-6 md:mb-10'>{element.description}</p>
              <Link href={element.link} className='inline-flex items-center text-sm md:text-[16px] text-blue-500 hover:text-blue-700'>
                Explore Element {element.id}
                <ArrowRight className='ml-1 h-4 w-4' />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MainContentsCard;
