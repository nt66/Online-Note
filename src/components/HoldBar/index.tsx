import { useState } from 'react'
import leftArrow from '../../assets/leftArrow.svg';
import { ReactSVG } from 'react-svg'
import './index.less'

function HoldBar() {
  return (
    <div className='bar-wrap'>
      <div className='bar-hover'>
        <button className="arrow-button"> 
          <ReactSVG src={leftArrow} style={{fill:'#9D9DA6',width:20,height:20}} />
        </button>
      </div>
    </div>
  )
}

export default HoldBar
