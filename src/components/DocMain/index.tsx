import React, { useState } from 'react'
import DocTools from '../DocTools'
import DocPage from '../DocPage'
import './index.less'

function DocMain() {
  return (
    <div className='doc-container' style={{marginLeft: '269px', overflow: 'hidden', zIndex: 'auto'}}>
      <div className='doc-bg'>
        <DocTools />
        <DocPage />
      </div>
    </div>
  )
}

export default React.memo(DocMain)
