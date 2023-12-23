import React, { useState, useEffect, useContext } from 'react'
import DocTools from '../DocTools'
import DocPage from '../DocPage'
import { NoteContext } from '../../store/context'
import DocDataType from '../../data/type'

import './index.less'

function DocMain() {
  const [ currentData, setCurrentData ] = useState({} as DocDataType)
  const { docData, currentId } = useContext(NoteContext)
  
  useEffect(()=>{
    const currentDocData = docData.filter((item:any)=>item.id === currentId)
    setCurrentData(currentDocData[0]||{})
  },[currentId])
  
  return (
    <div className='doc-container' style={{marginLeft: '269px', overflow: 'hidden', zIndex: 'auto'}}>
      <div className='doc-bg'>
        <DocTools />
        <DocPage data={currentData} />
      </div>
    </div>
  )
}

export default React.memo(DocMain)
