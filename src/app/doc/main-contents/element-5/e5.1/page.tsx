import HighlightText from '@/components/doc/elementSupportComponents/HighlightText';
import HighlightTextButton from '@/components/doc/elementSupportComponents/HighlightTextButton';
import Quote from '@/components/doc/elementSupportComponents/Quote';
import { ResourcesContentLinks } from '@/components/doc/elementSupportComponents/ResourcesBulletContent';
import React from 'react';

export default function SubSection5_1() {
  return (
    <div className='doc-content-text'>
      <div className='flex'>
        <HighlightTextButton
          clickToId='gt-cc'
          title='Case Conference'
          tooltipDesc='A meeting between care providers within and between organizations to ensure coordination and integration of care.'
        />
        <HighlightTextButton
          clickToId='gt-wh'
          title='Warm Handover'
          tooltipDesc='A conversation between a care provider and patient to identify and introduce transfer of care to another provider or organization.'
        />
      </div>

      <p className='mb-6 mt-8'>
        The purpose of the meeting should be to develop a shared understanding of the young person&apos;s care up to this point, and their continuing care needs. The meeting can be
        used to identify the roles of everyone involved in the handover of care, based on the previously established care plan. The handover meetings may include everyone
        previously identified as being part of the care transition (i.e., the youth, <HighlightText content='child and adolescent mental health services' clickToId='gt-caamhs' />{' '}
        and <HighlightText content='adult mental health services' clickToId='gt-amhs' /> clinician(s), <HighlightText content='transition navigators' clickToId='gt-tn' />, and{' '}
        <HighlightText content='family members/caregivers' clickToId='gt-fmc' /> if appropriate) It is often organized and led by the{' '}
        <HighlightText content='most responsible provider' clickToId='gt-mrp' /> at that point in time. It is important to ensure youth understand the purpose and goals of the
        meeting,and that they can choose how they would like to be involved. For more information about who should be involved in this meeting, reference the discussion in
        component 4.1 and 4.2.
      </p>
      <p className='mb-8'>“Parallel Care” and “Joint Working Meetings” may also be relevant for this component. Please see Component 4.6 for definitions.</p>
      <ResourcesContentLinks
        contents={[
          {
            title: 'To learn how to ensure an effective warm handover',
            linkObjs: [
              {
                linkText: 'Alberta Health Services, Warm Handoffs',
                link: 'https://www.albertahealthservices.ca/assets/info/amh/if-amh-ecc-warm-handoffs.pdf',
                tooltip: 'This resource provides a guideline of warm handovers and how to ensure there is an effective handover between transitions.',
              },
            ],
          },
        ]}
      />
      <Quote
        author='Youth'
        quote='For me, it was probably getting all of my care team together, and speaking to me instead of just kind of talking amongst themselves, or actually it was the opposite - what was really helpful was getting all of them into a single room and discussing things in front of me.'
      />
    </div>
  );
}
