import React from 'react'
import { Carousel } from './Carousel'
import { HeroSection } from './HeroSection'
import { IntroAngkatanSection } from './IntroAngkatanSection'
import { WebDevSection } from './WebDevSection'

export const HomeModule: React.FC = () => (
  <>
    <div className="flex flex-col gap-16 py-24">
      <HeroSection />
      <IntroAngkatanSection />
      <Carousel/>
      <WebDevSection />
    </div>
  </>
)
