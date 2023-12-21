import React, { useState } from 'react'
import HoldBar from '../HoldBar';
import UserHander from '../UserHander';
import Search from '../Search';
import './index.less'

function LeftPanel() {
  return (
    <div className='panel-container'>
      <div className='panel-wrap' style={{width:'269px',maxWidth: '269px', userSelect: 'none'}}>
        <UserHander />
        <Search />
      </div>
      <HoldBar />
    </div>
  )
}

export default React.memo(LeftPanel)
