'use client';

import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

export default function HighlightText({ content, clickToId }: { content: string; clickToId?: string }): ReactNode {
  const router = useRouter();

  const handleNavigateToGlossary = () => {
    if (clickToId) {
      // Navigate to glossary page with the specific term ID as hash
      router.push(`/doc/glossary#${clickToId}`);
    }
  };

  return (
    <span className={`text-navy-0 font-bold ${clickToId ? 'hover:cursor-pointer hover:underline' : ''}`} onClick={clickToId ? handleNavigateToGlossary : undefined}>
      {content}
    </span>
  );
}
