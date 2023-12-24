import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

// 初始化文档
function createInitData() {
  return {
    id: uuidv4(),
    title: "无标题",
    date: moment().format('YYYY-MM-DD HH:mm:ss'),
    markdown: false,
    content: ""
  }
}

function debounce<T>(fn: T, delay: number): () => void {
  let timer: ReturnType<typeof setTimeout> | null;
  return function (): void {
    const args: any[] = Array.prototype.map.call(arguments, val => val);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      typeof fn === 'function' && fn.apply(null, args);
      clearTimeout(timer as number);
    }, delay > 0 ? delay : 100);
  };
}

function removeHtmlTags(input: string): string {
  return input.replace(/<\/?[^>]+(>|$)/g, '');
}


export {
  createInitData,
  debounce,
  removeHtmlTags
}