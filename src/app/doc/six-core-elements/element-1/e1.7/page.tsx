import HighlightText from '@/components/doc/elementSupportComponents/HighlightText';
import HighlightTextButton from '@/components/doc/elementSupportComponents/HighlightTextButton';
import { ResourcesContentLinks } from '@/components/doc/elementSupportComponents/ResourcesBulletContent';
import React from 'react';

export default function SubSection1_7() {
  return (
    <div className='doc-content-text'>
      <HighlightTextButton
        title='Transition protocol'
        clickToId='gt-tprotocol'
        tooltipDesc='A document established by the hosting organization that outlines all the steps to follow when working with transitions.'
      />
      <p className='mb-6 mt-8'>
        It is important to identify key indicators for evaluation early in the process of implementing your organization&apos;s transition protocol (see the “Evaluation” section of
        the transitions workbook for a discussion of different indicator types). This will allow for an understanding of how your transition protocol is impacting transitions in
        your organization. It will also ensure that you are collecting the necessary information to conduct your evaluation.
      </p>
      <p className='mb-6'>
        Your evaluation plan will depend on which transition-related outcomes have been identified as priorities for your organization. For example, if you choose to implement
        transition case conferences (or “warm handover” meetings) as part of your organization&apos;s transition protocol, your evaluation plan might include measuring the
        proportion of transitioning youth who receive a <HighlightText content='warm handover' clickToId='gt-wh' /> ,and/or assessing clinician-reported barriers and facilitators
        to conducting warm handovers.
      </p>
      <p className='mb-8'>
        When developing an evaluation plan, consider how you can collaborate with patients/youth and caregivers to identify priority outcomes and select evaluation methods that
        will best measure their impact. For example, your organization may leverage the expertise of a patient advisory council or create opportunities to conduct focus groups with
        caregivers.
      </p>

      <ResourcesContentLinks
        contents={[
          {
            title: 'For guidance to develop evaluation strategies',
            linkObjs: [
              {
                linkText: 'Health Quality Ontario Measurement Guide',
                link: 'https://www.hqontario.ca/Portals/0/documents/evidence/quality-standards/measurement-guide-en.pdf',
                tooltip:
                  'This measurement guide is designed to improve, monitor and evaluate the implementation of Ontario’s Health Quality Standards by healthcare professionals at a provincial and local level.',
              },
              {
                linkText: 'NEAT study protocol',
                link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8245465/',
                tooltip:
                  'This is an example of a research project with engagement from patients, caregivers, and clinicians to evaluate the effectiveness of a transition navigator program, which includes a description of measures that can be used to evaluate an organization’s transition program and protocol.',
              },
            ],
          },
          {
            title: 'For example of evaluation measures',
            linkObjs: [
              {
                linkText: 'Core Components of Effective Youth Transitions (CCEYT)',
                link: 'https://pubmed.ncbi.nlm.nih.gov/34089382/',
                tooltip:
                  'The CCEYT is a 27-item, self-report checklist of core components and of effective youth transitions identified through a literature review. These components were validated through a National Delphi Consensus study. Youth, parent/caregiver, and service provider versions are available.',
              },
              {
                linkText: 'Navigation Satisfaction Tool (NAVSAT)',
                link: 'https://pubmed.ncbi.nlm.nih.gov/29147951/',
                tooltip:
                  'This scale can be used in your setting to get youth or caregivers’ perspectives on their satisfaction with their transition experience or your transition program/protocol/pathway.',
              },
            ],
          },
        ]}
      />
    </div>
  );
}
