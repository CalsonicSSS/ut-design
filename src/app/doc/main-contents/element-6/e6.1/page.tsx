import HighlightText from '@/components/doc/elementSupportComponents/HighlightText';
import HighlightTextButton from '@/components/doc/elementSupportComponents/HighlightTextButton';
import Quote from '@/components/doc/elementSupportComponents/Quote';
import React from 'react';

export default function SubSection6_1() {
  return (
    <div className='doc-content-text'>
      <HighlightTextButton
        clickToId='gt-mrp'
        title='Most responsible person'
        tooltipDesc='The primary contact person who acts as the coordinator of the transition process and ensures continuity of care. This person may or may not be the same individual as the traditional “most responsible provider.”'
      />
      <p className='mt-8 mb-6'>
        Long-term follow-up with youth and family members/caregivers to ensure a smooth and successful transfer to adult services has occurred is an important part of the care{' '}
        <HighlightText content='transition process' clickToId='gt-tprocess' />. This can also be an important evaluation metric for your program or institution, and can elucidate
        processes that might require change. It is important to implement accessible, youth-friendly follow-up methods that young people are more likely to engage with (e.g.,
        texting).
      </p>
      <Quote
        author='Youth'
        quote='I definitely liked having the option of text, email or call, and I feel like many people would benefit from that, as many people could be in the same situation as me, where they just prefer text or email because they get very busy or some may even have social anxiety, like talking over the phone to book appointments or anything like that '
      />
    </div>
  );
}
