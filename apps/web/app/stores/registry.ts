import type { WindowId } from './windows'

export const useRegistryStore = defineStore('registry', () => {
  const windows = ref<Map<WindowId, HTMLElement>>(new Map<WindowId, HTMLElement>())
  const icons = ref<Map<WindowId, HTMLElement>>(new Map<WindowId, HTMLElement>())

  function registerWindow(id: WindowId, el: HTMLElement) {
    windows.value.set(id, el)
  }
  function getWindow(id: WindowId) {
    return windows.value.get(id)
  }
  function unregisterWindow(id: WindowId) {
    windows.value.delete(id)
  }

  function registerIcon(id: WindowId, el: HTMLElement) {
    icons.value.set(id, el)
  }
  function getIcon(id: WindowId) {
    return icons.value.get(id)
  }
  function unregisterIcon(id: WindowId) {
    icons.value.delete(id)
  }

  return { windows, icons, registerWindow, getWindow, unregisterWindow, registerIcon, getIcon, unregisterIcon }
})
