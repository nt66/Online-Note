// import { useState, useContext } from 'react'
import { Routes, Route } from "react-router-dom";
import LeftPanel from "./components/LeftPanel";
import DocMain from "./components/DocMain";
import GTMtest from "./components/GTMtest";
import { NoteProvider } from "./store/context";

import "./App.less";

function App() {
  const initData = [
    {
      id: "b46bd746-9dc4-44fd-bfa3-7c63c8772573",
      title: "欢迎使用",
      date: "2023-12-25",
      markdown: true,
      content:
        "<div># NoteHub - simple online note</div><div><br></div><div>This project was bootstrapped with [Vite](https://vitejs.dev/) and uses React for the frontend.</div><div><br></div><div>## ⌨️ Development</div><div><br></div><div>Clone &amp; Install &amp; Start:</div><div><br></div><div>```bash</div><div>git clone https://github.com/nt66/Online-Note.git</div><div>cd Online-Note</div><div>pnpm install</div><div>pnpm run dev</div><div>```</div><div><br></div><div>Open your browser and visit: [http://localhost:5173](http://localhost:5173)</div><div><br></div><div>## Build &amp; deploy</div><div><br></div><div>You can run:</div><div><br></div><div>```bash</div><div>pnpm run build</div><div>pnpm run deploy</div><div>```</div><div><br></div><div>## ✨ Features</div><div><br></div><div>- 1.本应用是一款极简风格的文本编辑器工具，具有编辑文本和编写Markdown文档的功能</div><div>- 2.应用的左侧是文档列表，点击我的文档的+按钮，能新增文档</div><div>- 3.鼠标移动至文档会出现删除按钮,点击按钮可删除文档</div><div>- 4.中间按钮可隐藏文档栏panel，可增加右侧编辑区域</div><div>- 5.应用的右侧是文档的编辑窗口，顶部是工具栏目。左上角显示的是当前文本的模式（普通模式|markdown模式）。右上角是markdonw|普通文本，编辑模式的切换按钮</div><div>- 6.编辑模式切换按钮打开后，会立即对当前文本进行模式解析</div><div>- 7.编辑区域顶部，是文档的标题，修改内容后会实时同步至localstorage</div><div>- 8.编辑区域中间，是文档的正文，修改内容后会实时同步至localstorage</div><div>- 9.正文编辑区域为markdown模式编辑时，鼠标焦点移出区域，markdown会被立即解析。且此时是只读模式；鼠标点击解析的文本又会切换至编辑模式</div><div><br></div><div>## Learn More</div><div><br></div><div>To learn more about Vite and React, check out the following resources:</div><div><br></div><div>- [Vite Documentation](https://vitejs.dev/)</div><div>- [React Documentation](https://reactjs.org/)</div>",
    },
  ];

  const NoteApp: any = localStorage.getItem("NoteApp");
  if (!NoteApp) {
    localStorage.setItem("NoteApp", JSON.stringify(initData));
  }
  return (
    <NoteProvider>
      <Routes>
        <Route
          path="/"
          element={
            <main className="app">
              <LeftPanel />
              <DocMain />
            </main>
          }
        />
        <Route path="/gtmtest" element={<GTMtest />} />
      </Routes>
    </NoteProvider>
  );
}

export default App;
