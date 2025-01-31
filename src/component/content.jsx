import React from 'react'

import Top from './content/top'
import Testimonials from './content/testimonials'
import Tutorials from './content/tutorials'
import FQA from './content/FQA'



export default function content() {
  return (
    <div>
      <Top/>
      <Testimonials/>
      <Tutorials/>
      <FQA/>
    </div>
  )
}
