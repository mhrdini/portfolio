export const useI18nStore = defineStore('i18n', () => {
  const current = ref<'en' | 'ja'>('en')
  function toggle() {
    current.value = current.value === 'en' ? 'ja' : 'en'
  }
  return { current, toggle }
})
