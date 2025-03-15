'use client';

import React, { useEffect } from 'react';

export default function CitationContent() {
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
      <h1 className='doc-content-title mb-8'>Citation</h1>
      <p className='mb-6' id='ref-Hendrickx' data-section>
        Hendrickx, G., De Roeck, V., Maras, A., Dieleman, G., Gerritsen, S., Purper-Ouakil, D., Russet, F., Schepker, R., Signorini, G., Singh, S. P., Street, C., Tuomainen, H., &
        Tremmery, S. (2020). Challenges during the transition from child and adolescent mental health services to adult mental health services. BJPsych Bulletin, 44(4), 163– 168.
      </p>
      <p className='mb-6' id='ref-Bauer' data-section>
        Bauer, A. M., Azzone, V., Goldman, H. H., Sujanander, L., Unützer, J., & Coleman-Beattie, B. (2013). Implementation of collaborative depression management at communitybased
        primary care clinics: an evaluation. Psychiatric Services, 64(12), 1242–1248.
      </p>
      <p className='mb-6' id='ref-Borah' data-section>
        Borah, E., Cohen, D., Bearman, S. K., Platz, M., & Londoño, T. (2021). Comparison of child and adult clinicians’ perceptions of barriers and facilitators to effective care
        transition. Social Work in Mental Health, 19(2), 166–185.
      </p>

      <p className='mb-6'>
        Broad, K. L., Sandhu, V. K., Sunderji, N., & Charach, A. (2017). Youth experiences of transition from child mental health services to adult mental health services: A
        qualitative thematic synthesis. BMC Psychiatry, 17(1).
      </p>

      <p className='mb-6' id='ref-Cleverley' data-section>
        Cleverley, K., Lenters, L. & McCann, E. (2020). “Objectively terrifying”: a qualitative study of youth’s experiences of transitions out of child and adolescent mental
        health services at age 18. BMC Psychiatry 20, 147.
      </p>

      <p className='mb-6' id='ref-CPSO' data-section>
        College of Physicians and Surgeons of Ontario, and Citizen Advisory Group. Continuity of Care: Guide for Patients and Caregivers. from:
        https://www.cpso.on.ca/admin/CPSO/media/Documents /public/public-information/coc-guide/coc-guide-patientscaregivers.pdf
      </p>

      <p className='mb-6' id='ref-Farre' data-section>
        Farre, A., Wood, V., Rapley, T., Parr, J. R., Reape, D., & McDonagh, J. E. (2015). Developmentally appropriate healthcare for young people: a scoping study. Archives of
        disease in childhood, 100(2), 144-151.
      </p>

      <p className='mb-6' id='ref-IPEC' data-section>
        Interprofessional Education Collaborative. (2016). Core competencies for interprofessional collaborative practice: 2016 update. Washington, DC: Interprofessional Education
        Collaborative. Adapted with permission.
      </p>

      <p className='mb-6' id='ref-LF' data-section>
        Lau, F. (2019). Patient empowerment: the role of technology. Improving Usability, Safety and Patient Outcomes with Health Information Technology: From Research to Practice,
        257, 70.
      </p>

      <p className='mb-6' id='ref-McDonagh' data-section>
        McDonagh, J. E. (2006). Growing up ready for emerging adulthood. An evidence base for professionals involved in transitional care for young people with chronic illness
        and/or disabilities.
      </p>

      <p className='mb-6' id='ref-McGorry-2022' data-section>
        McGorry, P. D., Mei, C., Chanen, A., Hodges, C., Alvarez‐ Jimenez, M., & Killackey, E. (2022). Designing and scaling up integrated youth mental health care. World
        Psychiatry, 21(1), 61-76.
      </p>
      <p className='mb-6' id='ref-McGorry-2014' data-section>
        McGorry, P. D., Goldstone, S. D., Parker, A. G., Rickwood, D. J., & Hickie, I. B. (2014). Cultures for mental health care of young people: an Australian blueprint for
        reform. The Lancet Psychiatry, 1(7), 559-568.
      </p>
      <p className='mb-6'>
        McLaney, E., Morassaei, S., Hughes, L., Davies, R., Campbell, M., & Di Prospero, L. (2022, March). A framework for interprofessional team collaboration in a hospital
        setting: Advancing team competencies and behaviours. In Healthcare Management Forum (Vol. 35, No. 2, pp. 112-117). Sage CA: Los Angeles, CA: SAGE Publications.
      </p>

      <p className='mb-6' id='ref-Nilsen' data-section>
        Nilsen, P., Seing, I., Ericsson, C., Birken, S. A., & Schildmeijer, K. (2020). Characteristics of successful changes in health care organizations: An interview study with
        physicians, registered nurses and assistant nurses. BMC Health Services Research, 20(1).
      </p>

      <p className='mb-6' id='ref-Hara' data-section>
        O&apos;Hara, L., Holme, I., Tah, P., Franic, T., Vrljičak Davidović, N., Paul, M., ... & Wohner, A. (2020). A cross‐cultural qualitative study of the ethical aspects in the
        transition from child mental health services to adult mental health services. Child and Adolescent Mental Health, 25(3), 143- 149.
      </p>

      <p className='mb-6'>Peer Support Canada. (2023). About Peer Support Canada. https://peersupportcanada.ca/</p>
      <p className='mb-6' id='ref-Toulany-2019'>
        Toulany, A., Stukel, T. A., Kurdyak, P., Fu, L., & Guttmann, A. (2019). Association of Primary Care continuity with outcomes following transition to adult care for
        adolescents with severe mental illness. JAMA Network Open, 2(8).
      </p>

      <p id='ref-Toulany-2022' data-section>
        Toulany, A., Willem Gorter, J., & Harrison, M. (2022). A call for action: recommendations to improve transition to adult care for youth with complex health care needs.
        Paediatrics & Child Health, 27(5), 297-302.
      </p>
    </section>
  );
}
