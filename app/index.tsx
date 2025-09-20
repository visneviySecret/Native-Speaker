import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/img/adaptive-icon.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.icon} />

      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Welcome to the app</Text>

      <View style={styles.card}>
        <Text>Me is a card!</Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  card: {
    marginTop: 20,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10,
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
  },
  icon: {
    marginVertical: 20,
    width: 100,
    height: 100,
  },
})
