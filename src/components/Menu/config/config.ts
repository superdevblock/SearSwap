import { MenuItemsType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Earn'),
    href: '/',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/',
      },
    ],
  },
]

export default config
