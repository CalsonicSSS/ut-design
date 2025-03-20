import HighlightText from '@/components/doc/elementSupportComponents/HighlightText';
import Quote from '@/components/doc/elementSupportComponents/Quote';
import React from 'react';

export default function SubSection4_5() {
  return (
    <div className='doc-content-text'>
      <p>
        An individualized transition plan outlines the specific transition goals, support needs and actions required to help youth transition into adult mental health services. It
        acts as a reference for navigators and clinicians to support youth through the transition process and ensure their needs are met (see Component 3.3). Developing an
        individualized transition plan requires strong collaboration with youth and they should be made aware of the transition plan as they undergo changes in the care they
        receive. As youth progress through the transition process, it is important to update the transition plan.
      </p>
      <p className='font-bold'>The transition plan might include:</p>
      <p className='mb-6'>
        1. Transition goals and prioritized actions
        <br />
        2. <HighlightText content='Readiness assessment' clickToId='gt-ra' />: A process of determining if youth are prepared to begin the transition process into adult mental
        health services.
        <br />
        3. <HighlightText content='Clinical Summary' clickToId='gt-cs' />: A summation of pertinent patient information that can be used to convey the condition and journey of a
        patient, including relevant diagnoses or problems, treatments, medication history and important contact information.
        <br />
        4. <HighlightText content='Crisis plan' clickToId='gt-cp' />: A predetermined plan that outlines means of support for youth who may experience a mental health crisis.
      </p>
      <p className='mb-8'>
        Given the challenges that may arise during the transition process, it is important to include a crisis plan as a part of the transition plan. A crisis plan represents a
        predetermined set of steps that can be taken to support an individual through a mental health crisis. It outlines helpful, specific information, including warning signs,
        coping strategies, emergency contacts, and supports, as well as interventions to help the individual feel safe. Should youth find themselves in between transitions without
        access to resources, a crisis plan can be helpful to determine where they can access services.
      </p>
      <Quote
        author='Youth'
        quote="But I actually found that [the navigation program] was really helpful in making sure that I felt comfortable in being able to speak to other care - regarding my other teams…And then when it came to discussing my treatments elsewhere regarding my mental health, it was helpful to have them kinda give me the understanding of how care looks like when you're no longer a child, because the care you receive in peds is very different from the care you're going to receive throughout [adulthood]. "
      />
    </div>
  );
}
