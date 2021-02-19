import React, { useEffect, useState } from 'react'
import { Link as LinkRoute } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import { MobileIcon, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu, NavPanel } from './NavbarElements'

export default function Navbar({ toggle }) {
  
  const [scrolledDown, setScrolledDown] = useState(false);
  
  
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
