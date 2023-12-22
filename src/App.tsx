// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import LeftPanel from './components/LeftPanel';
import DocMain from './components/DocMain';
import './App.less'

function App() {
  return (
    <main className='app'>
      <LeftPanel />
      <DocMain />
    </main>
  )
}

export default App
