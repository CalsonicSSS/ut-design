import HighlightText from '@/components/doc/elementSupportComponents/HighlightText';
import HighlightTextButton from '@/components/doc/elementSupportComponents/HighlightTextButton';
import Quote from '@/components/doc/elementSupportComponents/Quote';
import { ResourcesContentLinks } from '@/components/doc/elementSupportComponents/ResourcesBulletContent';
import React from 'react';

export default function SubSection3_2() {
  return (
    <div className='doc-content-text'>
      <HighlightTextButton
        title='Transition plan'
        tooltipDesc='A living document which outlines the goals of transition, individual care needs, and interventions throughout the transition process.'
        clickToId='gt-tplan'
      />
      <p className='mt-8 mb-6'>
        The transition plan is a living document that outlines the plan of care throughout the <HighlightText content='transition process' clickToId='gt-tprocess' />. It should be
        co-created with youth and their identified care team. This document should outline goals for transition and planned interventions, which will be guided by ongoing{' '}
        <HighlightText content='transition readiness assessment' clickToId='gt-R' /> and youth&apos;s priorities for transition care.
      </p>
      <p className='mb-8'>
        This plan should be updated regularly throughout the pre-transition and transition period and should include documented progress of identified tasks. The care team member
        responsible for each transition task should be clearly identified. The plan should be shared with the current care team and sent to the receiving clinical team along with
        all other relevant care documentation at the time of transfer.
      </p>
      <ResourcesContentLinks
        contents={[
          {
            title: 'To learn more about transition template:',
            linkObjs: [
              {
                linkText: 'Got Transition, Transition Care Plan Template',
                link: 'https://www.gottransition.org/6ce/?leaving-plan-care',
                tooltip:
                  'This sample Transition Care Plan template is intended to be used jointly with youth and their parent/caregiver, if appropriate, to set goals and outline a plan of action that combines health and personal goals.',
              },
            ],
          },
          {
            title: 'To learn more about service transition plan:',
            linkObjs: [
              {
                linkText: 'Mindyourmind, Service Transition Plan',
                link: 'https://mindyourmind.ca/games-tools/personal-growth/service-transition-plan/',
                tooltip:
                  'This transition tool is specific to mental health transitions and includes checklists of tasks at different stages in the transition process which can be incorporated into a transition plan and used to identify key tasks, milestones, and responsible persons.',
              },
            ],
          },
        ]}
      />
      <Quote
        title='NOTES FROM A NAVIGATOR'
        quote="As they become adults, and they have to navigate on their own, I do believe that that's where our role really makes a big difference in terms of meeting the youth where they are at, and talking to them and finding out what their needs are…And working collaboratively with them on creating a transition plan and then with the transition plan, we then work strategically to check everything off the list."
      />
    </div>
  );
}
