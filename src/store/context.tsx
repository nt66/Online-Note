import React, { createContext, useState, ReactNode } from 'react'
import { createInitData } from '../utils/index'

interface NoteContextProps {
  docData: any[]
  currentId:string
  create: () => void
  remove: () => void
  update: () => void
  updateCurrent:(id:string) => void
}

interface NoteProviderProps {
  children: ReactNode
}

const NoteContext = createContext({} as NoteContextProps)

const initData = [
  {
    id:"b46bd746-9dc4-44fd-bfa3-7c63c8772573",
    title:"欢迎使用",
    date:"2023-12-22",
    markdown:false,
    contentList:[{"b46bd746-9dc4-44fd-bfa3-7c8763332103":"欢迎使用 new note app!"}]
  }
]

const NoteProvider: React.FC<NoteProviderProps> = ({ children }) => {
  const [docData, setDocData] = useState(initData)
  const [currentId, setCurrentId] = useState(initData[0]?.id)

  // 添加
  const create = () => {
    const newDocData =createInitData()
    setDocData([...docData,newDocData])
    setCurrentId(newDocData.id)
  }

  const updateCurrent = (id:string)=>{
    setCurrentId(id)
  }

  // 删除
  const remove = () => {

  }

  // 更新
  const update = () => {
    // setCount((prevCount) => prevCount - 1)
  }

  const contextValue: NoteContextProps = {
    docData,
    currentId,
    create,
    remove,
    update,
    updateCurrent,
  }
  return (<NoteContext.Provider value={contextValue} > { children } </NoteContext.Provider>)
}

export {
  NoteContext,
  NoteProvider
} 
