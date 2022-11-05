import React, { useEffect, useState } from 'react'
import { gatheringTime } from './constant'

export const Timer = () => {
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
    <div>
      <p>
        <span>{timeLeft.days}</span>
        <span>:</span>
        <span>{timeLeft.hours}</span>
        <span>:</span>
        <span>{timeLeft.minutes}</span>
        <span>:</span>
        <span>{timeLeft.seconds}</span>
      </p>
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
    let d = Math.floor(difference / (1000 * 60 * 60) / 24)
    let h = Math.floor((difference / (1000 * 60 * 60)) % 24)
    let m = Math.floor((difference / 1000 / 60) % 60)
    let s = Math.floor((difference / 1000) % 60)
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
