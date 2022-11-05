import React from 'react'
import { Event } from './event'

export const PlayhardModule: React.FC = () => {
  // TODO: Write module's logic

  return (
    <>
        <h1 className="text-[80px] font-interbold  text-center pt-40">
          Play Hard
        </h1>
        <p className='text-[24px] text-center'>
          Until we meet again!
        </p>
        <div className="flex flex-col gap-16 pt-10">
          <Event />
        </div>
        <h1 className="text-[72px] font-interbold  text-center pt-40 pb-40">
          Sabtu Pelangi
        </h1>
      </>
    )
}
