import React from 'react';
import LinkList from './elementSupportComponents/LinkList';

export default function ResourcesListContent() {
  return (
    <section className='py-10 doc-content-text'>
      <h1 className='doc-content-title'>Resource List</h1>
      <h1 className='doc-content-sub-title mt-10 mb-8'>Element 1</h1>
      <LinkList
        linkContents={[
          {
            href: 'https://www.nice.org.uk/guidance/health-and-social-care-delivery/service-transition',
            text: "1.1 NICE, transitions from children's to adults 'services pathway",
          },
          {
            href: 'https://ijmhs.biomedcentral.com/articles/10.1186/s13033-019-0306-7',
            text: '1.1 Key attributes of integrated community-based youth service hubs for mental health: a scoping review',
          },
          { href: 'https://www.cymha.ca/en/projects/care-pathways.aspx', text: '1.1 Knowledge Institute on Child and Youth Mental Health and Addictions Care Pathways' },
          {
            href: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.gottransition.org/6ce/?leaving-ImplGuide-policy-examples',
            text: '1.2 GotTransition, Sample Transition and Care Policies/Guides',
          },
          {
            href: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://extranet.ahsnet.ca/teams/policydocuments/1/clp-amh-ahs-care-transitions-amh-13.pdf',
            text: '1.2 Alberta Health Services: Care Transitions Policy',
          },
          { href: 'https://www.improvingsystems.ca/projects/youth-transition-protocol-in-kfla', text: '1.3 KFL&A, Youth Transitioning Protocol' },
          {
            href: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www2.gov.bc.ca/assets/gov/health/managing-your-health/mental-health-substance-use/child-teen-mental-health/y2a_protocol.pdf',
            text: '1.3 Youth Mental Health Transition Protocol Agreement between Ministry for Children and Family Development and Ministry of Health and Health Authorities',
          },
          {
            href: 'https://rnao.ca/bpg/guidelines/transitions-in-care',
            text: '1.4 Registered Nurses Association of Ontario (RNAO), Transitions in Care and Services Clinical Best Practice Guideline',
          },
          { href: 'https://www.floridahats.org/', text: '1.4 Florida Health and Transition Services' },
          { href: 'https://healthytransitionsny.org/skills/', text: '1.4 New York State Institute for Health Transition Training, Transition Skills Resources' },
          {
            href: 'https://pediatrics.med.jax.ufl.edu/jaxhats/docs/floridahats_hct4hcp_brochure1.pdf',
            text: '1.4 Florida Keys Area Health Education Center Inc., Health Care Transition Training Program,',
          },
          {
            href: 'https://www.floridahats.org/fly2at-course-for-professionals/',
            text: '1.4 Florida Health and Transition Services, Florida Youth 2 Adult Transition (FLY2AT) Course',
          },
          {
            href: 'https://media.uhfnyc.org/filer_public/95/55/9555ccca-ea5c-4f7b-a524-5356ca0b0924/6_eric_coleman__family_caregiver_activation_in_transitions_fcat_tool.pdf',
            text: '1.5 The Family Caregiver Activation in Transitions Tool (FCAT)',
          },
          {
            href: 'https://www.albertahealthservices.ca/assets/info/amh/if-amh-ecc-what-are-the-roles-in-transitions-of-care.pdf',
            text: '1.5 Alberta Health Services, Enhancing Concurrent Capability Toolkit Transitions in Care Quick Reference Sheet',
          },
          {
            href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6254258/',
            text: '1.5 Facilitating Effective Transitions from Hospital to Community for Children and Adolescent Mental Health Services: Overview of the Transition Support Worker Role and Function',
          },
          { href: 'https://www.cymha.ca/Modules/ResourceHub/?id=64172b4d-af0d-432a-8d66-880ba2292486', text: '1.6 Knowledge Institute, Youth Engagement Standards' },
          {
            href: 'https://ppe.mcmaster.ca/resources/public-and-patient-engagement-evaluation-tool/',
            text: '1.6 The Public and Patient Engagement Evaluation Tool (PPEET) Participant Questionnaire',
          },
          { href: 'https://pubmed.ncbi.nlm.nih.gov/34089382/', text: '1.6 The Core Components of Effective Youth Transitions (CCEYT)' },
          { href: 'https://www.hqontario.ca/Portals/0/documents/evidence/quality-standards/measurement-guide-en.pdf', text: '1.7 Health Quality Ontario Measurement Guide' },
          { href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8245465/', text: '1.7 NEAT study protocol' },
          { href: 'https://pubmed.ncbi.nlm.nih.gov/34089382/', text: '1.7 Core Components of Effective Youth Transitions (CCEYT)' },
          { href: 'https://pubmed.ncbi.nlm.nih.gov/29147951/', text: '1.7 Navigation Satisfaction Tool (NAVSAT)' },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8'>Element 2</h1>
      <LinkList
        linkContents={[
          {
            href: 'https://www.pcmch.on.ca/wp-content/uploads/2022/05/CCKO-Youth-Transition-Caregiver_Youth-Checklist_-Final_Feb222022-Fillable.pdf',
            text: '2.1 Complex Care for Kids Ontario Youth Transition to Adult Care Toolkit- Caregiver and Youth Checklist & Transition Resource Guide',
          },
          {
            href: 'https://coordinatedaccess.ca/wp-content/uploads/2015/07/Transition-Planning-Framework-Final-English.pdf',
            text: '2.1 The Ministries of Community & Social Services and Children and Youth Services, Provincial Transition Planning Framework for Young People With Developmental Disabilities',
          },
          {
            href: '                 ',
            text: '2.2 NEAT Study Clinical Tracking Database',
          },
          {
            href: 'https://gottransition.org/6ce/?leaving-flow-sheet',
            text: '2.2 GotTransition, Sample Individual Transition Flow Sheet',
          },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8'>Element 3</h1>
      <LinkList
        linkContents={[
          {
            href: 'https://www.etsu.edu/com/pediatrics/traq/',
            text: '3.1 The Transition Readiness Assessment Questionnaire (TRAQ 6.0)',
          },
          {
            href: 'https://onlinelibrary.wiley.com/doi/10.1111/cch.13035',
            text: '3.1 Validation of the Transition Readiness Assessment Questionnaire (TRAQ) 5.0 for use among youth in mental health services',
          },
          {
            href: 'https://ontario.cmha.ca/documents/transitioning-from-youth-to-adult-mental-health-services/',
            text: '3.2 CMHA, Transitioning from Youth to Adult Mental Health Services',
          },
          { href: 'https://empower.ca/en/static/ontario-mental-health-navigation-tool', text: '3.2 EMPOWER' },
          { href: 'https://www.gottransition.org/6ce/?leaving-plan-care', text: '3.3 Got Transition, Transition Care Plan Template' },
          { href: 'https://mindyourmind.ca/games-tools/personal-growth/service-transition-plan/', text: '3.3 Mindyourmind, Service Transition Plan' },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8'>Element 4</h1>
      <LinkList
        linkContents={[
          {
            href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6254258/',
            text: '4.1 Facilitating Effective Transitions from Hospital to Community for Children and Adolescent Mental Health Services: Overview of the Transition Support Worker Role and Function',
          },
          { href: 'http://sunnybrook.ca/content/?page=family-navigation-project-what-we-do', text: '4.1 The Sunnybrook Family Navigation  Project' },
          { href: 'https://www.tehn.ca/programs-services/mental-health-addiction/transitional-youth-program', text: '4.1 Michael Garron Transitional Youth Program' },
          {
            href: 'https://www.niagararegion.ca/health/professionals/mental/mental-health-service.aspx#:~:text=Eligibility%20criteria&text=Experience%20ongoing%20illness%20that%20impacts,in%20their%20home%20or%20community',
            text: '4.3 Niagara Region Adult and Youth Mental Health Services',
          },
          {
            href: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2740785',
            text: '4.7 Association of Primary Care Continuity With Outcomes Following Transition to Adult Care for Adolescents With Severe Mental Illness',
          },
          {
            href: 'https://www.camh.ca/-/media/files/pdfs---public-policy-submissions/primarycarepolicyframework_march2016-pdf.pdf',
            text: '4.7 CAMH Mental Health and Primary Care Policy Framework',
          },
          { href: 'https://youthhubs.ca/', text: '4.8 Youth Wellness Hubs Ontario' },
          { href: 'https://foundrybc.ca/', text: '4.8 Foundry (British Columbia)' },
          { href: 'https://mykickstand.ca/', text: '4.8 Kickstand (Alberta)' },
          { href: 'https://www.quebec.ca/sante/trouver-une-ressource/aire-ouverte', text: '4.8 Aire Ouverte (Quebec)' },
          { href: 'https://accessopenminds.ca/our_site/eskasoni-first-nation-ns-2/', text: '4.8 Access Open Minds (partnership with Esakoni First Nation, Nova Scotia)' },
          {
            href: 'https://peersupportcanada.ca/wp-content/uploads/2019/06/MHCC_Peer_Support_Guidelines_2016-ENG.pdf',
            text: '4.9 Mental Health Commission of Canada, Guidelines for the Practice and Training of Peer Support',
          },
          {
            href: 'https://www.cymha.ca/en/projects/youth-peer-support.aspx',
            text: '4.9 Knowledge Institute on Child and Youth Mental Health and Addictions, Peer Support Introduction',
          },
        ]}
      />
      <h1 className='doc-content-sub-title mt-10 mb-8'>Element 5</h1>
      <LinkList
        linkContents={[
          { href: 'https://www.albertahealthservices.ca/assets/info/amh/if-amh-ecc-warm-handoffs.pdf', text: '5.1 Alberta Health Services, Warm Handoffs' },
          {
            href: 'https://policy.nshealth.ca/Site_Published/NSHA/document_render.aspx?documentRender.IdType=6&documentRender.GenericField=&documentRender.Id=98152',
            text: '5.2 Nova Scotia Health, Information Transfer at Care Transitions Policy',
          },
          {
            href: 'https://www.womenscollegehospital.ca/accreditation-q-tip-information-transfer-at-care-transitions/',
            text: '5.2 Women’s College Hospital, INFORMATION TRANSFER AT CARE TRANSITIONS',
          },
          { href: 'https://rnao.ca/bpg/guidelines/transitions-in-care', text: '5.2 RNAO My Transitional Care Plan©' },
        ]}
      />
    </section>
  );
}
