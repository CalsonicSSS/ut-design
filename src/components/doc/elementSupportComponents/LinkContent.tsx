import Link from 'next/link';
import React, { ReactElement } from 'react';

export default function LinkContent({ content, href, additionalStyle }: { content: string; href: string; additionalStyle?: string }): ReactElement {
  return (
    <Link className={`${additionalStyle}`} target='_blank' rel='noopener noreferrer' href={href}>
      {content}
    </Link>
  );
}
