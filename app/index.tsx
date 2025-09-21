import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import Logo from '../assets/img/adaptive-icon.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.icon} />

      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Welcome to the app</Text>

      <Link href="/cards" style={styles.card}>
        <Text style={styles.cardText}>Перейти к обучению</Text>
      </Link>
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
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  icon: {
    marginVertical: 20,
    width: 100,
    height: 100,
  },
})
