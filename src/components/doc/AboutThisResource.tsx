import React from 'react';
import Link from 'next/link';
import DotList from './elementSupportComponents/DotList';

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
          This resource is not meant to be prescriptive. Transition policies and practices vary based on a number of factors. This Guidebook is meant to be used as a starting place
          to guide further discussion and development of transition policies and interventions that are fitting for your community.
        </p>
        <p className='text-base'>
          Further support for the implementation of these core components can be found in the <span className='font-bold'>Unite Implementation Workbook.</span> These two resources
          are intended to be used together.
        </p>
      </section>

      <section id='using-this-resource' data-section className='pt-6 md:pt-10'>
        <h1 className='doc-content-sub-title lg:text-[23px] sm:text-[20px] mb-4'>Using this Resource</h1>
        <p className='mb-4 text-base'>
          {
            "Core components are divided into six categories, or 'elements', intended to support thinking of the transition process from beginning to end. Each core component includes a brief description of the component as well as other resources to support your understanding where relevant."
          }
        </p>
        <p className='mb-3 text-base'>This might include:</p>
        <DotList
          contentList={['Definitions of keywords', 'Linked citations', 'References to sections of the Implementation Workbook', 'Quotes or notes from expert knowledge users']}
          ms={[0, 0, 0, 0]}
        />
        <p className='mt-4 mb-3 text-base'>
          In many of the components, we describe and link to external resources. These resources provide further learning opportunities and implementation support in alignment with
          that core component. Resources can include:
        </p>
        <DotList contentList={['Example Programs', 'Interactive Trainings', 'Academic Publications', 'Example Guidelines or Policies', 'Measurement Tools']} ms={[0, 0, 0, 0, 0]} />
      </section>

      <section id='development-of-this-resource' data-section className='pt-6 md:pt-10'>
        <h1 className='doc-content-sub-title lg:text-[23px] sm:text-[20px] mb-4'>Development of this Resource</h1>
        <p className='mb-4 md:mb-6 text-base'>This resource has been developed through extensive community collaborations, research partnerships, and literature review. </p>
        <p className='mb-4 md:mb-6 text-base'>
          Definitions in the Core Component Guidebook, unless otherwise cited, were developed in consultation with an Expert Advisory Committee that included researchers,
          clinicians, youth, and family members and caregivers from across Canada.
        </p>
        <p className='mb-4 md:mb-6 text-base'>
          {"Quotes and 'Notes from a Navigator' in this guidebook are sourced from research studies conducted by our research team, including a"}
          <span className='underline'>pan-Canadian Delphi study that developed core components</span> and{' '}
          <span className='underline'>the Navigator Evaluation Advancing Transitions (NEAT) Study</span>.
        </p>
        <p className='font-bold mb-3 text-base'>{"All 'Notes from a Navigator' quotes are attributed to a manuscript in preparation and should not be copied/reproduced:"}</p>
        <DotList
          contentList={[
            'Cleverley K et al. (2025) Understanding the scope and impact of the youth mental health transition navigator role: perspectives of navigators and clinicians. [manuscript in preparation].',
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
              <Link
                className='text-navy-0 underline inline break-words'
                target='_blank'
                rel='noopener noreferrer'
                href={'https://link.springer.com/article/10.1007/s00787-021-01806-6'}
              >
                https://doi.org/10.1007/s00787-021-01806-6
              </Link>
            </div>,
          ]}
          ms={[0, 0, 12]}
        />
      </section>
    </section>
  );
}
