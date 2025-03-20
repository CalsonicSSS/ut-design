import { ResourcesContentLinks } from '@/components/doc/elementSupportComponents/ResourcesBulletContent';
import React from 'react';

export default function SubSection1_6() {
  return (
    <div className='doc-content-text'>
      <p className='mb-6'>
        Patient or <span className='font-bold'>youth engagement</span> means working with young people as important partners in their own care. By partnering with youth and their
        families, care providers can better understand the experiences, needs, and priorities of the individual, allowing for more patient-centred and tailored care. During a
        transition in care, this may involve working with youth to identify the resources and transition pathways most important to them, and supporting them in developing
        self-advocacy skills.
      </p>
      <p className='mb-8'>
        Youth and family engagement is also important at the organizational or program level. Organizations can partner with youth and families to better understand their
        experiences around the transition process. This can help to ensure that transition pathways and policies are more transparent, credible, and responsive.
      </p>
      <ResourcesContentLinks
        contents={[
          {
            title: 'To learn more about youth engagement best practices',
            linkObjs: [
              {
                linkText: 'Knowledge Institute, Youth Engagement Standards',
                link: 'https://www.cymha.ca/Modules/ResourceHub/?id=64172b4d-af0d-432a-8d66-880ba2292486',
                tooltip:
                  'The Youth Engagement Standards are best practice standards to support quality mental health services for children and youth. These nine standards provide guidelines to implementing, evaluating and improving the delivery of services with a focus on empowering youth as partners in mental health care.',
              },
            ],
          },
          {
            title: 'For tools to support the integration and evaluation of youth and family voice',
            linkObjs: [
              {
                linkText: 'The Public and Patient Engagement Evaluation Tool (PPEET) Participant Questionnaire',
                link: 'https://ppe.mcmaster.ca/resources/public-and-patient-engagement-evaluation-tool/',
                tooltip:
                  'This open-access self-report measure is used to obtain participant perspectives and allows researchers to obtain feedback and reflect on their experiences in patient engagement initiatives (e.g., consultations, focus groups). It consists of Likert scale questions and open-ended questions evaluating the processes, outcomes, and impact of engagement activities from the perspectives of participants.',
              },
              {
                linkText: 'The Core Components of Effective Youth Transitions (CCEYT)',
                link: 'https://pubmed.ncbi.nlm.nih.gov/34089382/',
                tooltip:
                  'The CCEYT is a 27-item, self-report checklist of core components and of effective youth transitions identified through a literature review. These components were validated through a National Delphi Consensus study. Youth, parent/caregiver, and service provider versions are available.',
              },
            ],
          },
        ]}
      />
    </div>
  );
}
