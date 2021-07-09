import { FC, useEffect } from 'react'
import { i18n } from '@lingui/core'

import { I18nProvider } from '@lingui/react'
import { defaultLocale, dynamicActivate } from './config'

const Provider: FC = ({ children }) => {
  useEffect(() => {
    dynamicActivate(defaultLocale)
  }, [])
  return <I18nProvider i18n={i18n}>{children}</I18nProvider>
}

export default Provider
