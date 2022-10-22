import React from 'react'
import { HeroSection } from './HeroSection'
import { IntroAngkatanSection } from './IntroAngkatanSection'


export const HomeModule: React.FC = () => (
  <>

  <div className='flex flex-col gap-16 py-24'>
    <HeroSection />
    <IntroAngkatanSection />
  </div>
  </>
)
