export const setLocal = (key: string, val: any) => {
  if (typeof val === 'object') {
    localStorage.setItem(key, JSON.stringify(val))
  } else {
    localStorage.setItem(key, val)
  }
}

export const getLocal = (key: string) => {
  let valStr = localStorage.getItem(key)
  if (valStr) {
    return typeof valStr === 'object' ? JSON.parse(valStr) : valStr
  }
  return null
}

export const clearLocal = (key: string) => {
  localStorage.removeItem(key)
}
