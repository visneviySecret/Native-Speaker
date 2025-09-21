import React from 'react'
import { Slot } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import { TabBar } from '../widgets'

const RootLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
      <TabBar />
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({})
