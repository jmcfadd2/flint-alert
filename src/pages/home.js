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
