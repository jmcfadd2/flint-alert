import React from 'react'
import { Heading, Paragraph, TextContainer } from '../ProblemSection/ProblemSectionElements'
import SectionWrapper from '../SectionWrapper'
import { AniContainer } from './ContentSectionElements'

export default function ContentSection({heading, text, Animation }) {
  return (
    <SectionWrapper>
      <TextContainer>
        <Heading>
          {heading}
        </Heading>
        <Paragraph>
          {text}
        </Paragraph>
      </TextContainer>
      <AniContainer>
        {Animation}
      </AniContainer>
    </SectionWrapper>
  )
}
