# NoteHub - simple online note

This project was bootstrapped with [Vite](https://vitejs.dev/) and uses React for the frontend.

## ⌨️ Development

Clone & Install & Start:

```bash
git clone https://github.com/nt66/Online-Note.git
cd Online-Note
pnpm install
pnpm run dev
```

Open your browser and visit: [http://localhost:5173](http://localhost:5173)

## Build & deploy

You can run:

```bash
pnpm run build
pnpm run deploy
```

## ✨ Features

- 1.本应用是一款极简风格的文本编辑器工具，具有编辑文本和编写Markdown文档的功能
- 2.应用的左侧是文档列表，点击我的文档的+按钮，能新增文档
- 3.鼠标移动至文档会出现删除按钮,点击按钮可删除文档
- 4.中间按钮可隐藏文档栏panel，可增加右侧编辑区域
- 5.应用的右侧是文档的编辑窗口，顶部是工具栏目。左上角显示的是当前文本的模式（普通模式|markdown模式）。右上角是markdonw|普通文本，编辑模式的切换按钮
- 6.编辑模式切换按钮打开后，会立即对当前文本进行模式解析
- 7.编辑区域顶部，是文档的标题，修改内容后会实时同步至localstorage
- 8.编辑区域中间，是文档的正文，修改内容后会实时同步至localstorage
- 9.正文编辑区域为markdown模式编辑时，鼠标焦点移出区域，markdown会被立即解析。且此时是只读模式；鼠标点击解析的文本又会切换至编辑模式

## 🔗 Home Page

https://nt66.github.io/Online-Note

## Learn More

To learn more about Vite and React, check out the following resources:

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)