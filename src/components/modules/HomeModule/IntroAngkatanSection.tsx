import React from 'react'
import { Imageoptimized } from '@elements'

export const IntroAngkatanSection: React.FC = () => (
  <div>
    <div className="flex items-center">
      <div className="relative flex flex-wrap mx-auto">
        <Imageoptimized
          imageUrl="/assets/images/artiangkatan.png"
          alt="CSUI 22"
          className="w-[1100px] h-[292px]"
          fit="contain"
        />
      </div>
    </div>
  </div>
)
