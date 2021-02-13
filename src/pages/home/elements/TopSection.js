import React from 'react'
import styled from 'styled-components'
import colors from '../../../colors'
import FaucetAnimation from './FaucetAnimation'

export default function Section() {
  const TopSection = styled.section`
    background-color: ${colors.background};
    padding-top: 10vh;
    height: 60vh;
    display: flex;
  `
  const OpeningText = styled.p`
    margin-left: auto;
    
    width: 30vh;
    color: white;

  `
  const AnimationContainer = styled.div`
    
    margin-right: auto;
    width: 30vh;
    height: 30vh;
    border-radius: 30vh;
    background-color: white;
    display:flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  `
  return (
    <TopSection>
      <OpeningText>
        This is an example paragraph that I hope will work for this project bbut I don't know if I will be able to complete it on time.
      </OpeningText>
      <AnimationContainer>
        <FaucetAnimation />
      </AnimationContainer>
    </TopSection>
  )
}
