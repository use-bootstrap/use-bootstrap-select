export function arrayify(value: string | string[]) {
  return Array.isArray(value) ? value : [value]
}

export function wrapFirstWord(word: string, string: string): string {
  if (word === '') {
    return string
  }
  const index: number = string.toLowerCase().indexOf(word.toLowerCase())
  if (index !== -1) {
    const wrappedWord: string = `<u>${string.slice(index, index + word.length)}</u>`
    return string.slice(0, index) + wrappedWord + string.slice(index + word.length)
  }
  else {
    return string
  }
}

export function filter<T>(data: T[]): T[] {
  return data.filter(i => (i as any).value !== '')
}
