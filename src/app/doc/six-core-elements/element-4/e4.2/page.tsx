import HighlightText from '@/components/doc/elementSupportComponents/HighlightText';
import Quote from '@/components/doc/elementSupportComponents/Quote';
import Link from 'next/link';
import React from 'react';

export default function SubSection4_2() {
  return (
    <div className='doc-content-text'>
      <p className='mb-6'>
        Work with youth (and their family/caregiver, if appropriate) to identify the clinicians and other individuals they consider part of their transition care team and support
        network. This may include specific <HighlightText content='transition navigators' clickToId='gt-tn' />,{' '}
        <HighlightText content='primary care providers' clickToId='gt-pcp' />, school-based services, peer support workers, etc. The identification of transition team members will
        also be informed by your organization&apos;s framework or policy for responsibilities related to transition within care teams (see{' '}
        <Link href={'doc/main-contents/element-1/e1.5'} className=' underline text-navy-0'>
          Component 1.5
        </Link>{' '}
        ).
      </p>
      <p className='mb-6'>
        When defining roles, consider when each team member will be engaged during the transition process and the capacity in which they will be involved. This is also an
        opportunity to identify current gaps in care that that need to be addressed before the transition
      </p>
      <p className='mb-8'>
        The specific roles and responsibilities of each team member should be captured and regularly updated in the <HighlightText content='transition plan' clickToId='gt-tplan' />
        . For more information, refer to the transition plan document resources in{' '}
        <Link href={'doc/main-contents/element-1/e3.3'} className='underline text-navy-0'>
          Component 3.3
        </Link>{' '}
      </p>
      <Quote
        title='NOTES FROM A NAVIGATOR'
        quote='[This] would be collaborative process, and the transition plan would be created with the young person, with their families and with the Multi-Disciplinary team, so we all know what to expect upon discharge.'
      />
    </div>
  );
}
