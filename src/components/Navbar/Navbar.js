import React from 'react'
import { FaBars } from 'react-icons/fa'
import { MobileIcon, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu, NavPanel } from './NavbarElements'

export default function Navbar({ toggle }) {
  
  
  
  
  return (
    <NavPanel>
      <NavbarContainer>
        <NavLogo to='/'>Flint-Alert</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='about'>Problem</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='resources'>Solution</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='resources'>How</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='contact'>Help</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Contact Us</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </NavPanel>
  )
}
