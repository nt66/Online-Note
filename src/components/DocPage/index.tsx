import React, { useContext, useMemo, useState, useEffect } from 'react'
import { debounce } from '../../utils/index'
import { NoteContext } from '../../store/context'
import DocDataType from '../../data/type'

import './index.less'

interface DocPageProps {
  // data: DocDataType
}

const DocPage: React.FC<DocPageProps> = ({ }) => {
  const { docData, update, currentId } = useContext(NoteContext)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    const currentDocData = docData?.filter((item: any) => item.id === currentId)
    console.log('currentDocData',currentDocData)
    setTitle(currentDocData[0]?.title)
    setContent(currentDocData[0]?.content)
  }, [currentId])

  const handleTitleInputChange = debounce((event: any) => {
    const newContent = event.target.innerHTML
    // setTitle(newContent)
    update(currentId, {
      type: 'title',
      value: newContent
    })
  }, 300)

  const handleContentInputChange = debounce((event: any) => {
    const newContent = event.target.innerHTML
    // setContent(newContent)
    update(currentId, {
      type: 'content',
      value: newContent,
    })
  }, 300)
  console.log('title99:',title);
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
                  onInput={handleTitleInputChange}
                  dangerouslySetInnerHTML={{ __html: title }}
                >
                </div>
              </div>
              <div
                className='doc-page-p'
                contentEditable="true"
                spellCheck="true"
                onInput={handleContentInputChange}
                dangerouslySetInnerHTML={{ __html: content }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(DocPage)