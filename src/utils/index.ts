import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

// 初始化文档
function createInitData() {
  return {
    id:uuidv4(),
    title:"无标题",
    date:moment().format('YYYY-MM-DD HH:mm:ss'),
    markdown:false,
    contentList:[]
  }
}

export {
  createInitData
}