import React from 'react'
import './styles.css'
import DataNotFound from '../../assets/lotties/no-data.json'
import Lottie from 'lottie-react';

export default function HomePage() {
  return (
    <div className='container'>
      <Lottie animationData={DataNotFound} loop={true} />
    </div>
  )
}
