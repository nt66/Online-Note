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
      contentList:[{"b46bd746-9dc4-44fd-bfa3-7c8763332103":"欢迎使用 new note app!"}]
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
