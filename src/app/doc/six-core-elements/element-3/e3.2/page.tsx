import AuthorReference from '@/components/doc/elementSupportComponents/AuthorReference';
import HighlightText from '@/components/doc/elementSupportComponents/HighlightText';
import { ResourcesContentLinks } from '@/components/doc/elementSupportComponents/ResourcesBulletContent';

export default function SubSection3_2() {
  return (
    <div className='doc-content-text'>
      <p className='mt-8 mb-6'>
        Youth transitioning from child to adult mental health services are navigating a critical life stage, marked by developmental milestones and new life experiences{' '}
        <AuthorReference refName='(Borah et al., 2021)' href='https://www.tandfonline.com/doi/full/10.1080/15332985.2021.1894629' />. These simultaneous changes may further
        complicate health care transitions.
      </p>
      <p className='mb-6'>
        Youth identified several factors that make transitions difficult, including: uncertainty about the definition of transition and the appropriate age for transfer, a lack of
        transition readiness, limited involvement in the <HighlightText content='transition process' clickToId='gt-tprocess' />, confusion about roles and responsibilities in the
        transition process, and concerns over transition gaps leading to poor mental health outcomes{' '}
        <AuthorReference refName='(Cleverley et al., 2020)' href='https://bmcpsychiatry.biomedcentral.com/articles/10.1186/s12888-020-02516-0' />.
      </p>
      <p className='mb-8'>
        One of the most significant changes these youth face is the stark contrast between the{' '}
        <HighlightText content='child and adolescent mental health services' clickToId='gt-caamhs' /> system and{' '}
        <HighlightText content='adult mental health services' clickToId='gt-amhs' />. Youth have identified decreased support in adult mental health services compared to child and
        adolescent services, and a lack of information sharing between systems. Child and adolescent mental health services are seen as nurturing and family-oriented, whereas adult
        mental health services treat youth as autonomous adults with limited family involvement{' '}
        <AuthorReference refName='(Borah et al., 2021)' href='https://www.tandfonline.com/doi/full/10.1080/15332985.2021.1894629' />. TThis difference between the two systems can
        result in a sudden shift in the type and level of care, increasing the risk of care disengagement{' '}
        <AuthorReference refName='(Borah et al., 2021)' href='https://www.tandfonline.com/doi/full/10.1080/15332985.2021.1894629' />. Youth have reported feeling underprepared for
        the transition process, particularly due to a lack of information about their available options{' '}
        <AuthorReference refName='(Cleverley et al., 2020)' href='https://bmcpsychiatry.biomedcentral.com/articles/10.1186/s12888-020-02516-0' />. As a result, they have emphasized
        the importance of being active partners in the planning process and ensuring that information about the transition is clearly communicated{' '}
        <AuthorReference refName='(Cleverley et al., 2020)' href='https://bmcpsychiatry.biomedcentral.com/articles/10.1186/s12888-020-02516-0' />.
      </p>
      <ResourcesContentLinks
        contents={[
          {
            title: 'For more information on adult mental health systems',
            linkObjs: [
              {
                linkText: 'CMHA, Transitioning from Youth to Adult Mental Health Services',
                link: 'https://ontario.cmha.ca/documents/transitioning-from-youth-to-adult-mental-health-services/',
                tooltip:
                  'The Canadian Mental Health Association highlights some important steps to consider when transitioning from youth to adult mental health services, including information on what to expect in the adult system as well as some common challenges that occur during transition. ',
              },
              {
                linkText: 'EMPOWER',
                link: 'https://empower.ca/en/static/ontario-mental-health-navigation-tool',
                tooltip: 'EMPOWER Health provides an overview of Ontario’s mental health system and the different points of access for health care and mental health services.',
              },
            ],
          },
        ]}
      />
    </div>
  );
}
