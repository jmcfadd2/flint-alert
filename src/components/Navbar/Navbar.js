import React from 'react'
import { Link as LinkRoute } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll'
import styled from 'styled-components'
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
            <NavLinks to='about'>About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='resources'>Resources</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='resources'>Documentation</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='contact'>Contact</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Contact Us</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </NavPanel>
  )
}
