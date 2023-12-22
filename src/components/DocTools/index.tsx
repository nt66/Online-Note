import React, { useState } from 'react'
import ToolTip from '../ToolTip'
import { ReactSVG } from 'react-svg'
import bold from '../../assets/bold.svg'
import italice from '../../assets/italice.svg'
import underline from '../../assets/underline.svg'
import h1 from '../../assets/h1.svg'
import h2 from '../../assets/h2.svg'
import h3 from '../../assets/h3.svg'
import './index.less'


function DocTools() {
  return (<div className='doc-tools'>
  <header className='doc-header-wrap'>
    <ToolTip text="粗体">
      <button className='btn-bg' >
        <ReactSVG src={bold} style={{width:'20px',height:'20px'}} />
      </button>
    </ToolTip>
    <button className='btn-bg'>
      <ReactSVG src={italice} style={{width:'20px',height:'20px'}} />
    </button>
    <button className='btn-bg'>
      <ReactSVG src={underline} style={{width:'20px',height:'20px'}} />
    </button>
    <button className='btn-bg'>
      <ReactSVG src={h1} style={{width:'20px',height:'20px'}} />
    </button>
    <button className='btn-bg'>
      <ReactSVG src={h2} style={{width:'20px',height:'20px'}} />
    </button>
    <button className='btn-bg'>
      <ReactSVG src={h3} style={{width:'20px',height:'20px'}} />
    </button>
  </header>
</div>)
}


export default React.memo(DocTools)
