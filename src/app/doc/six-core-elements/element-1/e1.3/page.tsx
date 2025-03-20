import AuthorReference from '@/components/doc/elementSupportComponents/AuthorReference';
import HighlightText from '@/components/doc/elementSupportComponents/HighlightText';
import HighlightTextButton from '@/components/doc/elementSupportComponents/HighlightTextButton';
import { ResourcesContentLinks } from '@/components/doc/elementSupportComponents/ResourcesBulletContent';
import React from 'react';

export default function SubSection1_3() {
  return (
    <div className='doc-content-text'>
      <div className='flex mb-8'>
        <HighlightTextButton clickToId='gt-ycp' title='Youth-centred protocol' tooltipDesc='A protocol that meets the needs of the youth involved.' />
        <HighlightTextButton
          clickToId='gt-dap'
          title='Developmentally appropriate protocol'
          tooltipDesc='A protocol that is sensitive to the needs of youth and their particular life circumstances and goals.'
        />
      </div>
      <p className='mb-6'>
        A <HighlightText content='transition protocol' clickToId='gt-tprotocol' /> is individualized to the needs of specific programs, intervention, or patients. It is a written
        plan that specifies procedures to be followed in defined situations. It provides detailed descriptions of how everyone involved will work together to support transitions in
        care.
      </p>
      <p className='mb-6'>
        A youth-centered and developmentally appropriate protocol ensures that mental health care transitions effectively address the unique needs of youth. A developmentally
        appropriate approach prioritizes developmental stage rather than chronological age, recognizing the dynamic nature of adolescence and young adulthood. It ensures that care
        services are defined by the developmental processes shaping these populations{' '}
        <AuthorReference refName='(Farre et al., 2015)' href='https://adc.bmj.com/content/100/2/144' />.
      </p>
      <p className='mb-8'>
        Protocols developed in collaboration with partners across care systems can better address barriers to <HighlightText content='continuity of care' clickToId='gt-coc' /> by
        explicitly outlining the expectations and roles of each person involved. Protocols can be revised and adapted over time to reflect everyone’s changing needs, resources, and
        roles.
      </p>
      <ResourcesContentLinks
        contents={[
          {
            title: 'Agreement protocols between child and adult agencies',
            linkObjs: [
              {
                linkText: 'KFL&A, Youth Transitioning Protocol',
                link: 'https://www.improvingsystems.ca/projects/youth-transition-protocol-in-kfla',
                tooltip:
                  'This transition protocol was developed in 2015 in Southern Ontario as part of a transitions development initiative sponsored by the Centre for Addiction and Mental Health. This protocol outlines agreements between child and adult agencies to facilitate transition planning and success between these settings.',
              },
            ],
          },
          {
            title: 'Resource to support positive mental health servies',
            linkObjs: [
              {
                linkText: 'Youth Mental Health Transition Protocol Agreement between Ministry for Children and Family Development and Ministry of Health and Health Authorities',
                link: 'https://www2.gov.bc.ca/assets/gov/health/managing-your-health/mental-health-substance-use/child-teen-mental-health/y2a_protocol.pdf',
                tooltip:
                  'This agreement between the BC Ministry for Children and Family Development and the Ministry of Health, through the Health Authorities, is intended to support positive mental health service experiences and improve mental health outcomes of youth and their families during care transitions by promoting coordinated, continuous, and responsive service planning and support.',
              },
            ],
          },
        ]}
      />
    </div>
  );
}
