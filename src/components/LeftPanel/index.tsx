import React, { useContext } from 'react'
import { NoteContext } from '../../store/context'
import HoldBar from '../HoldBar'
import UserHander from '../UserHander'
import Search from '../Search'
import DocPanelList from '../DocPanelList'

import './index.less'

function LeftPanel() {
  const { docData } = useContext(NoteContext);
  // console.log('docData', docData);
  return (
    <div className='panel-container'>
      <div className='panel-wrap' style={{ width: '269px', maxWidth: '269px', userSelect: 'none' }}>
        <UserHander />
        <Search />
        <DocPanelList />
      </div>
      <HoldBar />
    </div>
  )
}

export default React.memo(LeftPanel)
