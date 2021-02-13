import React from 'react'
import Header from '../../components/header/Header'
import TopSection from './elements/TopSection'
import MidSection from './elements/MidSection'

export default function home() {
  return (
    <div>
      <div>
        <Header />
        <TopSection />
        <MidSection />

      </div>
    </div>
  )
}
