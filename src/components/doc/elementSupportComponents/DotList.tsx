import React, { ReactNode } from 'react';
import Dot from './Dot';

export default function DotList({ contentList, ms }: { contentList: (string | ReactNode)[]; ms: number[] }) {
  return (
    <ul className='ps-3'>
      {contentList.map((content, index) => (
        <li key={`dot-list-item-${index}`} className={`flex items-start my-1 ms-${ms[index]}`}>
          <Dot dotKey={`dot-${index}`} /> {content}
        </li>
      ))}
    </ul>
  );
}
