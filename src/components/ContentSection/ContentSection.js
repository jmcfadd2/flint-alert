import React from 'react'
import { Heading, Paragraph, TextContainer } from '../ProblemSection/ProblemSectionElements'
import SectionWrapper from '../SectionWrapper'
import { Fade } from 'react-reveal'
import { AniContainer } from './ContentSectionElements'
import { Button } from '../button/ButtonElement'

export default function ContentSection({ heading, text, Animation, flip, button, name }) {

  return (
    <>
      {!flip ? (
        <SectionWrapper name={name}>

          <TextContainer>

            <Heading>
              {heading}
            </Heading>
            <Paragraph>
              {text}
            </Paragraph>
            {button &&
              <Button
                target='_blank'
                href='http://chng.it/V5n7bdmj'
                primary='true'
                dark='true'
              >
                {button}
              </Button>
            }
          </TextContainer>

          <AniContainer>
            <Fade bottom>
              {Animation}
            </Fade>
          </AniContainer>

        </SectionWrapper>
      ) : (
          <SectionWrapper name={name}>

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
              {button &&
                <Button
                  target='_blank'
                  href='http://chng.it/V5n7bdmj'
                  primary
                  
                >
                  {button}
                </Button>

              }
            </TextContainer>

          </SectionWrapper>
        )}
    </>
  )
}
