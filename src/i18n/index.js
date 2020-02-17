import * as dicts from './messages'

export const DEFAULT_LANG = 'en'
export const LOCALES = {
  en: 'English',
  ru: 'Русский',
}

const translate = (string, dict) => dict[string] ?? string

const getDict = lang => dicts[lang] ?? {}

const getTranslateFunc = lang => {
  const dict = getDict(lang)
  return string => translate(string, dict)
}

export const defaultTranslate = getTranslateFunc(DEFAULT_LANG)
export default getTranslateFunc
