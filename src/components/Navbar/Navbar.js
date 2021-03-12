import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { MobileIcon, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu, NavPanel } from './NavbarElements'

export default function Navbar({ toggle }) {


  const [scrollState, setScrollState] = useState(false)

  useEffect(() => {
    let listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 120) {
        if (scrollState !== true) {
          setScrollState(true)
        }
      } else {
        if (scrollState !== false) {
          setScrollState(false)
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])


  return (
    <NavPanel scrolling={scrollState}>
      <NavbarContainer>
        <NavLogo to='/'>Boil-Water-Alert</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks spy smooth offset={-200} to='problem'>Problem</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks spy smooth offset={-200} to='solution'>Solution</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks spy smooth offset={-200} to='how'>How</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks spy smooth offset={-200} to='help'>Help</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn  >
          <NavBtnLink
            target='h_blank'
            href='http://chng.it/V5n7bdmj'
          >
            Sign the Petition
            </NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </NavPanel>
  )
}
