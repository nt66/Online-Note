import React from 'react'
import Jobs from '../../assets/Jobs.png'
import './UserHander.less'

function UserHander() {
  return (
    <div className='user-header'>
      <img src={Jobs} className='user-header-img' />
      <div className='user-header-name'>Steve Jobs</div>
    </div>
  )
}

export default React.memo(UserHander)
