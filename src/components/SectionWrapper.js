import React from 'react'
import styled from 'styled-components'
import colors from '../colors'

export default function SectionWrapper({children, background}) {
  const Section = styled.section`
    background-color: ${colors.secondary};
    padding-top: 10vh;
    height: 60vh;
    display: flex;
    @media (max-width: 800px) {
      flex-direction: column
    }
  `
  return (
    <Section>
      {children}
    </Section>
  )
}
