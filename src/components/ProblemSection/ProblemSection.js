import React from 'react'
import SectionWrapper from '../SectionWrapper'
import { Heading, HealthVideo, Paragraph, TextContainer } from './ProblemSectionElements'
import Vid from '../../assets/water.mp4'


export default function ProblemSection() {
  return (
    <SectionWrapper>
      <TextContainer>
        <Heading>
          The Problem
        </Heading>
        <Paragraph>
          We are going to bring clean water to the forefront of public service announcements
        </Paragraph>
      </TextContainer>
      <HealthVideo 
        controls
        src={Vid}
      />
    </SectionWrapper>
  )
}