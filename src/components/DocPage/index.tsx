import React, { useState } from 'react'
import './index.less'

function DocPage() {
  return (
    <div className='doc-wrap' style={{ marginRight: '1px', height: 'calc(100vh - 46px)' }}>
      <div style={{ height: 'auto' }}>
        <div className='doc-main'>
          <div className='doc-outliner'>
            <div className='doc-page'>
              <div className='doc-page-header'>
                <div className='doc-page-header-title' contenteditable="true" spellcheck="true" autocapitalize="off">
                </div>
              </div>
              <div className='doc-page-p' contenteditable="true">
                <span>今日计划阿萨德阿萨的阿萨德</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(DocPage)
