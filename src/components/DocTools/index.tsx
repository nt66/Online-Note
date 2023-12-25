import React, { useState, useContext } from 'react'
import { NoteContext } from '../../store/context'
import ToolTip from '../ToolTip'
import Switch from '../Switch'
import { ReactSVG } from 'react-svg'
import bold from '../../assets/bold.svg'
import italice from '../../assets/italice.svg'
import underline from '../../assets/underline.svg'
import h1 from '../../assets/h1.svg'
import h2 from '../../assets/h2.svg'
import h3 from '../../assets/h3.svg'
import Markdown from '../../assets/Markdown.svg'
import './index.less'

interface DocToolsPros {
  currentData:any
}

const DocTools: React.FC<DocToolsPros>=({currentData})=> {
  const {currentId, update } = useContext(NoteContext)

  // markdown开关
  const handleChange =(isChecked:boolean)=>{
    console.log('markdown Checked:',isChecked)
    update(currentId, {
      type:'markdown',
      value:isChecked,
    })
  }

  return (
    <div className='doc-tools'>
      <header className='doc-header-wrap'>
        <ToolTip text="粗体">
          <button className='btn-bg' >
            <ReactSVG src={bold} style={{ width: '20px', height: '20px' }} />
          </button>
        </ToolTip>
        <button className='btn-bg'>
          <ReactSVG src={italice} style={{ width: '20px', height: '20px' }} />
        </button>
        <button className='btn-bg'>
          <ReactSVG src={underline} style={{ width: '20px', height: '20px' }} />
        </button>
        <button className='btn-bg'>
          <ReactSVG src={h1} style={{ width: '20px', height: '20px' }} />
        </button>
        <button className='btn-bg'>
          <ReactSVG src={h2} style={{ width: '20px', height: '20px' }} />
        </button>
        <button className='btn-bg'>
          <ReactSVG src={h3} style={{ width: '20px', height: '20px' }} />
        </button>
        <div className='switch-md'>
          <ReactSVG 
            src={Markdown} 
            style={{width:'20px',height:'20px',marginRight:'10px'}} 
          />
          <Switch onChange={handleChange} defaultValue={currentData?.markdown} />
        </div>
      </header>

    </div>
  )
}


export default React.memo(DocTools)
