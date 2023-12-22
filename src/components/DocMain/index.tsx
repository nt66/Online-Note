import React, { useState } from 'react'
import DocTools from '../DocTools'
import './index.less'

function DocMain() {
  return (
    <div className='doc-container' style={{marginLeft: '269px', overflow: 'hidden', zIndex: 'auto'}}>
      <div className='doc-bg'>
        <DocTools />
        {/* <div className='doc-tools'>
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
        </div> */}
        <div className='doc-wrap' style={{marginRight: '1px', height: 'calc(100vh - 46px)'}}>
        </div>
      </div>
    </div>
  )
}

export default React.memo(DocMain)
