import React from 'react';

type TermContent = {
  href?: string; // Add relevant properties for your `LinkContent` object
  title: string;
  text: string;
  id: string;
};

export default function GlossaryTermList({ termList }: { termList: TermContent[] }) {
  return (
    <>
      {termList.map((term: TermContent, index: number) => (
        <div key={index} className={`${index + 1 !== termList.length && 'mb-4'}`}>
          <p className={`text-navy-0 block font-medium`} id={term.id} data-section>
            {term.title}
          </p>
          <p>{term.text}</p>
        </div>
      ))}
    </>
  );
}
