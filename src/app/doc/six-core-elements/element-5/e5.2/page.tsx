import HighlightTextButton from '@/components/doc/elementSupportComponents/HighlightTextButton';
import Quote from '@/components/doc/elementSupportComponents/Quote';
import { ResourcesContentLinks } from '@/components/doc/elementSupportComponents/ResourcesBulletContent';
import React from 'react';

export default function SubSection5_2() {
  return (
    <div className='doc-content-text'>
      <div className='flex'>
        <HighlightTextButton
          clickToId='gt-rl'
          title='Referral Letter'
          tooltipDesc='A letter provided by the youth’s health team that outlines basic client information, presenting problems, a brief personal and treatment history including diagnoses, and any additional next steps or follow-up items following referral.'
        />
        <HighlightTextButton
          clickToId='gt-tplan'
          title='Transition plan'
          tooltipDesc='A living document which outlines the goals of transition, individual care needs, and interventions throughout the transition process.'
        />
        <HighlightTextButton
          clickToId='gt-cr'
          title='Clinical records'
          tooltipDesc='Include any communication or records relating to the diagnosis, evaluation, or treatment of the young person during their care.'
        />
      </div>

      <p className='mt-8 mb-6'>
        The transfer package should include general information about the young person and their treatment history, as well as any documentation specific to the receiving agency. A
        complete transfer package should support seamless transitions in care and limit the amount of follow up required post transition. A complete transfer package can also
        reduce the burden on the youth to continuously share their story with new care providers.
      </p>
      <p className='mb-6'>
        Where possible, youth should also maintain a copy of their transfer package. This is particularly relevant when a young person only requires episodic care, or if they are
        likely to see a different provider in the future.
      </p>

      <ResourcesContentLinks
        contents={[
          {
            title: 'Policy and procedures for transfer of care',
            linkObjs: [
              {
                linkText: 'Nova Scotia Health, Information Transfer at Care Transitions Policy',
                link: 'https://policy.nshealth.ca/Site_Published/NSHA/document_render.aspx?documentRender.IdType=6&documentRender.GenericField=&documentRender.Id=98152',
                tooltip:
                  'This policy outlines policy and procedures for information transfer at care transitions. Appendix B specifically outlines a checklist for essential information that should be included during transfer.',
              },
            ],
          },
          {
            title: 'For a guideline on care transitions and communicating the information',
            linkObjs: [
              {
                linkText: 'Women’s College Hospital, INFORMATION TRANSFER AT CARE TRANSITIONS',
                link: 'https://www.womenscollegehospital.ca/accreditation-q-tip-information-transfer-at-care-transitions/',
                tooltip: 'This resource offers a Quick Tip guideline on important information for care transitions as well as how to effectively communicate this information.',
              },
            ],
          },
          {
            title: 'Information to be included in the transition',
            linkObjs: [
              {
                linkText: 'RNAO My Transitional Care Plan©',
                link: 'https://rnao.ca/bpg/guidelines/transitions-in-care',
                tooltip:
                  'As part of Transitions in Care and Services Resource, the Registered Nurses Association of Ontario provides an example transition plan with essential information that should be included during transitions.',
              },
            ],
          },
        ]}
      />
      <Quote
        author='Youth'
        quote="And then on the back [of a transfer document] there's just some general kind of mental health information, if they've ever had depression or anxiety or if they've ever had a suicide attempt or if they're on medications... But I would say the most important information is kind of reasons for referral, who's referring and then contact information and what the client is consenting to in terms of that contact. "
      />
    </div>
  );
}
