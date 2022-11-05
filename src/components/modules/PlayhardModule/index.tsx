import React, { useEffect, useState } from 'react'
import { gatheringTime, gatheringName } from './constant'
import { Event } from './event'

export const PlayhardModule: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  return (
    <div className="py-20">
      <h1 className="text-[80px] font-interbold  text-center">Play Hard</h1>
      <p className="text-[24px] text-center">Until we meet again!</p>
      <div className="flex flex-col gap-2">
        <Event />
      </div>

      <h1 className="lg:text-[50px] md:text-[40px] sm:text-[40px] text-[30px] max-mobile-l:text-[22px] font-interbold text-center mb-2">
        {gatheringName}
      </h1>
      <div className="flex flex-wrap flex-row place-items-center justify-center">
        <div className="bg-gradient-to-r flex-wrap flex-row place-items-center from-[#00d4ff] via-[#88a7e1] to-[#ce718e] py-[3em] rounded-[3rem] lg:w-[70%] md:w-[80%] sm:w-[85%] w-[95%]">
          <div className="flex flex-wrap flex-row place-items-center justify-center lg:gap-2 md:gap-2 sm:gap-1 max-mobile-l:gap-1 gap-1">
            <div className="lg:mr-6 md:mr-6 sm:mr-3 mr-1">
              <div className="lg:mr-3 md:mr-3 sm:mr-1  mr-[0.125rem]  inline-grid place-items-center text-center lg:w-[4em] lg:h-[5em] md:w-[3em] md:h-[4em] sm:w-[3em] sm:h-[4em] w-[2em] h-[3em] bg-[#0E1F58] lg:rounded-2xl md:rounded-2xl sm:rounded-xl rounded-xl  max-mobile-l:rounded-lg max-mobile-l:w-[1.5em] max-mobile-l:h-[2.5em]">
                <h1 className="flex place-content-center text-white lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px] font-interbold align-middle max-mobile-l:text-[13px]">
                  {timeLeft.days[0]}
                </h1>
              </div>
              <div className="inline-grid place-items-center text-center lg:w-[4em] lg:h-[5em] md:w-[3em] md:h-[4em] sm:w-[3em] sm:h-[4em] w-[2em] h-[3em] bg-[#0E1F58] lg:rounded-2xl md:rounded-2xl sm:rounded-xl rounded-xl  max-mobile-l:rounded-lg max-mobile-l:w-[1.5em] max-mobile-l:h-[2.5em]">
                <h1 className="flex place-content-center text-white lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px] font-interbold align-middle max-mobile-l:text-[13px]">
                  {timeLeft.days[1]}
                </h1>
              </div>
              <div className="grid text-center mt-2 font-interbold sm:text-[15px] text-[13px]">
                Days
              </div>
            </div>

            <div className="lg:mr-3 md:mr-3 sm:mr-1">
              <div className="lg:mr-3 md:mr-3 sm:mr-1  mr-[0.125rem]  inline-grid place-items-center text-center lg:w-[4em] lg:h-[5em] md:w-[3em] md:h-[4em] sm:w-[3em] sm:h-[4em] w-[2em] h-[3em] bg-[#0E1F58] lg:rounded-2xl md:rounded-2xl sm:rounded-xl rounded-xl  max-mobile-l:rounded-lg max-mobile-l:w-[1.5em] max-mobile-l:h-[2.5em]">
                <h1 className="flex place-content-center text-white lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px] font-interbold align-middle max-mobile-l:text-[13px]">
                  {timeLeft.hours[0]}
                </h1>
              </div>
              <div className="inline-grid place-items-center text-center lg:w-[4em] lg:h-[5em] md:w-[3em] md:h-[4em] sm:w-[3em] sm:h-[4em] w-[2em] h-[3em] bg-[#0E1F58] lg:rounded-2xl md:rounded-2xl sm:rounded-xl rounded-xl  max-mobile-l:rounded-lg max-mobile-l:w-[1.5em] max-mobile-l:h-[2.5em]">
                <h1 className="flex place-content-center text-white lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px] font-interbold align-middle max-mobile-l:text-[13px]">
                  {timeLeft.hours[1]}
                </h1>
              </div>
              <div className="grid text-center mt-2 font-interbold sm:text-[15px] text-[13px]">
                Hours
              </div>
            </div>

            <div className="">
              <span className="grid text-[30px] font-interbold lg:mr-3 md:mr-3 sm:mr-1">
                :
              </span>
              <br />
            </div>

            <div className="lg:mr-3 md:mr-3 sm:mr-1">
              <div className="lg:mr-3 md:mr-3 sm:mr-1  mr-[0.125rem]  inline-grid place-items-center text-center lg:w-[4em] lg:h-[5em] md:w-[3em] md:h-[4em] sm:w-[3em] sm:h-[4em] w-[2em] h-[3em] bg-[#0E1F58] lg:rounded-2xl md:rounded-2xl sm:rounded-xl rounded-xl  max-mobile-l:rounded-lg max-mobile-l:w-[1.5em] max-mobile-l:h-[2.5em]">
                <h1 className="flex place-content-center text-white lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px] font-interbold align-middle max-mobile-l:text-[13px]">
                  {timeLeft.minutes[0]}
                </h1>
              </div>
              <div className="inline-grid place-items-center text-center lg:w-[4em] lg:h-[5em] md:w-[3em] md:h-[4em] sm:w-[3em] sm:h-[4em] w-[2em] h-[3em] bg-[#0E1F58] lg:rounded-2xl md:rounded-2xl sm:rounded-xl rounded-xl  max-mobile-l:rounded-lg max-mobile-l:w-[1.5em] max-mobile-l:h-[2.5em]">
                <h1 className="flex place-content-center text-white lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px] font-interbold align-middle max-mobile-l:text-[13px]">
                  {timeLeft.minutes[1]}
                </h1>
              </div>
              <div className="grid text-center mt-2 font-interbold sm:text-[15px] text-[13px]">
                Minutes
              </div>
            </div>

            <div className="">
              <span className="grid text-[30px] font-interbold lg:mr-3 md:mr-3 sm:mr-1">
                :
              </span>
              <br />
            </div>

            <div className="lg:mr-3 md:mr-3 sm:mr-1">
              <div className="lg:mr-3 md:mr-3 sm:mr-1  mr-[0.125rem]  inline-grid place-items-center text-center lg:w-[4em] lg:h-[5em] md:w-[3em] md:h-[4em] sm:w-[3em] sm:h-[4em] w-[2em] h-[3em] bg-[#0E1F58] lg:rounded-2xl md:rounded-2xl sm:rounded-xl rounded-xl  max-mobile-l:rounded-lg max-mobile-l:w-[1.5em] max-mobile-l:h-[2.5em]">
                <h1 className="flex place-content-center text-white lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px] font-interbold align-middle max-mobile-l:text-[13px]">
                  {timeLeft.seconds[0]}
                </h1>
              </div>
              <div className="inline-grid place-items-center text-center lg:w-[4em] lg:h-[5em] md:w-[3em] md:h-[4em] sm:w-[3em] sm:h-[4em] w-[2em] h-[3em] bg-[#0E1F58] lg:rounded-2xl md:rounded-2xl sm:rounded-xl rounded-xl  max-mobile-l:rounded-lg max-mobile-l:w-[1.5em] max-mobile-l:h-[2.5em]">
                <h1 className="flex place-content-center text-white lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px] font-interbold align-middle max-mobile-l:text-[13px]">
                  {timeLeft.seconds[1]}
                </h1>
              </div>
              <div className="grid text-center mt-2 font-interbold sm:text-[15px] text-[13px] ">
                Seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const calculateTimeLeft = () => {
  const difference = +new Date(gatheringTime) - +new Date()
  let timeLeft: {
    days: string
    hours: string
    minutes: string
    seconds: string
  } = {
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  }
  if (difference > 0) {
    const d = Math.floor(difference / (1000 * 60 * 60) / 24)
    const h = Math.floor((difference / (1000 * 60 * 60)) % 24)
    const m = Math.floor((difference / 1000 / 60) % 60)
    const s = Math.floor((difference / 1000) % 60)
    let dStr = d.toString()
    let hStr = h.toString()
    let mStr = m.toString()
    let sStr = s.toString()
    if (d < 10) dStr = '0' + d.toString()
    if (h < 10) hStr = '0' + h.toString()
    if (m < 10) mStr = '0' + m.toString()
    if (s < 10) sStr = '0' + s.toString()
    timeLeft = {
      days: dStr,
      hours: hStr,
      minutes: mStr,
      seconds: sStr,
    }
  }

  return timeLeft
}
