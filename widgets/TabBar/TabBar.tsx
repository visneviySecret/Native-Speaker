import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

interface TabBarProps {
  activeTab: string
}

interface TabItemProps {
  id: string
  label: string
  iconName: keyof typeof Ionicons.glyphMap
  isActive: boolean
}

function TabItem({ id, label, iconName, isActive }: TabItemProps) {
  return (
    <TouchableOpacity style={styles.tabItem} activeOpacity={0.7}>
      <Ionicons
        name={iconName}
        size={24}
        color={isActive ? '#4A90E2' : '#9CA3AF'}
        style={styles.tabIcon}
      />
      <Link href={`/${id}`}>
        <Text
          style={[styles.tabLabel, { color: isActive ? '#4A90E2' : '#9CA3AF' }]}
        >
          {label}
        </Text>
      </Link>
    </TouchableOpacity>
  )
}

function TabBar({ activeTab }: TabBarProps) {
  const tabs = [
    {
      id: 'cards',
      label: 'Карточки',
      iconName: 'card' as keyof typeof Ionicons.glyphMap,
    },
    {
      id: 'library',
      label: 'Библиотека',
      iconName: 'library' as keyof typeof Ionicons.glyphMap,
    },
    {
      id: 'stats',
      label: 'Статистика',
      iconName: 'stats-chart' as keyof typeof Ionicons.glyphMap,
    },
    {
      id: 'settings',
      label: 'Настройки',
      iconName: 'settings' as keyof typeof Ionicons.glyphMap,
    },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {tabs.map(tab => (
          <TabItem
            key={tab.id}
            id={tab.id}
            label={tab.label}
            iconName={tab.iconName}
            isActive={activeTab === tab.id}
          />
        ))}
      </View>
    </View>
  )
}

export default TabBar

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingBottom: 20, // для safe area
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
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
