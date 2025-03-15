import React, { ReactNode } from 'react';

export default function About(): ReactNode {
  return (
    <div className='w-full'>
      {/* First section */}
      <div className='w-full bg-[#EDF7FD] px-4 sm:px-8 lg:px-[80px] py-20 lg:py-24 flex justify-center items-center'>
        <div className='w-full lg:w-[900px]'>
          <p className='section-title text-center'>ABOUT</p>
          <p className='main-title text-center sm:text-3xl lg:text-5xl'>Purpose of this Resource</p>
          <p className='mt-6 lg:mt-11 base-text-content text-center text-size-base lg:text-lg'>
            The purpose of the Unite Core Components Guidebook is to support the uptake and implementation of the core components of successful mental health transitions in youth
            mental health care settings.
          </p>
          <p className='text-center mt-6 lg:mt-11 base-text-content text-size-base lg:text-lg'>
            This resource is not meant to be prescriptive. Transition policies and practices vary based on a number of factors. This Guidebook is meant to be used as a starting
            place to guide further discussion and development of transition policies and interventions that are fitting for your community.
          </p>
        </div>
      </div>
    </div>
  );
}
