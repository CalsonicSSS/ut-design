import HighlightText from '@/components/doc/elementSupportComponents/HighlightText';
import Quote from '@/components/doc/elementSupportComponents/Quote';
import { ResourcesContentLinks } from '@/components/doc/elementSupportComponents/ResourcesBulletContent';

export default function SubSection2_2() {
  return (
    <div className='doc-content-text'>
      <p className='mb-6'>
        A transition flow sheet or logbook should be created and regularly updated to track key steps in the youth&apos;s transition process, including confirming the timing of
        transfer, conducting a <HighlightText content='readiness assessment' clickToId='gt-ra' />, and identifying all interest holders involved. This logbook supports transition
        navigators (or the most responsible clinician) in tracking and monitoring the youth&apos;s ongoing <HighlightText content='transition process' clickToId='gt-tprocess' />{' '}
        .It also aids in clinical decision-making, e.g., determining next steps in a transition journey. Tracking also enables transition navigators to monitor youth retention
        within the program.
      </p>
      <p className='mb-8'>
        Data collected within the logbook can be used to: 1{')'} track a youth&apos;s progress through the transition plan, including when and who discussed each component with
        youth, and 2{')'} evaluate transition outcomes, at both the individual- (i.e., change in transition readiness) and program-level (i.e., total number of youth supported
        within the program annually).
      </p>
      <p className='mb-8'>
        Transition logbooks can be developed and managed on shared drives (i.e., OneDrive) and/or on electronic platforms (i.e., REDCap) so they can be easily accessed by
        transition navigators and/or the most responsible clinician.
      </p>
      <ResourcesContentLinks
        contents={[
          {
            title: 'For a database to track transition stages',
            linkObjs: [
              {
                linkText: 'NEAT Study Clinical Tracking Database',
                link: '',
                tooltip:
                  'The Clinical Tracking Excel Database was developed in collaboration with transition navigators working across mental health agencies in the Greater Toronto Area (GTA) to track transition interventions implemented and outcomes attained at each appointment with youth and/or others involved in the transition process. Along with clinical appointments, the database can also be used to add and track communication with youth and/or involved in their care.',
              },
            ],
          },
          {
            title: 'For an overview of the transition process',
            linkObjs: [
              {
                linkText: 'GotTransition, Sample Individual Transition Flow Sheet',
                link: 'https://gottransition.org/6ce/?leaving-flow-sheet',
                tooltip:
                  'This provides an overview of the transition process as the individual youth proceeds along their transition experience. It includes an opportunity for youth to track important steps during the transition as well as indicate the appropriate dates when these were completed.',
              },
            ],
          },
        ]}
      />
      <Quote
        author='Youth'
        quote='This holds youth and support staff responsible for the transition and also logs any errors or miss-steps that could happen during the transition. It could help you all figure out at what points the transition is smooth and when it is not.'
      />
      <Quote
        author='Clinician'
        quote='In my experience any one clinician transitions few youth in a one year time frame so not likely to remember all tasks necessary to maximize the potential for success. '
      />
    </div>
  );
}
