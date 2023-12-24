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
    setCurrentId(newDocData.id)
    localStorage.setItem('NoteApp', JSON.stringify([...docData, newDocData]))
  }

  const updateCurrent = (id: string) => {
    setCurrentId(id)
  }

  // 删除
  const remove = (id: string) => {
    const newDocData = docData.filter(item => item.id !== id)
    setDocData(newDocData)
    setTimeout(() => {
      setCurrentId(newDocData[newDocData.length - 1]?.id)
    }, 200)
    localStorage.setItem('NoteApp', JSON.stringify(newDocData))
  }

  // 更新
  const update = (id: string, content: any) => {
    console.log(id, content.title)
    // const newDocData = docData.map(item=>{
    //   if(item.id === id){
    //     item.title = content.title
    //   }
    //   return item
    // })
    // setDocData(newDocData)
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