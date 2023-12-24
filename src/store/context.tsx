import React, { createContext, useState, ReactNode } from 'react'
import { createInitData } from '../utils/index'

interface NoteContextProps {
  docData: any[]
  currentId: string
  create: () => void
  remove: (id: string) => void
  update: (id: string, content: any) => void
  updateCurrent: (id: string) => void
}

interface NoteProviderProps {
  children: ReactNode
}

const NoteContext = createContext({} as NoteContextProps)

const NoteProvider: React.FC<NoteProviderProps> = ({ children }) => {
  const NoteApp: string | null = localStorage.getItem('NoteApp') as string
  const [docData, setDocData] = useState(JSON.parse(NoteApp) || [])
  const [currentId, setCurrentId] = useState(JSON.parse(NoteApp)[0]?.id)
  // 添加
  const create = () => {
    const newDocData = createInitData()
    setDocData([...docData, newDocData])
    setTimeout(() => {
      setCurrentId(newDocData.id)
    },100)
    
    localStorage.setItem('NoteApp', JSON.stringify([...docData, newDocData]))
  }

  // 删除
  const remove = (id: string) => {
    const newDocData = docData.filter(item => item.id !== id)
    setDocData(newDocData)
    
    // 先这样写
    setTimeout(() => {
      setCurrentId(newDocData[newDocData.length - 1]?.id)
    }, 100)
    localStorage.setItem('NoteApp', JSON.stringify(newDocData))
  }

  // 更新
  const update = (id: string, content: any) => {
    const { type, value } = content
    const newDocData = docData.map(item=>{
      if(item.id === id){
        item[type] = value
      }
      return item
    })
    setDocData(newDocData)
    localStorage.setItem('NoteApp', JSON.stringify(newDocData))
  }

  // 更新当前id
  const updateCurrent = (id: string) => {
    setCurrentId(id)
  }

  const contextValue: NoteContextProps = {
    docData,
    currentId,
    create,
    remove,
    update,
    updateCurrent,
  }
  return (<NoteContext.Provider value={contextValue} > {children} </NoteContext.Provider>)
}

export {
  NoteContext,
  NoteProvider
}