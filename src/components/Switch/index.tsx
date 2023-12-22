import React from 'react'
import './index.less'

function Switch() {
  return (
    <label className='switch'>
      <input type='checkbox' />
      <span className="slider round" />
    </label>
  )
}

export default React.memo(Switch)
