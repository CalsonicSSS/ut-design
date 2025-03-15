import HighlightText from '@/components/doc/elementSupportComponents/HighlightText';
import HighlightTextButton from '@/components/doc/elementSupportComponents/HighlightTextButton';
import React from 'react';

export default function SubSection1_1() {
  return (
    <div className='doc-content-text'>
      <div className='flex mb-8'>
        <HighlightTextButton
          clickToId={'gt-icp'}
          title='Integrated care pathway'
          tooltipDesc='Integrated care pathways are structured; multipurpose care plans which outline the steps involved in the care of patients with a specific clinical problem.'
        />
        <HighlightTextButton clickToId={'gt-tprocess'} title='Transition process' tooltipDesc='A series of action steps that are followed to complete a care transition.' />
      </div>
      <p className='mb-6'>
        Integrated care pathways play an important role in ensuring <HighlightText content='continuity of care' clickToId='gt-coc' /> for youth navigating a transition within the
        mental health care system. These pathways enhance transparency and foster a shared understanding of important steps and concepts for everyone involved in the care
        transition.
      </p>
      <p className='mb-6'>
        For organizations, outlining the steps in transitioning between services and/or programs can help service providers and administrators better understand how youth
        experience transitions and identify areas where further support is needed to ensure continuity of care.
      </p>
      <p className='mb-8'>
        For youth, providing clarity around the expected steps or process ensures patients have the right information to support their decision-making and engagement in their own
        care.
      </p>
    </div>
  );
}
