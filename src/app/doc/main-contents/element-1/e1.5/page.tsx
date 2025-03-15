import AuthorReference from '@/components/doc/elementSupportComponents/AuthorReference';
import DotList from '@/components/doc/elementSupportComponents/DotList';
import HighlightText from '@/components/doc/elementSupportComponents/HighlightText';
import Quote from '@/components/doc/elementSupportComponents/Quote';
import { ResourcesContentLinks } from '@/components/doc/elementSupportComponents/ResourcesBulletContent';
import React from 'react';

export default function SubSection1_5() {
  return (
    <div className='doc-content-text'>
      <p className='mb-8'>
        Role clarity is an essential component of positive interprofessional collaboration (
        <AuthorReference refName='IPEC, 2016' href='https://ipec.memberclicks.net/assets/2016-Update.pdf' />
        {'; '}
        <AuthorReference refName='McLaneyet al., 2022' href='https://journals.sagepub.com/doi/10.1177/08404704211063584' />) A clear organizational framework that defines ownership
        of different aspects of the transition can help teams effectively plan and manage transition care. At an organizational level, it is important to determine who is
        responsible for supporting transitions. This includes identifying those responsible for developing a transitions policy, building capacity and training team members, and
        creating <HighlightText content='integrated care pathways' clickToId='gt-icp' /> for your organization&apos;s transitions. You might consider what “typical” involvement
        should look like for:
      </p>
      <DotList
        contentList={[
          'Youth making the transition between services',
          <p key={1}>
            <HighlightText content='Child and Adolescent Mental Health Services' clickToId='gt-caamhs' /> staff
          </p>,
          <p key={2}>
            Community or <HighlightText content='Adult Mental Health Services' clickToId='gt-amhs' /> <span className='font-bold text-navy-0'></span> staff
          </p>,
          <p key={3}>
            <HighlightText content='Peer support workers' clickToId='gt-ps' /> (if applicable)
          </p>,
          <p key={4}>
            <HighlightText content='Transition Navigators' clickToId='gt-tn' /> (if applicable)
          </p>,
          <p key={5}>
            <HighlightText content='Family members/Caregivers' clickToId='gt-fmc' />, (if applicable)
          </p>,
        ]}
        ms={[0, 0, 0, 0, 0]}
      />
      <p className='mt-8'>When defining roles and responsibilities, considerations should include:</p>
      <DotList
        contentList={[
          'Who is responsible for transitions at a management or leadership level within the organization? Who is responsible for transitions within the circle of care?',
          'How will youth (and family/caregivers if appropriate) be involved in the determining who makes up their transition support team?',
          'How will the responsibilities of the care team be adapted, where possible, to reflect the unique needs of each individual youth?',
          'How will this process can be incorporated into daily clinical practice? For example, how can clinical rounds be utilized to provide ongoing touchpoints, ensuring continued role clarity?',
        ]}
        ms={[0, 0, 0, 0]}
      />
      <p className='my-8'>The above considerations may be written into the organizational policy discussed in component 1.2</p>

      <ResourcesContentLinks
        contents={[
          {
            title: 'Rating tool to assess caregivers  involvement and improve interactions with healthcare providers',
            linkObjs: [
              {
                linkText: 'The Family Caregiver Activation in Transitions Tool (FCAT)',
                link: 'https://media.uhfnyc.org/filer_public/95/55/9555ccca-ea5c-4f7b-a524-5356ca0b0924/6_eric_coleman__family_caregiver_activation_in_transitions_fcat_tool.pdf',
                tooltip:
                  'This rating tool helps assess family/caregivers involvement in care decisions and fosters better interactions with healthcare providers. The tool can be administered by the healthcare provider or self-administered by the family at any point during the care transition.',
              },
            ],
          },
          {
            title: 'Roles and tasks for transition ',
            linkObjs: [
              {
                linkText: 'Alberta Health Services, Enhancing Concurrent Capability Toolkit Transitions in Care Quick Reference Sheet',
                link: 'https://www.albertahealthservices.ca/assets/info/amh/if-amh-ecc-what-are-the-roles-in-transitions-of-care.pdf',
                tooltip:
                  'This one-page resource overviews the roles of those involved in a transition of care, including detailed task lists for the sending and receiving providers',
              },
            ],
          },
          {
            title: 'Resource for transition support worker',
            linkObjs: [
              {
                linkText:
                  'Facilitating Effective Transitions from Hospital to Community for Children and Adolescent Mental Health Services: Overview of the Transition Support Worker Role and Function',
                link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6254258/',
                tooltip:
                  'This academic paper introduces the transition support worker role to aid youth in navigating the transition process. The paper explores the role and qualifications of the navigator.',
              },
            ],
          },
        ]}
      />

      <Quote
        author='Clinician'
        quote="Speaking from experience, a roadmap and game book as a parent would have been incredibly valuable... I needed to adjust and adapt as my daughter progressed through the recovery lifecycle of her condition. I also needed to learn new skills in order to effectively communicate, respond to 'crisis' situations and problem solve. It would have been valuable to learn this right from the start"
      />
    </div>
  );
}
