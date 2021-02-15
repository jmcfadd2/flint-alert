import React from 'react'
import { Heading, Paragraph, TextContainer } from '../ProblemSection/ProblemSectionElements'
import SectionWrapper from '../SectionWrapper'
import { Fade } from 'react-reveal'
import { AniContainer } from './ContentSectionElements'

export default function ContentSection({ heading, text, Animation, flip }) {
  return (
    <>
    {!flip ? (
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
          <Fade bottom>
            {Animation}
          </Fade>
        </AniContainer>
      
    </SectionWrapper>
    ) : (
          <SectionWrapper>

            <AniContainer orient={flip}>
              <Fade bottom>
                {Animation}
              </Fade>
            </AniContainer>


            <TextContainer orient={flip}>
              <Heading>
                {heading}
              </Heading>
              <Paragraph>
                {text}
              </Paragraph>
            </TextContainer>

          </SectionWrapper>
    )}
    </>
  )
}
