import AuthorReference from '@/components/doc/elementSupportComponents/AuthorReference';
import HighlightText from '@/components/doc/elementSupportComponents/HighlightText';
import HighlightTextButton from '@/components/doc/elementSupportComponents/HighlightTextButton';
import Quote from '@/components/doc/elementSupportComponents/Quote';
import { ResourcesContentLinks } from '@/components/doc/elementSupportComponents/ResourcesBulletContent';
import React from 'react';

export default function SubSection4_7() {
  return (
    <div className='doc-content-text'>
      <HighlightTextButton
        clickToId='gt-pcp'
        title='Primary care provider'
        tooltipDesc='The principal care provider providing health care services for ongoing health conditions and non-emergency health concerns.'
      />
      <p className='mt-8 mb-6'>
        Youth facing mental health challenges are often treated within a primary care setting. Active engagement of a{' '}
        <HighlightText content='primary care provider' clickToId='gt-pcp' /> is closely linked to improved health outcomes as youth transition in{' '}
        <HighlightText content='adult mental health services' clickToId='gt-amhs' />{' '}
        <AuthorReference refName='(Toulany et al., 2022)' href='https://academic.oup.com/pch/article/27/5/297/6673170' />. This continued involvement in care contributes to
        positive long-term health outcomes for youth{' '}
        <AuthorReference refName='(Toulany et al., 2019)' href='https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2740785' />. Continuity of care refers to ongoing,
        coordinated care management with a goal of achieving quality health care{' '}
        <AuthorReference refName='(CPSO, 2021)' href='https://www.cpso.on.ca/getmedia/6e4cf71b-eb41-40cb-96f5-99426a9da3d8/coc-guide-patients-caregivers.pdf' />. This may involve
        the early inclusion of all care providers in care management to facilitate better communication and handover, as well as identifying any missing information that is
        important to care.
      </p>
      <ResourcesContentLinks
        contents={[
          {
            linkObjs: [
              {
                linkText: 'Association of Primary Care Continuity With Outcomes Following Transition to Adult Care for Adolescents With Severe Mental Illness',
                link: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2740785',
                tooltip:
                  'This academic article explores the role of primary care continuity during the transition from pediatric to adult care services in supporting better outcomes for youth with severe mental illness.',
              },
              {
                linkText: 'CAMH Mental Health and Primary Care Policy Framework',
                link: 'https://www.camh.ca/-/media/files/pdfs---public-policy-submissions/primarycarepolicyframework_march2016-pdf.pdf',
                tooltip:
                  'This document explores the gap in mental health services within a primary care setting and highlights important principles that can improve the integration of mental health care into primary care',
              },
            ],
          },
        ]}
      />
      <Quote
        author='Clinician'
        quote='I recommend engaging pharmacists in the process when it comes to up-to-date medication information. Ensuring a process is in place for continuous up to date medication reconciliation for outpatients will go a long way towards making this process relatively painless.'
      />
    </div>
  );
}
