import React from 'react'
import Lottie from 'react-lottie'
import boilData from '../../assets/boilData.json'

export default function BoilAni() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: boilData,
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
