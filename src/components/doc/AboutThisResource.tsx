import React from 'react';
import DotList from './elementSupportComponents/DotList';
import LinkContent from './elementSupportComponents/LinkContent';

export default function AboutThisResourceContent() {
  return (
    <section className='py-10 doc-content-text '>
      <h1 className='doc-content-title sm:text-[26px] lg:text-[32px]'>About this Resource</h1>
      <section id='purpose-of-this-resource' data-section className='pt-6 md:pt-10'>
        <h1 className='doc-content-sub-title lg:text-[23px] sm:text-[20px] mb-4'>Purpose of this Resource</h1>
        <p className='mb-4 md:mb-6 text-base'>
          The purpose of the Unite Core Components Guidebook is to support the uptake and implementation of the core components of successful mental health transitions in youth
          mental health care settings.
        </p>
        <p className='mb-4 md:mb-6 text-base'>
          This resource is not meant to be prescriptive. Transition policies and practices vary based on a number of factors. This guidebook is meant to be used as a starting place
          for further discussion and development of transition policies and interventions that fit within your community.
        </p>
        <p className='text-base'>
          Further support for the implementation of these core components can be found in <span className='font-bold'>the Unite Implementation Workbook.</span> These two resources
          are intended to be used together.
        </p>
      </section>

      <section id='using-this-resource' data-section className='pt-6 md:pt-10'>
        <h1 className='doc-content-sub-title lg:text-[23px] sm:text-[20px] mb-4'>Using this Resource</h1>
        <p className='text-base'>
          {
            'The core components are grouped into six categories, or “elements,” that guide the transition process from beginning to end. Each core component subsection includes a brief overview and resources to support your understanding, including:'
          }
        </p>
        <DotList
          contentList={['Definitions of keywords', 'Linked citations', 'References to sections of the Implementation Workbook', 'Quotes or notes from expert knowledge users']}
          ms={[0, 0, 0, 0]}
        />
        <p className='mb-3 text-base'>
          Throughout this guidebook, we describe and link to external resources. These resources provide further learning opportunities and implementation support in alignment with
          the corresponding core component. Resources include:
        </p>
        <DotList contentList={['Example Programs', 'Interactive Trainings', 'Academic Publications', 'Example Guidelines or Policies', 'Measurement Tools']} ms={[0, 0, 0, 0, 0]} />
        <p className='mb-3 text-base'>All resources and links were last reviewed in February 2025. We aim to review links annually and update them where needed.</p>
      </section>

      <section id='development-of-this-resource' data-section className='pt-6 md:pt-10'>
        <h1 className='doc-content-sub-title lg:text-[23px] sm:text-[20px] mb-4'>Development of this Resource</h1>
        <p className='mb-4 md:mb-6 text-base'>This resource has been developed through extensive community collaborations, research partnerships, and a literature review. </p>
        <p className='mb-4 md:mb-6 text-base'>
          Unless otherwise cited, definitions in this guidebook were developed in consultation with an Expert Advisory Committee that included researchers, clinicians, youth,
          family members, and caregivers from across Canada.
        </p>
        <p className='mb-4 md:mb-6 text-base'>
          {'Quotations and “Notes from a Navigator” were sourced from research studies conducted by our research team, including a '}
          <LinkContent
            content='pan-Canadian Delphi study that developed core components'
            href='https://link.springer.com/article/10.1007/s00787-021-01806-6'
            additionalStyle='underline'
          />
          <span> and </span>
          <LinkContent content='the Navigator Evaluation Advancing Transitions (NEAT) Study.' href='https://doi.org/10.1136/bmjopen-2021-051190' additionalStyle='underline' />
        </p>
        <p className='font-bold mb-3 text-base'>{"All 'Notes from a Navigator' quotes are attributed to a manuscript in preparation and should not be copied/reproduced:"}</p>
        <DotList
          contentList={[
            'Cleverley K et al. (2023) Understanding the scope and impact of the youth mental health transition navigator role: perspectives of navigators and clinicians. [manuscript in preparation].',
          ]}
          ms={[0]}
        />
        <p className='mb-4 md:mb-6 text-base'>This manuscript will be open access and linked through our website upon publication.</p>
        <p className='font-bold mb-3 text-base'>Remaining quotes from clinicians, administrators, youth, and caregivers are attributed to the following study:</p>
        <DotList
          contentList={[
            <div key={'div-dot-new'} className='pr-4 md:pr-20'>
              <span>
                Cleverley K, McCann E, O&quot;Brien D, Davies J, Bennett K, Brennenstuhl S, Courey L, Henderson J, Jeffs L, Miller J, Pignatiello T, Rong J, Rowland E, Stevens K, &
                Szatmari P. (2021). Prioritizing core components of successful transitions from child to adult mental health care:{' '}
              </span>
              A national Delphi survey with youth, caregivers, and health professionals. European Child & Adolescent Psychiatry.{' '}
              <LinkContent
                content={'https://doi.org/10.1007/s00787-021-01806-6'}
                href={'https://link.springer.com/article/10.1007/s00787-021-01806-6'}
                additionalStyle='text-navy-0 underline'
              />
            </div>,
          ]}
          ms={[0, 0, 12]}
        />
      </section>
    </section>
  );
}
