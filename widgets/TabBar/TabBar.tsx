import React from 'react'
import { View, StyleSheet } from 'react-native'
import { usePathname } from 'expo-router'
import { tabs } from './const'
import TabItem from './TabItem'

function TabBar() {
  const pathname = usePathname()
  const activeTab = pathname.slice(1)

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {tabs.map(tab => (
          <TabItem
            key={tab.id}
            id={tab.id}
            label={tab.label}
            iconConfig={tab.iconConfig}
            href={tab.href}
            isActive={activeTab === tab.id}
            disabled={tab.disabled}
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
    paddingBottom: 20,
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
