import AuthorReference from '@/components/doc/elementSupportComponents/AuthorReference';
import HighlightText from '@/components/doc/elementSupportComponents/HighlightText';
import { ResourcesContentLinks } from '@/components/doc/elementSupportComponents/ResourcesBulletContent';
import React from 'react';

export default function SubSection1_4() {
  return (
    <div className='doc-content-text'>
      <p className='mb-6'>
        Whole-team approaches are more successful in ensuring ongoing adaptation and support for new policies in health care. Providing proactive, accessible, and integrated
        education about youth mental health care transitions can create important opportunities for professional and organizational development{' '}
        <AuthorReference refName='(Nilsen et al., 2020)' href='https://bmchealthservres.biomedcentral.com/articles/10.1186/s12913-020-4999-8' />. Creating a plan to support staff
        learning and engagement with transition resources ensures a shared understanding of the organization&apos;s approach to care transitions and each staff member&apos;s role
        in the process <AuthorReference refName='(Nilsen et al., 2020)' href='https://bmchealthservres.biomedcentral.com/articles/10.1186/s12913-020-4999-8' />. A lack of training
        and education for care providers has been identified as a major barrier to successful youth-to-adult care transitions{' '}
        <AuthorReference
          refName='(McDonagh, 2006)'
          href='https://www.swswchd.co.uk/image/Clinical%20information/Transition/DoH%202006%20-%20Growing%20up%20Ready%20for%20Emerging%20Adulthood.pdf'
        />
        .
      </p>
      <p className='mb-8'>
        Skills development and training opportunities for youth mental health transitions should be tailored to the specific needs of your organization and staff. In organizations
        where staff play an active role in the identifying and referring transitional aged youth, training on assessment of transition needs and understanding organizational
        transition pathways may be required. When staff are less involved in the <HighlightText content='transition process' clickToId='gt-tprocess' />, a regularly updated and
        centrally available list of transition resources may be beneficial. Regardless of the specific learning approach, all staff should regularly review the relevant
        organizational policies.
      </p>

      <ResourcesContentLinks
        contents={[
          {
            title: 'Evidence based guidelines for interprofessional teams for effective transitions',
            linkObjs: [
              {
                linkText: 'Registered Nurses Association of Ontario (RNAO), Transitions in Care and Services Clinical Best Practice Guideline',
                link: 'https://rnao.ca/bpg/guidelines/transitions-in-care',
                tooltip:
                  'This resource provides evidence-based guidelines for nurses, and all members of interprofessional teams across the care continuum, in all domains of practice. It is intended to support safe, smooth and effective care transitions for children, youth and adults, and those who support them.',
              },
            ],
          },
          {
            title: 'Educational tools to foster skills for effective transitions',
            linkObjs: [
              {
                linkText: 'Florida Health and Transition Services',
                link: 'https://www.floridahats.org',
              },
              {
                linkText: 'New York State Institute for Health Transition Training, Transition Skills Resources',
                link: 'https://healthytransitionsny.org/skills/',
                tooltip:
                  'These websites contain educational tools including videos, modules, checklists, lesson plans and guidebooks for youth, caregivers, service coordinators and care providers to help foster skills necessary to facilitate effective youth-to-adult healthcare transitions.',
              },
            ],
          },
          {
            title: 'Resources to support professionals with preparing youth to complete an effective transition',
            linkObjs: [
              {
                linkText: 'Florida Keys Area Health Education Center Inc., Health Care Transition Training Program',
                link: 'https://pediatrics.med.jax.ufl.edu/jaxhats/docs/floridahats_hct4hcp_brochure1.pdf',
              },
              {
                linkText: 'Florida Health and Transition Services, Florida Youth 2 Adult Transition (FLY2AT) Course',
                link: 'https://www.floridahats.org/fly2at-course-for-professionals/',
                tooltip:
                  'These online training programs provide physicians, social workers, mental health professionals and nurses with information and strategies to help youth prepare for and complete the transition from child to adult healthcare systems. They are both comprised of multiple online modules.',
              },
            ],
          },
        ]}
      />
    </div>
  );
}
