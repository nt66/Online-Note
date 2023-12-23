import React, { useContext, useMemo } from 'react'
import { NoteContext } from '../../store/context'
import { ReactSVG } from 'react-svg'
import DocItem from '../DocItem'
import home from '../../assets/home.svg'
import add from '../../assets/add.svg'

import './index.less'

function DocPanelList() {
  const { docData, create, remove } = useContext(NoteContext)
  // 文档列表
  const docItemResult = useMemo(()=>{
      return(
        <div className='doc-views' style={{height:'600px'}} >
          {
            docData.map((item:any,index:number)=>{
              return(
                <DocItem key={index} item={item} />
              )
            })
          }
        </div>
      )
  },[docData])

  return (
    <div className='list-container'>
      <div className='my-doc-header'>
        <a className='my-doc-header-bg'>
          <ReactSVG src={home} style={{width:'20px',height:'20px', marginRight:'8px'}} />
          <div className='mydoc-title'>我的文档</div>
          <button className='add-btn' onClick={()=>create()}>
            <ReactSVG src={add} style={{width:'16px',height:'16px'}} />
          </button>
        </a>
      </div>
      <div style={{height:'700px', overflow:'hidden'}}>
        {docItemResult}
      </div>
    </div>
  )
}

export default React.memo(DocPanelList)
