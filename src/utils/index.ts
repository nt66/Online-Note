import { v4 as uuidv4 } from 'uuid'

// 初始化文档
function createInitData() {
  return {
    id: uuidv4(),
    title: "无标题",
    date:  formatDateTime(new Date()), // moment().format('YYYY-MM-DD HH:mm:ss'),
    markdown: false,
    content: '',
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

// 切html字符串
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

// 提取内容
function extractContentFromInnerHtml(input:string) {
  const resultArray = []
  const divContentRegex = /<div>(.*?)<\/div>/g
  let match;
  let lastIndex = 0;

  while ((match = divContentRegex.exec(input)) !== null) {
    const nonDivContent = input.substring(lastIndex, match.index)
    if (nonDivContent.trim() !== '') {
      resultArray.push(nonDivContent.trim())
    }

    const divContent = match[1]
    if (divContent.trim() !== '') {
      resultArray.push(divContent.trim())
    }

    lastIndex = match.index + match[0].length
  }

  const lastNonDivContent = input.substring(lastIndex)
  if (lastNonDivContent.trim() !== '') {
    resultArray.push(lastNonDivContent.trim())
  }
  return resultArray
}

// 日期格式化
function formatDateTime(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

export {
  createInitData,
  debounce,
  removeHtmlTags,
  splitStringByDiv,
  extractContentFromInnerHtml,
}