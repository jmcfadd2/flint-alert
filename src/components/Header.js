import React from 'react'
import styled from 'styled-components'

export default function Header() {
  const Container = styled.div`
    background-color: lightblue;
    display: flex;
    flexDirection: row;
    height: 10vh
  `;
  const NavPanel = styled.ul`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
  `
  const Text = styled.h1`
    color: alicewhite;
  `
  return (
    <Container>
      <NavPanel>
        
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        
      </NavPanel>
    </Container>
  )
}
