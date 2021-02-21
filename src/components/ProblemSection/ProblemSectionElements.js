import styled from 'styled-components'
export const HealthVideo = styled.video`
  height: 300px;
  width: auto;
  margin-left: auto;
  margin-right: 40vh;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${props => !props.orient ? '60px' : 'auto'};
  height: 50vh;
  width: 50vh;
  margin-left: ${props => !props.orient ? 'auto' : '60px'};
  margin-top: auto;
  margin-bottom: 20vh;
`

export const Heading = styled.h3`
  margin: 0;
  margin-top: auto;
  font-size: 2rem;
`

export const Paragraph = styled.p`
  margin-top: 10;
  margin-bottom: auto;
  font-size: 1.5rem;
`