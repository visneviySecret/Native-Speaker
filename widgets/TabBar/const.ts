import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Ionicons from '@expo/vector-icons/Ionicons'

export const tabs = [
  {
    id: 'cards',
    label: 'Карточки',
    iconConfig: {
      iconType: 'material-community' as const,
      iconName: 'cards' as keyof typeof MaterialCommunityIcons.glyphMap,
    },
    href: '/cards',
  },
  {
    id: 'library',
    label: 'Библиотека',
    iconConfig: {
      iconType: 'material-community' as const,
      iconName: 'library' as keyof typeof MaterialCommunityIcons.glyphMap,
    },
    href: '/library',
    disabled: true,
  },
  {
    id: 'stats',
    label: 'Статистика',
    iconConfig: {
      iconType: 'material' as const,
      iconName: 'query-stats' as keyof typeof MaterialIcons.glyphMap,
    },
    href: '/stats',
    disabled: true,
  },
  {
    id: 'settings',
    label: 'Настройки',
    iconConfig: {
      iconType: 'ionicons' as const,
      iconName: 'settings' as keyof typeof Ionicons.glyphMap,
    },
    href: '/settings',
    disabled: true,
  },
]
