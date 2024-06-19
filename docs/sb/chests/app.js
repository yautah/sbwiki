import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import './fonty.css'
import App from './App.vue'
import en from './locales/en.json'
import fr from './locales/fr.json'
import es from './locales/es.json'
import zh from './locales/zh.json'
import { version } from '../package.json'

window.version = version

const i18n = createI18n({
  locale: navigator.language || navigator.userLanguage,
  fallbackLocale: 'zh',
  messages: { en, fr, es, zh },
})

createApp(App)
  .use(i18n)
  .mount('#app')
