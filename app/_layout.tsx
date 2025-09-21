import React from 'react'
import { Slot } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const RootLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
      <Text>RootLayout</Text>
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({})
