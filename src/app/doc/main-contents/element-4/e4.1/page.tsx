import AuthorReference from '@/components/doc/elementSupportComponents/AuthorReference';
import HighlightText from '@/components/doc/elementSupportComponents/HighlightText';
import HighlightTextButton from '@/components/doc/elementSupportComponents/HighlightTextButton';
import Quote from '@/components/doc/elementSupportComponents/Quote';
import { ResourcesContentLinks } from '@/components/doc/elementSupportComponents/ResourcesBulletContent';
import React from 'react';

export default function SubSection4_1() {
  return (
    <div className='doc-content-text'>
      <div className='flex'>
        <HighlightTextButton
          title='Most responsible person'
          tooltipDesc='The primary contact person who acts as the coordinator of the transition process and ensures continuity of care. This person may or may not be the same individual as the traditional “most responsible provider.”'
          clickToId='gt-mrp'
        />
        <HighlightTextButton
          clickToId='gt-coc'
          title='Continuity of care'
          tooltipDesc='The process of ensuring ongoing, coordinated care management with the goal of achieving quality health care.'
        />
      </div>

      <p className='mt-8 mb-6'>
        A designated “most responsible person” should serve as the primary contact person throughout the transition. They are responsible for ensuring{' '}
        <HighlightText content='continuity of care' clickToId='gt-coc' />, and acting as the coordinator of the care transition. This person may or may not be the same individual
        as the traditional “most responsible provider,” who is the physician or other registered health provider responsible for overseeing the treatment and care of the patient or
        client. This person may be the youth&apos;s <HighlightText content='child and adolescent mental health services' clickToId='gt-caamhs' /> clinician or the
        organization&apos;s <HighlightText content='transition navigator' clickToId='gt-tn' />.
      </p>
      <p className='mb-8'>
        A transition navigator is a registered health professional who has expertise in transition coordination and case management, and who provides short term support (often 1-6
        months) during the transition period <AuthorReference refName='(Cleverley et al., 2018)' href='https://pmc.ncbi.nlm.nih.gov/articles/PMC6254258/' />. They work with youth
        (and family/caregivers, if appropriate) and members of the clinical team to identify needs post-discharge and goals for transfer of care. They have a strong understanding
        of community programs and resources and are able to work with youth to identify and connect with appropriate services. They continue to provide support to the youth post
        discharge and throughout the referral and transition to adult services or other appropriate services. They may also provide psychoeducation and some short-term therapeutic
        support while the youth is between services.
      </p>
      <ResourcesContentLinks
        contents={[
          {
            title: 'For more information about the transition navigator role, and examples of its implementation:',
            linkObjs: [
              {
                linkText:
                  'Facilitating Effective Transitions from Hospital to Community for Children and Adolescent Mental Health Services: Overview of the Transition Support Worker Role and Function',
                link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6254258/',
                tooltip:
                  'This academic paper introduces the transition support worker role to aid youth in navigating the transition process. The paper explores the role and qualifications of the navigator.',
              },
              {
                linkText: 'The Sunnybrook Family Navigation  Project',
                link: 'https://sunnybrook.ca/content/?page=family-navigation-project-what-we-do',
                tooltip:
                  'This program helps youth experiencing mental health concerns access resources and service providers to help them meet their needs. Youth and families are partnered with a clinically trained Family Navigator that can help them identify specific needs, options to treatment and support as well as create an individualized plan of care.',
              },
              {
                linkText: 'Michael Garron Transitional Youth Program',
                link: 'https://www.tehn.ca/programs-services/mental-health-addiction/transitional-youth-program',
                tooltip:
                  'The program supports young people aged 16-29 who experience barriers in accessing or maintaining mental health care. It also assists those requiring continued support after receiving services at Michael Garron Hospital (MGH). Clients receive short-term therapeutic support and system navigation assistance from a transition navigator for up to three months to help them establish connections with appropriate mental health and substance use services.',
              },
            ],
          },
        ]}
      />
      <Quote
        title='NOTES FROM A NAVIGATOR'
        quote='I think the transition role is so crucial to the work that we do here. And collectively, as a multidisciplinary team, it is very essential to making sure that youth are connected after, after they leave '
      />
    </div>
  );
}
