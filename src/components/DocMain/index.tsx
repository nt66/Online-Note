import React, { useState, useEffect, useContext } from 'react'
import { ReactSVG } from 'react-svg'
import DocTools from '../DocTools'
import DocPage from '../DocPage'
import MarkdownPage from '../MarkDownPage'
import { NoteContext } from '../../store/context'
import DocDataType from '../../data/type'
import grown from '../../assets/grown.svg'

import './index.less'

function DocMain() {
  const { docData, currentId, shrinkPanel, setShrink } = useContext(NoteContext)
  const [currentData, setCurrentData] = useState({} as DocDataType)

  // useEffect(()=>{
  //   updateCurrent(docData[docData?.length-1]?.id)
  // },[docData])

  useEffect(() => {
    const currentDocData = docData.filter((item: any) => item.id === currentId)
    setCurrentData(currentDocData[0] || {})
  }, [currentId])

  const getStyle = () => {
    return {
      marginLeft: `${shrinkPanel ? '0' : '270px'}`,
      overflow: 'hidden',
      zIndex: `${shrinkPanel ? '10' : 'auto'}`,
    }
  }

  return (
    <div className='doc-container' style={getStyle()}>
      {
        shrinkPanel && (
          <div className='doc-grown'>
            <button className='grown-btn' onClick={() =>setShrink()}>
              <ReactSVG src={grown} style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        )
      }
      <div className='doc-bg'>
        <DocTools currentData={currentData} />
        {currentData?.markdown ? <MarkdownPage /> : <DocPage />}
      </div>
    </div>
  )
}

export default React.memo(DocMain)