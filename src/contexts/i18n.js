import {DEFAULT_LANG, defaultTranslate} from '../i18n'
import {createContext} from 'react'

const I18nContext = createContext({
  lang: DEFAULT_LANG,
  translate: defaultTranslate,
})

export default I18nContext
