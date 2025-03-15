import { assetPathMode } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='w-full border-t pt-6'>
      <div className='lg:ps-52 flex flex-col lg:flex-row items-center justify-between'>
        <div className='w-full lg:w-auto text-center lg:text-left'>
          <div className='mb-[50px] sm:px-2 md:px-0'>
            <p className='section-title'>THE UNITE TOOLKIT</p>
            <h1 className='main-title'>Core Components Guidebook</h1>
          </div>
          <p className='font-roboto text-base lg:text-lg mb-8 lg:mb-14'>Supporting youth mental health transitions in care</p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center lg:justify-start sm:px-5 md:px-0'>
            {/* Replace button with Link component */}
            <Link href='/doc#about-this-resource' className='button-fill sm:w-auto'>
              Go to Web version
            </Link>
            <button className='button-outline sm:w-auto'>Download PDF</button>
          </div>
        </div>
        <div className='mt-10 xl:m-0'>
          <Image
            src={`${assetPathMode === 'PROD' ? '/unite-toolkit' : ''}/hero_image.svg`}
            alt='Healthcare illustration'
            className='object-contain w-full h-auto'
            height={530}
            width={495}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
