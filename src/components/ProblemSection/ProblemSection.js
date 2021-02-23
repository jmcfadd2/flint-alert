import React from 'react'
import SectionWrapper from '../SectionWrapper'
import { Heading, HealthVideo, Paragraph, TextContainer } from './ProblemSectionElements'


export default function ProblemSection() {
  return (
    <SectionWrapper name='problem'>
      <TextContainer>
        <Heading>
          The Problem
        </Heading>
        <Paragraph>
          We are going to bring clean water to the forefront of public service announcements
        </Paragraph>
      </TextContainer>
      
        <HealthVideo
          src='https://www.youtube.com/embed/2H_s-_m-je0'
          
        />
      
    </SectionWrapper>
  )
}
