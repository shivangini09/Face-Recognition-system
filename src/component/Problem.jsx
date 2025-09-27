import React from 'react'
import intro from '../Image/image2.png'
import supp_sketch from '../Image/intro.png'
function Problem() {
  return (
    <div>
      <p className='header_Problem'>The Pipeline</p>
      <img src={intro} alt=""  className='pro_imag'/>
      
<p className='header_Problem'>Similarity Model</p>
      <img src={supp_sketch} alt=""  className='pro_imag'/>
      <p>Workflow.</p>
    </div>
  )
}

export default Problem
