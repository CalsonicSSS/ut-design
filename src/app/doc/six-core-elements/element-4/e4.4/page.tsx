import HighlightTextButton from '@/components/doc/elementSupportComponents/HighlightTextButton';
import React from 'react';

export default function SubSection4_4() {
  return (
    <div className='doc-content-text'>
      <HighlightTextButton
        clickToId='gt-otot'
        title='Optimal timing of transfer'
        tooltipDesc='The best possible time for the youth to transfer to adult services, based on the youth’s needs and access to other supports/services.'
      />
      <p className='mt-8 mb-6'>
        It is important to connect with youth well in advance to identify and prepare for a transfer in care. Optimal timing means the individual&apos;s clinical needs are taken
        into account, especially if they are transitioning to a specialized service (e.g., early intervention in psychosis service), or if they are transitioning earlier or later
        than age 18. Discussion with the youth (and family members/caregivers, if appropriate) to educate them on the reason for the timing of the transfer is critical to ensure
        they understand the clinical and/or service rationale. Work with the young person to identify the resources or skills they need to be ready for the agreed upon transition
        time.
      </p>
    </div>
  );
}
