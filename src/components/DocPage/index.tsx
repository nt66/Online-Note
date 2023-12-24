import React, { useContext, useMemo,useState } from 'react'
import { NoteContext } from '../../store/context'
import DocDataType from '../../data/type'

import './index.less'

interface DocPageProps {
  data: DocDataType
}

const DocPage:React.FC<DocPageProps> =({data}) => {
  const { docData, update, currentId } = useContext(NoteContext)
  const [content, setContent] = useState('');

  // document render
  const docResult = useMemo(()=>{
    return(<div>
      {
        data?.contentList?.map((item:any)=>{
          return(
            <div className='doc-page-p' contentEditable="true" spellCheck="true">
              {Object.values(item)}
            </div>
          )
        })
      }
    </div>)
  },[data])

  
  const handleInputChange = (event:any) => {
    const newContent = event.target.innerHTML
    setContent(newContent);
  }
  
  return (
    <div className='doc-wrap' style={{ marginRight: '1px', height: 'calc(100vh - 46px)' }}>
      <div style={{ height: 'auto' }}>
        <div className='doc-main'>
          <div className='doc-outliner'>
            <div className='doc-page'>
              <div className='doc-page-header'>
                <div 
                  className='doc-page-header-title' 
                  contentEditable="true"
                  spellCheck="true"
                  onInput={handleInputChange}
                  // dangerouslySetInnerHTML={{ __html: content }}
                  >
                  {data.title}
                </div>
              </div>
              {docResult}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(DocPage)
