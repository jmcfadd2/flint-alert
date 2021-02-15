import React from 'react'
import Lottie from 'react-lottie'
import faucetData from '../../assets/faucetData.json'

export default function FaucetAni() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: faucetData,
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
