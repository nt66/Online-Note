import React,{ useContext } from 'react'
import { NoteContext } from '../../store/context'
import DocDataType from '../../data/type'
import note from '../../assets/note.svg'
import './index.less'

interface DocItemProps {
  key: number
  item: DocDataType
}

const DocItem: React.FC<DocItemProps> = ({ item }) => {
  const { updateCurrent, currentId } = useContext(NoteContext)
  const { title, id } = item
  return (
    <div className='doc-item-wrap'>
      <div className='doc-item' onClick={()=>updateCurrent(id)}>
        <div className='doc-item-selected' style={{backgroundColor:`${currentId === id?'#e9e9eb':'transparent'}`}}>
          <div className='item-row'>
            <img src={note} className='item-row-icon' />
            <div className='doc-title'>{title}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(DocItem)
