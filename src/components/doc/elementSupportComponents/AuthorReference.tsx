import React, { ReactNode } from 'react';
import Link from 'next/link';

export default function AuthorReference({ refName, href }: { refName: string; href?: string }): ReactNode {
  return (
    <>
      {href ? (
        <Link href={href} target='_blank' rel='noopener noreferrer' className='text-navy-0 hover:cursor-pointer'>
          {refName}
        </Link>
      ) : (
        <span className='text-navy-0'>{refName}</span>
      )}
    </>
  );
}
