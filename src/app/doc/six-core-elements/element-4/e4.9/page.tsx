import HighlightTextButton from '@/components/doc/elementSupportComponents/HighlightTextButton';
import { ResourcesContentLinks } from '@/components/doc/elementSupportComponents/ResourcesBulletContent';
import React from 'react';

export default function SubSection4_9() {
  return (
    <div className='doc-content-text'>
      <HighlightTextButton
        clickToId='gt-ps'
        title='Peer support'
        tooltipDesc='An emotional and practical relationship between the youth and a trained peer support worker with lived experience (Peer Support Canada, 2023).'
      />
      <p className='mt-8 mb-6'>
        The transition experience can often be a point of fear or anxiety for youth due to the uncertainty of the process. During this time, youth may benefit from connecting with
        a trained peer support worker who has the skills and shared lived experience to offer emotional support to the youth. Peer support workers can offer helpful coping
        strategies and conduct support meetings to assist youth with the challenges they may face during their transition process.
      </p>
      <ResourcesContentLinks
        contents={[
          {
            linkObjs: [
              {
                linkText: 'Mental Health Commission of Canada, Guidelines for the Practice and Training of Peer Support',
                link: 'https://peersupportcanada.ca/wp-content/uploads/2019/06/MHCC_Peer_Support_Guidelines_2016-ENG.pdf',
                tooltip:
                  'The Peer Support Guidelines provide direction on how to facilitate peer support to foster recovery. The guidelines are designed to support mental health and well-being for everyone. This resource includes guidelines for the practice of peer support and guidelines for training of peer support.',
              },
              {
                linkText: 'Knowledge Institute on Child and Youth Mental Health and Addictions, Peer Support Introduction',
                link: 'https://www.cymha.ca/en/projects/youth-peer-support.aspx',
                tooltip:
                  'The Ontario Knowledge Institute on Child and Youth Mental Health and Addictions, introduces youth peer support in a mental health context and outlines the benefits of peer support among youth. It also discusses how to incorporate and develop a peer support program within an organizational context.',
              },
            ],
          },
        ]}
      />
    </div>
  );
}
