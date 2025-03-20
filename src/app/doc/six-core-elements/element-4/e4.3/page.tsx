import AuthorReference from '@/components/doc/elementSupportComponents/AuthorReference';
import HighlightTextButton from '@/components/doc/elementSupportComponents/HighlightTextButton';
import Quote from '@/components/doc/elementSupportComponents/Quote';
import { ResourcesContentLinks } from '@/components/doc/elementSupportComponents/ResourcesBulletContent';
import React from 'react';

export default function SubSection4_3() {
  return (
    <div className='doc-content-text'>
      <HighlightTextButton
        clickToId='gt-ec'
        title='Eligibility criteria'
        tooltipDesc='A list of requirements for program-entry that may include age, diagnosis, and area of residence.'
      />
      <p className='mt-8 mb-6'>
        Work with the young person to identify appropriate adult services based on program alignment with clinical needs and their treatment goals. Engaging young people in the
        transition process can help ensure that their needs and preferences are considered, and can increase levels of trust between providers and youth{' '}
        <AuthorReference refName="(O'Hara et al., 2020)" href='https://acamh.onlinelibrary.wiley.com/doi/10.1111/camh.12377' />.
      </p>
      <p className='mb-6'>
        <span className='font-bold'>Transition navigator partners have shared some key elements to identifying adult services: </span>
        <br />
        1. Assessing the young person&apos;s acuity, i.e., severity of current mental health symptomology
        <br />
        2. Outlining any cost-related issues or financial barriers to accessing care, services, or treatment
        <br />
        3. Identifying services that offer easy access, timeliness, and responsiveness (i.e., wait time considerations)
      </p>
      <p className='mb-8'>
        It is important to confirm the youth&apos;s eligibility with the agency before completing the transition process. Having a pre-existing relationship with the agency can
        help expedite contact and confirm eligibility.
      </p>
      <ResourcesContentLinks
        contents={[
          {
            linkObjs: [
              {
                linkText: 'Niagara Region Adult and Youth Mental Health Services',
                link: 'https://www.niagararegion.ca/health/professionals/mental/mental-health-service.aspx#:~:text=Eligibility%20criteria&text=Experience%20ongoing%20illness%20that%20impacts,in%20their%20home%20or%20community',
                tooltip:
                  'The Niagara Region Adult and Youth Mental Health Services outlines specific eligibility criteria for the various programs run by the organization. Eligibility criteria for services help guide youth into selecting the most appropriate program to suit their needs.',
              },
            ],
          },
        ]}
      />

      <Quote
        title='NOTES FROM A NAVIGATOR'
        quote={
          <span>
            Honestly I think it depends on… [the youth&apos;s service] catchment area. It&apos;s based on their postal code, and a lot of places may have better services, but they
            don&apos;t accept someone with that postal code area, so you have to look at what&apos;s available within their region. <br /> <br /> And then just appropriateness [of
            potential services]. What&apos;s their identity? What would they benefit from... what kind of counsellor is going to be the most beneficial for them, and finding those
            appropriate resources for them is important.
            <br /> <br /> And then looking at wait times, this might be appropriate, but it&apos;s a one-and-a-half year wait, so what&apos;s something in the meantime that we can
            get you connected to, that is maybe a shorter wait, and then in the future you get connected to this resource.
          </span>
        }
      />
    </div>
  );
}
