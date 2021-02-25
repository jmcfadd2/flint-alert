# Boil Water Alert
During certain situations public water, especially in Texas, becomes unsafe to consume out of the tap. This problem was placed on the national stage after a winter storm crippled many of Texas' public systems including water filtration.

This site and aims to enhance public awareness about a simple initiative that would help alert people more effectively when their tap water becomes non-potable.

Adding a smartphone notifications similar to the AMBER Alert notification that is currently in place will reduce the risk of citizens unknowingly drinking their tap water of after a boil water notice is enabled.

Hosted at https://www.bnwateralert.com/

## Codeshots
### Home Page Component

This is the home page which uses Media Queries to render the whether the media in content section should flipped or not. On mobile versions it looks better to be consistent with display the text first and then displaying the media

``` javascript
import React from 'react'
import ContentSection from '../components/ContentSection/ContentSection'

import Hero from '../components/hero/Hero'
import ProblemSection from '../components/ProblemSection/ProblemSection'
import useSimpleMatchMedia from 'react-simple-matchmedia'
import { textData } from '../components/textData'

export default function Home() {
  const matched = useSimpleMatchMedia('phone', 'tablet')
  return (
    <div>
      <div>
        <Hero />
        <ProblemSection />
        {textData.map((content, index) => (
          <ContentSection
            Animation={content.Animation}
            button={content.callToAction}
            // If not smaller screen size flip text & media
            flip={!matched && index % 2 === 0 ? true : false}
            heading={content.heading}
            text={content.text}
            name={content.name}
          />
        ))}



      </div>
    </div>
  )
}
```
### Content Section Component
The content section conditionally renders the text or media container  first depending on the value of the flip property. The home section flips on every even render in the map function.



```javascript
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
                  primary='true'
                  dark='true'
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
```