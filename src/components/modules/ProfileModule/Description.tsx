import React from 'react'
import { DescriptionProps } from './interface'

export const Description: React.FC<DescriptionProps> = (props) => (
  <div className="flex flex-col gap-5 pt-10">
    <div className="">
      <h2 className="font-interbold lg:text-[24px] text-[16px] leading-[32px]  ">
        Description
      </h2>
      <p className="font-inter md:py-2 lg:text-[24px] text-[16px] leading-[32px] ">
        {props.description}
      </p>
    </div>
    <div className="py-2 md:py-3">
      <h2 className="font-interbold lg:text-[24px] text-[16px] leading-[32px] ">
        Message for CSUI 22
      </h2>
      <p className="font-inter lg:text-[24px] text-[16px] leading-[32px] md:py-2">
        {props.message}
      </p>
    </div>
    <div className="py-2 md:py-3">
      <h2 className="font-interbold lg:text-[24px] text-[16px] leading-[32px]">
        Interest
      </h2>
      <p className="font-inter lg:text-[24px] text-[16px] leading-[32px] md:py-2">
        {props.interest}
      </p>
    </div>
  </div>
)
