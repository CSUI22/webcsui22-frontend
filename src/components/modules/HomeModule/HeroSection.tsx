import React from 'react'
import { Imageoptimized } from '@elements'

export const HeroSection: React.FC = () => (
  <div>
    <div className="flex items-center">
      <div className="relative flex flex-wrap mx-auto">
        <Imageoptimized
          imageUrl="/assets/images/csui-22.png"
          alt="CSUI 22"
          className="xl:w-[1200px] xl:h-[576px] lg:w-[900px] lg:h-[480px] md:w-[700px] md:h-[384px] xs:w-[300px] xs:h-[200px] ss:w-[365px] ss:h-[200px]"
          fit="contain"
        />
      </div>
    </div>
  </div>
)
