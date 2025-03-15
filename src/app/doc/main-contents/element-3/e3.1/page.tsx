import Quote from '@/components/doc/elementSupportComponents/Quote';
import { ResourcesContentLinks } from '@/components/doc/elementSupportComponents/ResourcesBulletContent';

export default function SubSection3_1() {
  return (
    <div className='doc-content-text'>
      <p className='mb-6'>
        Transition readiness refers to the level of ability to self-manage illness (with tasks in domains such as managing prescriptions, making appointments, and communicating
        with care providers, etc.) and navigate to the adult mental health care system.
      </p>
      <p className='mb-8'>
        Transition readiness should be assessed early (i.e., at least six months prior to planned transitions in care) and regularly throughout the period leading to the transfer
        of care. This can help prioritize the learning areas where youth need support (i.e., self-management of prescriptions) before transitioning out of child and adolescent
        mental health services. Regular transition readiness re-assessment (i.e., every six months or every third appointment) can help evaluate progress and identify the
        youth&apos;s evolving transition and care goals.
      </p>
      <ResourcesContentLinks
        contents={[
          {
            linkObjs: [
              {
                linkText: 'The Transition Readiness Assessment Questionnaire (TRAQ 6.0)',
                link: 'https://www.etsu.edu/com/pediatrics/traq/',
                tooltip:
                  'The TRAQ is an assessment tool that clinicians can use to help assess youths’ readiness to navigate different aspects of the adult health care system and helps identify areas for focused interventions.',
              },
              {
                linkText: 'Validation of the Transition Readiness Assessment Questionnaire (TRAQ) 5.0 for use among youth in mental health services',
                link: 'https://onlinelibrary.wiley.com/doi/10.1111/cch.13035',
                tooltip:
                  'This paper describes a recent study which tested the TRAQ in a sample of youth with mental health care needs to ensure it is an appropriate tool to use for youth with mental health needs.',
              },
            ],
          },
        ]}
      />
      <Quote
        title='NOTES FROM A NAVIGATOR'
        quote="In that [readiness] assessment, I'm looking for information about [the youth]… is the parent supported...It could also be about school... We also assess for sexuality, for suicidality, to see if they have a crisis plan in place. Also talk about medication…From that assessment, I have a pretty good idea of this family's gonna need a weekly call…or the youth feels that they're confident enough to handle some of the transition pieces on their own. "
      />
    </div>
  );
}
