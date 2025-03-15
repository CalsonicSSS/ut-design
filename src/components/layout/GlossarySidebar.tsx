import { assetPathMode } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function GlossarySidebar() {
  return (
    <Link href={'/doc/glossary'} className='relative hover:cursor-pointer'>
      <div className='fixed right-0 top-1/4 bg-[#195b8b] py-[20PX] px-[17px] flex flex-col items-center justify-center shadow-2xl'>
        {/* Info icon */}
        <Image
          src={`${assetPathMode === 'PROD' ? '/unite-toolkit' : ''}/glossary_info_icon.svg`}
          alt='glossary info icon'
          className='object-contain w-full h-auto mb-3'
          height={25}
          width={25}
          priority
        />

        {/* Vertical text */}
        <div className='writing-vertical-lr transform rotate-180 font-roboto font-normal text-[20px] leading-[31px] text-white tracking-[2px]'>Glossary</div>
      </div>
    </Link>
  );
}
