import React, { useContext } from 'react'
import { NoteContext } from '../../store/context'
import HoldBar from '../HoldBar'
import UserHander from '../UserHander'
import Search from '../Search'
import DocPanelList from '../DocPanelList'
import './index.less'

const LeftPanel = () => {
  const { shrinkPanel } = useContext(NoteContext)

  const getStyle = () => {
    return {
      width: '270px',
      maxWidth: '270px',
      transform: `translateX(${shrinkPanel ? '-270px' : '0px'})`,
    }
  }

  return (
    <div className='panel-container' style={getStyle()} >
      <div className='panel-wrap' >
        <UserHander />
        <Search />
        <DocPanelList />
      </div>
      <HoldBar />
    </div>
  )
}

export default React.memo(LeftPanel)
