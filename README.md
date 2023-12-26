# Online Note - Vite React Project

This project was bootstrapped with [Vite](https://vitejs.dev/) and uses React for the frontend.

## Getting Started

1.Clone this repository:
  ```bash
    git clone https://github.com/your-username/Online-Note.git
  ```
2.Navigate to the project directory:
  ```bash
    cd Online-Note
  ```
3.Install dependencies:
  ```bash
    pnpm install
  ```
4.Start the development server:
  ```bash
    pnpm run dev
  ```

## Available Scripts
In the project directory, you can run:

- pnpm run dev: Start the development server.
- pnpm run build: Build the production-ready app in the dist directory.
- pnpm run serve: Preview the production build locally.
  
## Learn More
To learn more about Vite and React, check out the following resources:

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)

## Features
- 1.本应用是一款极简风格的文本编辑器工具，具有编辑文本和编写Markdown文档的功能
- 2.应用的左侧是文档列表，点击我的文档的+按钮，能新增文档
- 3.鼠标移动至文档会出现删除按钮
- 4.点击中间按钮可以隐藏文档栏panel，可增加右侧编辑区域
- 5.应用的右侧是文档的编辑窗口，顶部是工具栏目。左上角显示的是当前文本的模式（普通模式|markdown模式）。右上角是markdonw|普通文本，编辑模式的切换按钮
- 6.编辑模式切换按钮打开后，会立即对当前文本进行模式解析
- 7.在编辑区域内的顶部，是文档的标题编辑
- 8.在编辑区域内的中间，是文档的正文编辑
- 9.当处于markdown模式编辑时，鼠标移出正文编辑区域内，markdown就会被立即解析，此时是只读模式；鼠标点击解析的文本又会切换至编辑模式
