import React from 'react'
import { ReactSVG } from 'react-svg'
import DocItem from '../DocItem'
import home from '../../assets/home.svg'
import add from '../../assets/add.svg'
import './index.less'

function DocPanelList() {
  return (
    <div className='list-container'>
      <div className='my-doc-header'>
        <a href='javascript:void(0)' className='my-doc-header-bg' >
          <ReactSVG src={home} style={{width:'20px',height:'20px', marginRight:'8px'}} />
          <div className='mydoc-title'>我的文档</div>
          <button className='add-btn'>
            <ReactSVG src={add} style={{width:'16px',height:'16px'}} />
          </button>
        </a>
      </div>
      <div style={{height:'700px', overflow:'hidden'}}>
        <div className='doc-views' style={{height:'600px'}} >
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
          <DocItem />
        </div>
      </div>
    </div>
  )
}

export default React.memo(DocPanelList)
