import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

// 初始化文档
function createInitData() {
  return {
    id: uuidv4(),
    title: "无标题",
    date: moment().format('YYYY-MM-DD HH:mm:ss'),
    markdown: false,
    content: '',
    // content: '# 标题一<div>## 标题二</div><div>### 标题三</div>'
  }
}

// 防抖
function debounce<T>(fn: T, delay: number): () => void {
  let timer: ReturnType<typeof setTimeout> | null
  return function (): void {
    const args: any[] = Array.prototype.map.call(arguments, val => val)
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      typeof fn === 'function' && fn.apply(null, args)
      clearTimeout(timer as number)
    }, delay > 0 ? delay : 100)
  }
}

// HTML标签过滤
function removeHtmlTags(input: string): string {
  return input.replace(/<\/?[^>]+(>|$)/g, '')
}

// 切标签
function splitStringByDiv(str: string): string[] {
  const divPattern = /<div>(.*?)<\/div>/g
  const firstDivPattern = /^(.*?)(<div>.*<\/div>)/
  const lastDivPattern = /(<div>.*<\/div>)(.*?)$/
  const matches: string[] = []
  const firstMatch = str?.match(firstDivPattern)
  const lastMatch = str?.match(lastDivPattern)
  let match: RegExpExecArray | null

  if (str === '') {
    return []
  }

  while ((match = divPattern.exec(str)) !== null) {
    matches.push(match[1])
  }
  if (firstMatch) {
    matches.unshift(firstMatch[1].trim())
  }

  if (lastMatch) {
    matches.push(lastMatch[2].trim())
  }

  if (matches.length === 0) {
    matches.push(str)
  }

  return matches
}

export {
  createInitData,
  debounce,
  removeHtmlTags,
  splitStringByDiv,
}