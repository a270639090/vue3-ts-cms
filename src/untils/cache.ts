class LocalCache {
  setLocal(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getLocal(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteLocal(key: string) {
    window.localStorage.removeItem(key)
  }

  clearLocal() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
