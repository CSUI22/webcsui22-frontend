import React from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'
import { tabs } from './constant'
import { NavbarBodyProps } from './interface'

export const Collaps: React.FC<NavbarBodyProps> = ({
  isCollapsed,
  handleCollapse,
}) => {
  return (
    <Transition
      as="div"
      show={!isCollapsed}
      className="w-full bg-primary px-7 py-3"
      enterFrom="-translate-y-30 opacity-0"
      enter="transition-all duration-300"
      leaveTo="-translate-y-30 opacity-0"
      leave="transition-all duration-300"
    >
      <div className="flex flex-col gap-4">
        {tabs.map(({ url, label }, index) => (
          <Link href={url} key={index}>
            <a onClick={handleCollapse}>
              <div className="font-interlight text-[16px]">{label}</div>
            </a>
          </Link>
        ))}
      </div>
    </Transition>
  )
}

export default Collaps
