// import { useState, useContext } from 'react'
import LeftPanel from './components/LeftPanel'
import DocMain from './components/DocMain'
import { NoteProvider } from './store/context'

import './App.less'

function App() {
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
