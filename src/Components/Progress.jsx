import React from 'react'
import './Contents.css'

export default function Progress({percent}) {
  return (
       <div className=' bar flex'>
          <div className='bar2' style={{width: `${percent}%`, backgroundColor: 'red',
              borderRadius: '10px'}}> </div>
          <div className='circle animate-bounce'>{percent}%</div>
       </div>
  )
}

