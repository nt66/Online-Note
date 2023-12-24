import React, { useContext, useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { debounce, splitStringByDiv, extractDivContent } from '../../utils'
import { NoteContext } from '../../store/context'
import DocDataType from '../../data/type'

import './index.less'

interface DocPageProps {
  // data: DocDataType
  // currentData:DocDataType
}

const MarkDownPage: React.FC<DocPageProps> = ({ }) => {
  const { docData, update, currentId } = useContext(NoteContext)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  // const markdownText = `# Hello, React Markdown!`

  useEffect(() => {
    const currentDocData = docData?.filter((item: any) => item.id === currentId)
    setTitle(currentDocData[0]?.title)
    setContent(currentDocData[0]?.content)
  }, [currentId])

  const handleTitleInputChange = debounce((event: any) => {
    const newContent = event.target.innerHTML
    update(currentId, {
      type: 'title',
      value: newContent
    })
  }, 300)

  const handleContentInputChange = debounce((event: any) => {
    const newContent = event.target.innerHTML
    // setContent(event.target.innerText)
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
              <div
                key={`p${currentId}`}
                className='doc-page-p'
                contentEditable="true"
                onInput={handleContentInputChange}
                dangerouslySetInnerHTML={{ __html: content }}
              >
              </div>
              <div
                key={`m${currentId}`}
                className='doc-page-md'
              >
                --mk--
                {
                  (splitStringByDiv(content))?.map((item) => {
                    return (
                      <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        remarkPlugins={[remarkGfm]}
                      >
                        {item}
                      </ReactMarkdown>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(MarkDownPage)