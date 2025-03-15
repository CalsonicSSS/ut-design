'use client';

import React, { useEffect } from 'react';
import GlossaryTermList from './GlossaryTermList';

export default function GlossaryContent() {
  useEffect(() => {
    // Check if we have a hash in the URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // Remove the # character
      const element = document.getElementById(id);

      if (element) {
        // Wait a bit for the page to fully render
        setTimeout(() => {
          // Get the element's position relative to the document
          const elementRect = element.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;

          // Calculate position to scroll to (center of viewport minus some offset)
          const middle = window.innerHeight / 2;
          const scrollPosition = absoluteElementTop - middle + elementRect.height / 2;

          // Scroll to the calculated position
          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
          });

          // Highlight the term briefly to draw attention
          element.classList.add('bg-yellow-100', 'transition-colors', 'duration-1000');
          setTimeout(() => {
            element.classList.remove('bg-yellow-100');
          }, 2000);
        }, 0);
      }
    }
  }, []);

  return (
    <section className='py-10 doc-content-text'>
      <h1 className='doc-content-title'>Glossary of Terms</h1>
      <h1 className='doc-content-sub-title mt-10 mb-8' id='gt-A'>
        A
      </h1>
      <GlossaryTermList
        termList={[
          {
            id: 'gt-amhs',
            title: 'Adult Mental Health Services:',
            text: 'Typically, these services are offered to people aged 18 and over, but some are youth-specific and serve young adults between the ages of 16 and 29. This can include substance use services.',
          },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8' id='gt-C'>
        C
      </h1>
      <GlossaryTermList
        termList={[
          {
            id: 'gt-cc',
            title: 'Case Conference:',
            text: 'A meeting between care providers within and between organizations to ensure coordination and integration of care.',
          },
          {
            id: 'gt-caamhs',
            title: 'Child and Adolescent Mental Health Services: ',
            text: 'Typically, these services are offered to youth up to the age of 18, depending on the service. This can include substance use services.',
          },
          {
            id: 'gt-cs',
            title: 'Clinical Summary:',
            text: 'A summation of pertinent patient information that can be used to convey the condition and journey of a patient. A clinical summary can include relevant diagnoses or problems, treatments, medication history and important contact information.',
          },
          {
            id: 'gt-cr',
            title: 'Clinical records:',
            text: 'Include any communication or records relating to the diagnosis, evaluation, or treatment of the young person during their care.',
          },
          {
            id: 'gt-cmhcs',
            title: 'Community mental health/community supports: ',
            text: "Includes local resources accessible to youth in your organization's community, such as phone lines, walk-in services, school-based services, counselling at community health centres, relevant social services, and other available support options.",
          },
          {
            id: 'gt-coc',
            title: 'Continuity of care: ',
            text: 'The process of ensuring ongoing, coordinated care management with the goal of achieving quality health care.',
          },
          {
            id: 'gt-cp',
            title: 'Crisis plan: ',
            text: 'A predetermined plan that outlines means of support for youth who may experience a mental health crisis.',
          },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8' id='gt-D'>
        D
      </h1>
      <GlossaryTermList
        termList={[
          {
            id: 'gt-dap',
            title: 'Developmentally appropriate protocol:',
            text: 'A protocol that is sensitive to the needs of youth and their particular life circumstances and goals.',
          },
          {
            id: 'gt-dac',
            title: 'Developmentally appropriate care: ',
            text: 'Care that is sensitive to the needs of youth and their particular life circumstances and life goals. ',
          },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8' id='gt-E'>
        E
      </h1>
      <GlossaryTermList
        termList={[
          {
            id: 'gt-ec',
            title: 'Eligibility criteria:',
            text: 'A list of requirements for program-entry that may include age, diagnosis, and area of residence.',
          },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8' id='gt-F'>
        F
      </h1>
      <GlossaryTermList
        termList={[
          {
            id: 'gt-fmc',
            title: 'Family members/caregivers: ',
            text: 'Includes anyone the youth identifies as someone they want involved in their care. This could include biological and chosen family members, caregivers and guardians, partners, siblings, and/or adult allies.',
          },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8' id='gt-I'>
        I
      </h1>
      <GlossaryTermList
        termList={[
          {
            id: 'gt-icp',
            title: 'Integrated care pathway: ',
            text: 'Structured, multipurpose care plans that outline the steps involved in the care of patients with a specific clinical problem.',
          },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8' id='gt-J'>
        J
      </h1>
      <GlossaryTermList
        termList={[
          {
            id: 'gt-jwm',
            title: 'Joint working meetings:',
            text: 'A meeting (in person or remote) where the youth (and their family members/caregivers, if appropriate), child and adolescent mental health clinician (or team), and receiving adult mental health clinician (or team) meet to discuss the youth’s current treatment plan and transfer of care. ',
          },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8' id='gt-M'>
        M
      </h1>
      <GlossaryTermList
        termList={[
          {
            id: 'gt-mrp',
            title: 'Most responsible person: ',
            text: 'The primary contact person who acts as the coordinator of the transition process and ensures continuity of care. This person may or may not be the same individual as the traditional “most responsible provider.”',
          },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8' id='gt-O'>
        O
      </h1>
      <GlossaryTermList
        termList={[
          {
            id: 'gt-otot',
            title: 'Optimal timing of transfer: ',
            text: 'The best possible time for the youth to transfer to adult services, based on the youth’s needs and access to other supports/services.',
          },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8' id='gt-P'>
        P
      </h1>
      <GlossaryTermList
        termList={[
          {
            id: 'gt-pc',
            title: 'Parallel Care: ',
            text: 'A period of time where a young person may be connected to both youth-oriented and adult-oriented mental health services.',
          },
          {
            id: 'gt-ps',
            title: 'Peer support: ',
            text: 'An emotional and practical relationship between the youth and a trained peer support worker with lived experience (Peer Support Canada, 2023).',
          },
          {
            id: 'gt-pcp',
            title: 'Primary care provider: ',
            text: 'The principal care provider providing health care services for ongoing health conditions and non-emergency health concerns.',
          },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8' id='gt-R'>
        R
      </h1>
      <GlossaryTermList
        termList={[
          {
            id: 'gt-ra',
            title: 'Readiness assessment:',
            text: 'If youth are prepared to begin the transition process into adult mental health services. ',
          },
          {
            id: 'gt-rl',
            title: 'Referral letter:',
            text: 'A letter provided by the youth’s health team that outlines basic client information, presenting problems, a brief personal and treatment history including diagnoses, and any additional next steps or follow-up items following referral.',
          },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8' id='gt-S'>
        S
      </h1>
      <GlossaryTermList
        termList={[
          {
            id: 'gt-sc',
            title: 'Self-care: ',
            text: 'Caring for one’s whole self, including managing the care required for one’s physical, emotional, mental, and/or spiritual needs.',
          },
          {
            id: 'gt-sm',
            title: 'Self-management: ',
            text: 'Comfort in actively recognizing and managing one’s mental health concerns, care, and well-being, including participating in making informed health care decisions.',
          },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8' id='gt-T'>
        T
      </h1>
      <GlossaryTermList
        termList={[
          {
            id: 'gt-tplan',
            title: 'Transition plan: ',
            text: 'A living document which outlines the goals of transition, individual care needs, and interventions throughout the transition process.',
          },
          {
            id: 'gt-tprocess',
            title: 'Transition process: ',
            text: 'A series of action steps that are followed to complete a care transition.',
          },
          {
            id: 'gt-tprotocol',
            title: 'Transition protocol: ',
            text: 'A document established by the hosting organization that outlines all the steps to follow when working with transitions.',
          },
          {
            id: 'gt-tn',
            title: 'Transition Navigator: ',
            text: 'Trained staff who offer support during care transition to ensure an optimal transition.',
          },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8' id='gt-W'>
        W
      </h1>
      <GlossaryTermList
        termList={[
          {
            id: 'gt-wh',
            title: 'Warm Handover: ',
            text: 'A conversation between a care provider and patient to identify and introduce transfer of care to another provider or organization.',
          },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8' id='gt-Y'>
        Y
      </h1>
      <GlossaryTermList
        termList={[
          {
            id: 'gt-ycp',
            title: 'Youth-centred protocol: ',
            text: 'A protocol that meets the needs of the youth involved.',
          },
        ]}
      />
    </section>
  );
}
