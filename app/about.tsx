import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Text>Me is a card!</Text>
      <Link href="/" style={styles.link}>
        Go to Home Page
      </Link>
    </View>
  )
}

export default About

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
  link: {
    marginTop: 20,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10,
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
  },
})
