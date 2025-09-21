import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

interface IoniconsTab {
  iconType: 'ionicons'
  iconName: keyof typeof Ionicons.glyphMap
}

interface MaterialCommunityTab {
  iconType: 'material-community'
  iconName: keyof typeof MaterialCommunityIcons.glyphMap
}

interface MaterialIcons {
  iconType: 'material'
  iconName: keyof typeof MaterialIcons.glyphMap
}

type IconConfig = IoniconsTab | MaterialCommunityTab | MaterialIcons

interface TabItemProps {
  id: string
  label: string
  iconConfig: IconConfig
  isActive: boolean
  href: string
  disabled?: boolean
}

function TabItem({
  iconConfig,
  isActive,
  href,
  disabled = false,
}: TabItemProps) {
  const renderIcon = () => {
    let iconColor = '#9CA3AF'

    if (disabled) {
      iconColor = '#D1D5DB'
    } else if (isActive) {
      iconColor = '#4A90E2'
    }

    if (iconConfig.iconType === 'material-community') {
      return (
        <MaterialCommunityIcons
          name={iconConfig.iconName}
          size={24}
          color={iconColor}
          style={styles.tabIcon}
        />
      )
    } else if (iconConfig.iconType === 'material') {
      return (
        <MaterialIcons
          name={iconConfig.iconName}
          size={24}
          color={iconColor}
          style={styles.tabIcon}
        />
      )
    } else {
      return (
        <Ionicons
          name={iconConfig.iconName}
          size={24}
          color={iconColor}
          style={styles.tabIcon}
        />
      )
    }
  }

  if (disabled) {
    return (
      <TouchableOpacity
        style={[styles.tabItem, styles.disabledTab]}
        activeOpacity={1}
        disabled={true}
      >
        {renderIcon()}
      </TouchableOpacity>
    )
  }

  return (
    <Link href={href} asChild>
      <TouchableOpacity style={styles.tabItem} activeOpacity={0.7}>
        {renderIcon()}
      </TouchableOpacity>
    </Link>
  )
}

export default TabItem

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  disabledTab: {
    opacity: 0.7,
  },
  tabIcon: {
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
})
