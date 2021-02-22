import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import colors from '../colors'

export default function SectionWrapper({children, background, name}) {
  const Section = styled(Element)`
    background-color: ${colors.secondary};
    padding-top: 10vh;
    height: 60vh;
    display: flex;
    @media (max-width: 800px) {
      flex-direction: column;
      height: auto
    }
  `
  return (
    <Section name={name}>
      {children}
    </Section>
  )
}
