import React from 'react'
import Section from '../../../components/Section'
import styled from 'styled-components'
import BoilAni from './BoilAni'
export default function MidSection() {
  const Title = styled.h2`
    color: white;
    
  `
  const Copy = styled.p`
    color: white;

  `
  const ContentWrapper = styled.div`
    margin-left: auto;
    margin-right: 10vh;
  `
  const AnimationWrapper = styled.div`
    margin-left: 10vh;
    margin-right: auto;
  `
  
  return (
    <Section>
      <ContentWrapper>
        <Title>
      Hello Dolly
      </Title>
      <Copy>
      This is where the paragraphs will go
      </Copy>
      </ContentWrapper>
      <BoilAni />
    </Section>
  )
}
