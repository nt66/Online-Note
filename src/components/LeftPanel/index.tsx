import React, { useContext } from 'react'
import { NoteContext } from '../../store/context'
import HoldBar from '../HoldBar'
import UserHander from '../UserHander'
import Search from '../Search'
import DocPanelList from '../DocPanelList'
import './index.less'

const LeftPanel = () => {
  const { shrinkPanel } = useContext(NoteContext)

  const getPanelStyle = () => {
    return {
      width: '270px',
      maxWidth: '270px',
      userSelect: 'none',
      transform: `translateX(${shrinkPanel ? '-270px' : '0px'})`,
    }
  }

  return (
    <div className='panel-container' style={{ zIndex: `${shrinkPanel ? 10 : 100}` }}>
      <div className='panel-wrap' style={getPanelStyle()}>
        <UserHander />
        <Search />
        <DocPanelList />
      </div>
      <HoldBar />
    </div>
  )
}

export default React.memo(LeftPanel)
