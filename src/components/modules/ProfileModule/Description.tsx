import { maxHeaderSize } from 'http'
import React from 'react'

interface DescriptionProps {
  description: string
  message: string
  interest: string
}

export const Description: React.FC<DescriptionProps> = (props) => (
  <div className="flex flex-col gap-5">
    <div className="desc">
      <h2 className="font-bold text-lg md:text-xl xl:text-2xl">Description</h2>
      <p className="text-lg md:text-xl xl:text-2xl">{props.description}</p>
    </div>
    <div className="message">
      <h2 className="font-bold text-lg md:text-xl xl:text-2xl">
        Message for CSUI 22
      </h2>
      <p className="text-lg md:text-xl xl:text-2xl">{props.message}</p>
    </div>
    <div className="interest">
      <h2 className="font-bold text-lg md:text-xl xl:text-2xl">
        {props.interest}
      </h2>
      <p className="text-lg md:text-xl xl:text-2xl">
        UI/UX Design, Web Development, Valorant
      </p>
    </div>
  </div>
)
