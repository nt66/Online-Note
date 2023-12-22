import React from 'react'
import note from '../../assets/note.svg'
import './index.less'

function DocItem() {
  return (
    <div className='doc-item-wrap'>
      <div className='doc-item'> 
        <div className='item-row'>
          <img src={note} className='item-row-icon' />
          <div className='doc-title'>今日计划</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(DocItem)
