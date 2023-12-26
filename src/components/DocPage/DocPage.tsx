import React, { useContext, useState, useEffect } from 'react'
// import ReactMarkdown from 'react-markdown';
import { debounce } from '../../utils'
import { NoteContext } from '../../store/context'
// import DocDataType from '../../data/type'

import './index.less'

interface DocPageProps {
  // data: DocDataType
  // currentData:DocDataType
}

const DocPage: React.FC<DocPageProps> = ({}) => {
  const { docData, update, currentId } = useContext(NoteContext)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    const currentDocData = docData?.filter((item: any) => item.id === currentId)
    setTitle(currentDocData[0]?.title)
    setContent(currentDocData[0]?.content)
  },[currentId])

  const handleTitleInputChange = debounce((event: any) => {
    const newContent = event.target.innerHTML
    update(currentId, {
      type: 'title',
      value: newContent
    })
  }, 300)

  const handleContentInputChange = debounce((event: any) => {
    const newContent = event.target.innerHTML
    update(currentId, {
      type: 'content',
      value: newContent,
    })
  }, 300)

  return (
    <div className='doc-wrap' style={{ marginRight: '1px', height: 'calc(100vh - 46px)' }}>
      <div style={{ height: 'auto' }}>
        <div className='doc-main'>
          <div className='doc-outliner'>
            <div className='doc-page'>
              <div className='doc-page-header'>
                <div
                  key={currentId}
                  className='doc-page-header-title'
                  contentEditable="true"
                  spellCheck="true"
                  onInput={handleTitleInputChange}
                  dangerouslySetInnerHTML={{ __html: title }}
                >
                </div>
              </div>
              <div
                key={currentId}
                className='doc-page-p'
                contentEditable="true"
                spellCheck="true"
                onInput={handleContentInputChange}
                dangerouslySetInnerHTML={{ __html: content }}
              >
              </div>
              {/* <div
                key={currentId}
                className='doc-page-md'
                contentEditable="true"
                spellCheck="true"
                onInput={handleContentInputChange}
                // dangerouslySetInnerHTML={{ __html: content }}
              >
                <ReactMarkdown>{content}</ReactMarkdown>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(DocPage)