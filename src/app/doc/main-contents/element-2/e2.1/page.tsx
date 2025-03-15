import HighlightText from '@/components/doc/elementSupportComponents/HighlightText';
import HighlightTextButton from '@/components/doc/elementSupportComponents/HighlightTextButton';
import Quote from '@/components/doc/elementSupportComponents/Quote';
import { ResourcesContentLinks } from '@/components/doc/elementSupportComponents/ResourcesBulletContent';
import Link from 'next/link';
import React from 'react';

export default function SubSection2_1() {
  return (
    <div className='doc-content-text'>
      <div className='flex'>
        <HighlightTextButton
          title='Integrated care pathway'
          clickToId='gt-icp'
          tooltipDesc='Integrated care pathways are structured; multipurpose care plans which outline the steps involved in the care of patients with a specific clinical problem.'
        />
        <HighlightTextButton
          title='Transition process'
          clickToId='gt-tprocess'
          tooltipDesc='The transition process is a series of action steps that are followed to complete the care transition.'
        />
      </div>

      <p className='mt-8 mb-6'>
        When preparing youth to transition out of <HighlightText content='child and adolescent mental health services' clickToId='gt-caamhs' /> , there are several factors that
        need to be considered. For many organizations, this transition is age-dependent. For example, some organizations require young adults to transition to adult mental health
        services when they turn 18. Other organizations may specify additional criteria for transitions, such as completing a set number of sessions before transitioning and/or
        receiving a specific psychiatric diagnosis (e.g., psychosis).
      </p>
      <p className='mb-8'>
        Where possible, the transition identification process should begin at least six months prior to the planned transition. A transition plan should be established during the
        initiation of the transition process (see{' '}
        <Link href='/doc/main-contents/element-3/e3.3' className='underline text-navy-0'>
          Component 3.3
        </Link>{' '}
        for information on developing a transition plan). When applicable, the transition navigator, <HighlightText content='primary care provider' clickToId='gt-pcp' />,{' '}
        <HighlightText content='family/caregiver' clickToId='gt-fmc' />, youth, and all other significant care providers should be included.
      </p>
      <ResourcesContentLinks
        contents={[
          {
            title: 'To learn more about holistic transitions and avoiding unforseen circumstances',
            linkObjs: [
              {
                linkText: 'Complex Care for Kids Ontario Youth Transition to Adult Care Toolkit- Caregiver and Youth Checklist & Transition Resource Guide',
                link: 'https://www.pcmch.on.ca/wp-content/uploads/2022/05/CCKO-Youth-Transition-Caregiver_Youth-Checklist_-Final_Feb222022-Fillable.pdf',
                tooltip:
                  'This resource includes an age-based checklist for youth to help provide a holistic approach in the transition process. This may be a helpful tool for caregivers in terms of avoiding unforeseen circumstances in transition.',
              },
            ],
          },
          {
            title: 'To learn more about integrated care pathways:',
            linkObjs: [
              {
                linkText:
                  'The Ministries of Community & Social Services and Children and Youth Services, Provincial Transition Planning Framework for Young People With Developmental Disabilities',
                link: 'https://coordinatedaccess.ca/wp-content/uploads/2015/07/Transition-Planning-Framework-Final-English.pdf',
                tooltip:
                  'This transitional planning tool developed in Ontario is specific for youth with developmental disabilities which breaks down policy directions for successful transition to adult services. On page 14, the document discusses identifying the young person who is transitioning as part of the protocol design elements.',
              },
            ],
          },
        ]}
      />

      <Quote
        title='NOTES FROM A NAVIGATOR'
        quote="My role as a navigator is to connect with families and individuals, patients, who are aging out of [site A], so who are in that transition period…I connect with the family, connect with the youth, to support them in terms of making sure that they're prepared, or they have the tools that they need to have a successful transition when they leave. "
      />
    </div>
  );
}
