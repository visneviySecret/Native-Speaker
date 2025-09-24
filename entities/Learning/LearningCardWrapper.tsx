import { StyleSheet, View } from 'react-native'
import React from 'react'

const Card = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.card}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: 320,
    height: 500,
    backgroundColor: 'white',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    padding: 32,
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#f3f4f6',
    overflow: 'hidden',
  },
})
