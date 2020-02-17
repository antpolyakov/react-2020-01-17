import {DEFAULT_LANG, defaultTranslate, LOCALES} from '../i18n'
import {createContext} from 'react'

const I18nContext = createContext({
  lang: DEFAULT_LANG,
  translate: defaultTranslate,
  locales: LOCALES,
})

export default I18nContext
