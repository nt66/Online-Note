import React, { createContext, useState, ReactNode } from 'react'
import DocDataType from '../data/type'
import { createInitData } from '../utils/index'

interface NoteContextProps {
  docData: any[]
  currentId: string
  shrinkPanel: boolean
  panelWidth: number
  create: () => void
  remove: (id: string) => void
  update: (id: string, content: any) => void
  updateCurrent: (id: string) => void
  setShrink: () => void
  updatePanelWidth: (deltaX: number) => void
}

interface NoteProviderProps {
  children: ReactNode
}

const NoteContext = createContext({} as NoteContextProps)

const NoteProvider: React.FC<NoteProviderProps> = ({ children }) => {
  const NoteApp: string | null = localStorage.getItem('NoteApp') as string
  const [docData, setDocData] = useState(JSON.parse(NoteApp) || [])
  const [currentId, setCurrentId] = useState(JSON.parse(NoteApp)[0]?.id)
  const [shrinkPanel, setShrinkPanel] = useState(false)
  const [panelWidth, setPanelWidth] = useState(270)

  // 添加data
  const create = () => {
    const newDocData = createInitData()
    setDocData([...docData, newDocData])
    setTimeout(() => {
      setCurrentId(newDocData.id)
    }, 100)

    localStorage.setItem('NoteApp', JSON.stringify([...docData, newDocData]))
  }

  // 删除data
  const remove = (id: string) => {
    const newDocData = docData.filter((item: DocDataType) => item.id !== id)
    setDocData(newDocData)

    setTimeout(() => {
      setCurrentId(newDocData[newDocData.length - 1]?.id)
    }, 100)

    localStorage.setItem('NoteApp', JSON.stringify(newDocData))
  }

  // 更新data
  const update = (id: string, content: any) => {
    const { type, value } = content
    const newDocData = docData.map((item: any) => {
      if (item.id === id) {
        item[type] = value
      }
      return item
    })
    setDocData(newDocData)
    localStorage.setItem('NoteApp', JSON.stringify(newDocData))
  }

  // 更新id
  const updateCurrent = (id: string) => {
    setCurrentId(id)
  }

  // 是否收缩
  const setShrink = () => {
    setShrinkPanel(!shrinkPanel)
  }

  // 设置panelwidth
  const updatePanelWidth = (deltaX: number) => {
    let newWidth = panelWidth + deltaX
    if (newWidth < 260) {
      newWidth = 260
    }
    if (newWidth > 500) {
      newWidth = 500
    }
    setPanelWidth(() => newWidth)
  }

  const contextValue: NoteContextProps = {
    docData,
    currentId,
    shrinkPanel,
    panelWidth,
    create,
    remove,
    update,
    updateCurrent,
    setShrink,
    updatePanelWidth,
  }
  return (<NoteContext.Provider value={contextValue} > {children} </NoteContext.Provider>)
}

export {
  NoteContext,
  NoteProvider
}