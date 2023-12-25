// import { useState, useContext } from 'react'
import LeftPanel from './components/LeftPanel'
import DocMain from './components/DocMain'
import { NoteProvider } from './store/context'

import './App.less'

function App() {
  
  const initData = [
    {
      id:'b46bd746-9dc4-44fd-bfa3-7c63c8772573',
      title:'欢迎使用',
      date:'2023-12-22',
      markdown:false,
      content:'<div>1.本应用是一款极简风格的文本编辑器，具有编辑普通文本以及<span style="font-family: -apple-system, BlinkMacSystemFont, &quot;PingFang SC&quot;, Helvetica, Arial, &quot;Microsoft YaHei&quot;, Heiti, sans-serif, SimSun, serif, SourceSansPro;">编辑和转化</span><span style="font-family: -apple-system, BlinkMacSystemFont, &quot;PingFang SC&quot;, Helvetica, Arial, &quot;Microsoft YaHei&quot;, Heiti, sans-serif, SimSun, serif, SourceSansPro;">Markdown文档等功能，可以对文档进行简单的增删改操作。</span></div><div>2.应用左侧是文档列表，点击我的文档的+按钮，能新增一个文档。</div><div>3.用户<span style="font-family: -apple-system, BlinkMacSystemFont, &quot;PingFang SC&quot;, Helvetica, Arial, &quot;Microsoft YaHei&quot;, Heiti, sans-serif, SimSun, serif, SourceSansPro;">移动</span><span style="font-family: -apple-system, BlinkMacSystemFont, &quot;PingFang SC&quot;, Helvetica, Arial, &quot;Microsoft YaHei&quot;, Heiti, sans-serif, SimSun, serif, SourceSansPro;">鼠标至列表中的某一文档，会出现删除按钮。</span></div><div>4.中间区域的箭头按钮可以隐藏文档列表栏，增加右侧编辑区域。</div><div>5.工具栏的左上角显示的是当前的编辑模式（普通模式 | markdown模式）。</div><div>6.工具栏的<span style="font-family: -apple-system, BlinkMacSystemFont, &quot;PingFang SC&quot;, Helvetica, Arial, &quot;Microsoft YaHei&quot;, Heiti, sans-serif, SimSun, serif, SourceSansPro;">右上角是markdown编辑模式、普通文本编辑模式的切换。</span></div><div>7.编辑区域的头部是文档的标题。</div><div>8.编辑区域的中间是文档的正文。</div><div>9.当处于markdown模式编辑时，鼠标移出正文编辑区域内，markdown就会被立即解析，此时是只读模式；鼠标点击解析的文本又会切换至编辑模式。</div><div>10.Enjoy it&nbsp; ^_^</div>'
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
