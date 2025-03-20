import AuthorReference from '@/components/doc/elementSupportComponents/AuthorReference';
import HighlightText from '@/components/doc/elementSupportComponents/HighlightText';
import HighlightTextButton from '@/components/doc/elementSupportComponents/HighlightTextButton';
import Quote from '@/components/doc/elementSupportComponents/Quote';
import { ResourcesContentLinks } from '@/components/doc/elementSupportComponents/ResourcesBulletContent';
import React from 'react';

export default function SubSection4_8() {
  return (
    <div className='doc-content-text'>
      <div className='hidden lg:block'>
        <div className='flex gap-4 items-center mb-6'>
          <HighlightTextButton
            clickToId='gt-dac'
            title='Developmentally appropriate care'
            tooltipDesc='Care that is sensitive to the needs of youth and their particular life circumstances and goals.'
          />
          <HighlightTextButton
            clickToId='gt-sm'
            title='Self-management'
            tooltipDesc='Comfort in actively recognizing and managing one’s mental health concerns, care, and well-being, including participating in making informed health care decisions'
          />
          <HighlightTextButton
            clickToId='gt-sc'
            title='Self-care'
            tooltipDesc='Caring for one’s whole self, including managing the care required for one’s physical, emotional, mental, and/or spiritual needs.'
          />
        </div>
        <div>
          <HighlightTextButton
            clickToId='gt-cmhcs'
            title='Community mental health/community supports'
            tooltipDesc="Includes local resources accessible to youth in your organization's community, such as phone lines, walk-in services, school-based services, counselling at community health centres, relevant social services, and other available support options."
          />
        </div>
      </div>

      <div className='lg:hidden'>
        <div className='flex gap-4 items-center mb-6'>
          <HighlightTextButton
            clickToId='gt-dac'
            title='Developmentally appropriate care'
            tooltipDesc='Care that is sensitive to the needs of youth and their particular life circumstances and goals.'
          />
          <HighlightTextButton
            clickToId='gt-sm'
            title='Self-management'
            tooltipDesc='Comfort in actively recognizing and managing one’s mental health concerns, care, and well-being, including participating in making informed health care decisions'
          />
        </div>
        <div className='flex gap-4 items-center'>
          <HighlightTextButton
            clickToId='gt-cmhcs'
            title='Community mental health/community supports'
            tooltipDesc="Includes local resources accessible to youth in your organization's community, such as phone lines, walk-in services, school-based services, counselling at community health centres, relevant social services, and other available support options."
          />
          <HighlightTextButton
            clickToId='gt-sc'
            title='Self-care'
            tooltipDesc='Caring for one’s whole self, including managing the care required for one’s physical, emotional, mental, and/or spiritual needs.'
          />
        </div>
      </div>

      <p className='mt-8 mb-6'>
        Ensure the young person (and <HighlightText content='family members/caregivers' clickToId='gt-fmc' />, where appropriate) is aware of community mental health services
        available to them, the purposes they serve, and how they can be accessed (e.g., walk-in services, phone lines). This should be included in the individualized transition
        plan (see core component 4.5). Note that the appropriate mental health and community supports will depend upon the unique needs of the individual youth as well as the
        specific resources available in their geographic area.
      </p>
      <p className='mb-8'>
        Due to the complex and varying biopsychosocial issues, shifting symptom patterns and presentations, and comorbid diagnoses seen in youth populations, transition pathways
        may look different from person to person{' '}
        <AuthorReference refName='(McGorry et al., 2014)' href='https://www.thelancet.com/journals/lanpsy/article/PIIS2215-0366(14)00082-0/abstract' />. Not every young person will
        need to transition to adult-oriented mental health services nor require a high intensity transition intervention. For example, alternative transition pathways could include
        access to youth-oriented integrated primary mental health care, establishing “soft entry” by minimizing stigma and other barriers to accessing services, and organizing
        digital support where possible <AuthorReference refName='(McGorry et al., 2022)' href='https://onlinelibrary.wiley.com/doi/10.1002/wps.20938' />
        .Providing youth with access to developmentally appropriate community and health services will ensure they have resources available if they do not transition to adult
        mental health services, withdraw from adult mental health services, or desire only episodic contact with adult mental health services.
      </p>
      <ResourcesContentLinks
        contents={[
          {
            title:
              'Integrated Youth Service networks across Canada aim to offer centralized access to equitable, youth and family centered, in-person and virtual, mental and physical health care and support for transition-aged youth and their families. They can typically be accessed on a walk-in or call-in basis and may be able to provide interim support to youth who are between services',
            linkObjs: [
              {
                linkText: '1.Youth Wellness Hubs Ontario ',
                link: 'https://youthhubs.ca/',
              },
              {
                linkText: '2.Foundry (British Columbia)',
                link: 'https://foundrybc.ca/',
              },
              {
                linkText: '3.Kickstand (Alberta)',
                link: 'https://mykickstand.ca/',
              },
              {
                linkText: '4.Aire Ouverte (Quebec)',
                link: 'https://www.quebec.ca/sante/trouver-une-ressource/aire-ouverte',
              },
              {
                linkText: '5.Access Open Minds (partnership with Esakoni First Nation, Nova Scotia)',
                link: 'https://accessopenminds.ca/our_site/eskasoni-first-nation-ns-2/',
              },
            ],
          },
        ]}
      />
      <Quote
        title='NOTES FROM A NAVIGATOR'
        quote="..An individual came in short-term, and really just had challenges surrounding mental health, where psychiatrists feel like a general physician would be able to just provide on-going, that medical piece… then with that we might make recommendations that they access their GP…Really it just depends on the diagnosis and the needs that we're looking at, what would be the community mental health that would be best suited for them "
      />
      <Quote
        author='Youth'
        quote='Giving youth the right information and resources would really help them really understand what is available if they do decide against continuing their treatment. They may change their mind and want to transition later on and then they will have the info they need to do so.'
      />
    </div>
  );
}
