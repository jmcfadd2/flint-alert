import React, { useState } from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import Video from '../../assets/water.mp4'
import { Button } from '../button/ButtonElement';



export default function Hero() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1> Clean Water Is a Human Right </HeroH1>
        <HeroP>
          Help protect at risk communities from being exposed to poor quality water
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='contact'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Sign the Petition {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}