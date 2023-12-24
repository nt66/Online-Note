// import { useState, useContext } from 'react'
import LeftPanel from './components/LeftPanel'
import DocMain from './components/DocMain'
import { NoteProvider } from './store/context'

import './App.less'

function App() {
  
  const initData = [
    {
      id:"b46bd746-9dc4-44fd-bfa3-7c63c8772573",
      title:"欢迎使用",
      date:"2023-12-22",
      markdown:false,
      content:"欢迎使用我们最新的在线笔记服务！在这里，你可以轻松创建、编辑和组织你的个人或团队笔记。无论是制定计划、记录灵感，还是协作分享，我们都为你提供了强大而直观的工具。"
    }
  ]

  const NoteApp:any = localStorage.getItem('NoteApp')
  if(!NoteApp){
    localStorage.setItem('NoteApp',JSON.stringify(initData))
  }
  return (
    <NoteProvider>
      <main className='app'>
        <LeftPanel />
        <DocMain />
      </main>
    </NoteProvider>
  )
}

export default App
