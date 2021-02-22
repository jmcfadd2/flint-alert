import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements'

export default function Sidebar({ toggle, isOpen }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink smooth to='problem' onClick={toggle}>Problem</SidebarLink>
          <SidebarLink smooth to='solution' onClick={toggle}>Solution</SidebarLink>
          <SidebarLink smooth to='how' onClick={toggle}>How</SidebarLink>
          <SidebarLink smooth to='help' onClick={toggle}>Help</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute 
            target='_blank'
            href='http://chng.it/V5n7bdmj' 
            onClick={toggle}>Sign Petition
            </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}
