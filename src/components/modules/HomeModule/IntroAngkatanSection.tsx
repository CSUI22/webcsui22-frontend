import React from 'react'
import { Imageoptimized } from '@elements'

export const IntroAngkatanSection: React.FC = () => (
  <div>
    <div className="flex items-center">
      <div className="relative flex flex-wrap mx-auto">
        <Imageoptimized
          imageUrl="/assets/images/artiangkatan.png"
          alt="CSUI 22"
          className="xl:w-[1100px] xl:h-[292px] lg:w-[900px] lg:h-[292px] md:w-[700px] md:h-[192px] xs:w-[300px] xs:h-[80px] ss:w-[365px] ss:h-[100px]"
          fit="contain"
        />
      </div>
    </div>
  </div>
)
