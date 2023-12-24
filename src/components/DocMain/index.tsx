import React, { useState, useEffect, useContext } from 'react'
import DocTools from '../DocTools'
import DocPage from '../DocPage'
import MarkdownPage from '../MarkDownPage'
import { NoteContext } from '../../store/context'
import DocDataType from '../../data/type'

import './index.less'

function DocMain() {
  const { docData, currentId, updateCurrent } = useContext(NoteContext)
  const [ currentData, setCurrentData ] = useState({} as DocDataType)

  // useEffect(()=>{
  //   updateCurrent(docData[docData?.length-1]?.id)
  // },[docData])

  useEffect(()=>{
    const currentDocData = docData.filter((item:any)=>item.id === currentId)
    setCurrentData(currentDocData[0]||{})
  },[currentId])
  
  return (
    <div className='doc-container' style={{marginLeft: '269px', overflow: 'hidden', zIndex: 'auto'}}>
      <div className='doc-bg'>
        <DocTools />
        {/* <DocPage /> */}
        <MarkdownPage />
      </div>
    </div>
  )
}

export default React.memo(DocMain)
