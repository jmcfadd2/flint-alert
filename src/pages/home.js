import React from 'react'
import ContentSection from '../components/ContentSection/ContentSection'

import Hero from '../components/hero/Hero'
import ProblemSection from '../components/ProblemSection/ProblemSection'

import { textData } from '../components/textData'

export default function Home() {

  return (
    <div>
      <div>
        <Hero />
        <ProblemSection />
        {textData.map((content, index) => (
          <ContentSection
            Animation={content.Animation}
            button={content.callToAction}
            flip={index % 2 === 0 ? true : false}
            heading={content.heading}
            text={content.text}
          />
        ))}



      </div>
    </div>
  )
}
