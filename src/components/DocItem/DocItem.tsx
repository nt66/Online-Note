import React, { useContext, useState } from 'react'
import { ReactSVG } from 'react-svg'
import { removeHtmlTags } from '../../utils/index'
import { NoteContext } from '../../store/context'
import DocDataType from '../../data/type'
import note from '../../assets/note.svg'
import del from '../../assets/del.svg'
import './DocItem.less'

interface DocItemProps {
  key: number
  item: DocDataType
}

const DocItem: React.FC<DocItemProps> = ({ item }) => {
  const { title, id } = item
  const { updateCurrent, currentId, remove } = useContext(NoteContext)
  const [isHover, setHover] = useState(false)
  return (
    <div className='doc-item-wrap'>
      <div className='doc-item'
        onClick={() => updateCurrent(id)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className='doc-item-selected' style={{ backgroundColor: `${currentId === id ? '#e9e9eb' : 'transparent'}` }}>
          <div className='item-row'>
            <img src={note} className='item-row-icon' />
            <div className='doc-title'>{removeHtmlTags(title)}</div>
            {isHover && (<button className='doc-delete' onClick={() => remove(id)} >
              <ReactSVG src={del} style={{ width: '20px', height: '20px' }} />
            </button>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(DocItem)