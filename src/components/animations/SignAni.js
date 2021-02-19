import React from 'react'
import Lottie from 'react-lottie'
import signData from '../../assets/signData.json'

export default function SignAni() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: signData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div>
      <Lottie 
        options={defaultOptions}
        width={'auto'}
        height={'auto'}
        speed={.65}
      />
    </div>
  )
}
