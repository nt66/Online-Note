import React, { useContext, useState, useEffect, Fragment, useRef } from 'react'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { debounce, extractContentFromInnerHtml } from '../../utils'
import { NoteContext } from '../../store/context'
// import DocDataType from '../../data/type'

import './index.less'

interface DocPageProps {
  // data: DocDataType
  // currentData:DocDataType
}

const MarkDownPage: React.FC<DocPageProps> = ({ }) => {
  const { docData, update, currentId } = useContext(NoteContext)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [editing, setEditing] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!editing) {
      const currentDocData = docData?.filter((item: any) => item.id === currentId)
      setTitle(currentDocData[0]?.title)
      setContent(currentDocData[0]?.content)
    }
  }, [currentId, editing])

  useEffect(() => {
    if (contentRef.current && editing) {
      contentRef.current.focus()

      const selection = window.getSelection()
      const range = document.createRange()

      range.selectNodeContents(contentRef.current)
      range.collapse(false)
      selection?.removeAllRanges()
      selection?.addRange(range)
    }
  }, [contentRef, editing])


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
                  key={`h${currentId}`}
                  className='doc-page-header-title'
                  contentEditable="true"
                  spellCheck="true"
                  onInput={handleTitleInputChange}
                  dangerouslySetInnerHTML={{ __html: title }}
                >
                </div>
              </div>
              {
                editing ? (
                  <div
                    ref={contentRef}
                    key={`p${currentId}`}
                    className='doc-page-p'
                    contentEditable="true"
                    onInput={handleContentInputChange}
                    onBlur={() => setEditing(false)}
                    dangerouslySetInnerHTML={{ __html: content }}
                  >
                  </div>) : (
                  <div
                    key={`m${currentId}`}
                    className='doc-page-md'
                    onClick={() => setEditing(true)}
                  >
                    {
                      (extractContentFromInnerHtml(content))?.map((item, index: number) => {
                        return (
                          <Fragment key={index}>
                            <ReactMarkdown
                              rehypePlugins={[rehypeRaw]}
                              remarkPlugins={[remarkGfm]}
                            >
                              {item}
                            </ReactMarkdown>
                          </Fragment>
                        )
                      })
                    }
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(MarkDownPage)

{/* <div><span style="font-family: -apple-system, BlinkMacSystemFont, &quot;PingFang SC&quot;, Helvetica, Arial, &quot;Microsoft YaHei&quot;, Heiti, sans-serif, SimSun, serif, SourceSansPro;">## 第一章：红岸基地</span></div>
  <div>在很久很久以前</div>
  <div>### 有个名叫红岸的基地</div> */}