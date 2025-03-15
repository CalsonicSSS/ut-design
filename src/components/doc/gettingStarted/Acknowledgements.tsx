import React from 'react';
import DotList from '../elementSupportComponents/DotList';

export default function AcknowledgementsContent() {
  return (
    <section className='py-10 doc-content-text border-b-[1px]'>
      <h1 className='doc-content-title sm:text-[26px] lg:text-[32px] mb-8'>Acknowledgements</h1>
      <p className='font-bold'>The following people contributed to the development of this resource:</p>
      <DotList
        contentList={[
          <p key={1}>
            Kristin Cleverley <span className='text-[#7FD5D1]'>1,2</span>
          </p>,
          <p key={2}>
            Julia Davies <span className='text-[#7FD5D1]'>1.2</span>
          </p>,
          <p key={3}>
            Emma McCann <span className='text-[#7FD5D1]'>1</span>
          </p>,
          <p key={4}>
            Celeste Agard <span className='text-[#7FD5D1]'>1</span>
          </p>,
          <p key={6}>
            Savina Edward <span className='text-[#7FD5D1]'>1</span>
          </p>,
          <p key={7}>
            Shabeeha Firthouse <span className='text-[#7FD5D1]'>1</span>
          </p>,
          <p key={8}>
            Soha Salman <span className='text-[#7FD5D1]'>2</span>
          </p>,
        ]}
        ms={[0, 0, 0, 0, 0, 0]}
      />
      <p className='my-8'>
        We would also like to acknowledge the Transition Navigator Community of Practice, consisting of navigators practising in health care organizations across the Greater
        Toronto Area, who contributed several resources and shared their expertise throughout the development of this toolkit.
      </p>
      <p className='font-bold'>This resource was developed with the support of grant funding</p>
      <p>Period of Funding: 2023-2024.</p>
      <DotList
        contentList={[
          'Cleverley K (NPI), Barbic S (Co-PI), Iyer S (Co-PI), Henderson J (Co-PI), Bagnell A, Dimitropoulos G, Goyette M, Mushquash C, Toulany A, Hay K, Hutt-MacLeod D, Mathias S, Tee K. Transitions in Practice: Implementing National Youth Mental Health Transition Standards Across Canada (TIPS). Funding Agency: CIHR Catalyst Grant.',
        ]}
        ms={[6]}
      />

      <p>Funding: 2022-2023.</p>
      <DotList
        contentList={[
          'Cleverley K (NPI), Bartha C (Co-PI), Davies J (Co-PI), Barbic S, Dimitropoulos G, Henderson J, McCann E. The UNITE Toolkit: A guide to implementing the core components of successful transitions from child and adolescent mental health services. CIHR Planning and Dissemination Grant.',
        ]}
        ms={[6]}
      />
      <p className='font-bold mt-8'>Affiliations </p>
      <p>University of Toronto 1</p>
      <p>Centre for Addiction and Mental Health 2</p>
    </section>
  );
}
