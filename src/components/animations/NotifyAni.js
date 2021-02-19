import React from 'react'
import Lottie from 'react-lottie'
import notifyData from '../../assets/notifyData.json'

export default function NotifyAni() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notifyData,
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
