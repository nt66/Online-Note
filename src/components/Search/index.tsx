import React, { useState } from 'react'
import { ReactSVG } from 'react-svg'
import search from '../../assets/search.svg';
import './index.less'

function Search() {
  return (
    <>
      <div className='search-wrapper'>
        <div className='search-main'>
          <div className='search-container'>
            <ReactSVG src={search} />
            <input type="text" placeholder="搜索 全部文档" className='search-input'  />
          </div>
        </div>
      </div>
      <div className='dividing-line'></div>
    </>
  )
}

export default React.memo(Search)
