import React, { useEffect, useState } from 'react'
import { Collaps } from './Collaps'
import { NavbarBody } from './NavbarBody'
import { NavbarStateProps } from './interface'

export const Navbar: React.FC = () => {
  const [navbarState, setNavbarState] = useState<NavbarStateProps>({
    isCollapsed: true,
  })

  const handleCollapse = () => {
    setNavbarState((prevState) => ({
      ...prevState,
      isCollapsed: !navbarState.isCollapsed,
    }))
  }
  return (
    <div className="fixed w-full transition-all duration-200 ease-in-out z-20">
      <NavbarBody {...navbarState} handleCollapse={handleCollapse} />
      <Collaps {...navbarState} />
    </div>
  )
}
