import React from 'react'
import Lottie from 'react-lottie'
import faucetData from '../../../assets/faucetData.json'

export default function FaucetAnimation() {
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
        width={'20vh'}
        height={'20vh'}
        speed={.65}
      />
    </div>
  )
}
