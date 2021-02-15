import React, { useState } from 'react'
import ContentSection from '../../components/ContentSection/ContentSection'
import BoilAni from '../../components/animations/BoilAni'
import FaucetAni from '../../components/animations/FaucetAni'
import Hero from '../../components/hero/Hero'
import ProblemSection from '../../components/ProblemSection/ProblemSection'

export default function Home() {
  const secondHeading = 'The Solution'
  const secondText = 'Establish Boil Water notifications as a part of the Public Safety Alert '
  
  return (
    <div>
      <div>
        <Hero />
        <ProblemSection />
        <ContentSection 
          heading={secondHeading} 
          text={secondText}
          Animation={<BoilAni />}
        />
        <ContentSection 
          heading={secondHeading} 
          text={secondText}
          Animation={<FaucetAni />}
        />
      </div>
    </div>
  )
}
