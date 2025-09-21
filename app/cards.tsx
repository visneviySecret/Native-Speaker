import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

interface Word {
  id: string
  word: string
  hint: string
  imageUrl: string
}

const words: Word[] = [
  {
    id: '1',
    word: 'Apple',
    hint: 'A red fruit that grows on trees',
    imageUrl:
      'https://images.unsplash.com/photo-1711818032617-0959ed594603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGZydWl0JTIwcmVkJTIwc2ltcGxlfGVufDF8fHx8MTc1ODM5MzMxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '2',
    word: 'Cup',
    hint: 'Used for drinking coffee or tea',
    imageUrl:
      'https://images.unsplash.com/photo-1643821042383-879d7c4e4bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjB3aGl0ZSUyMGNlcmFtaWN8ZW58MXx8fHwxNzU4MzkzMzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '3',
    word: 'Key',
    hint: 'Opens doors and locks',
    imageUrl:
      'https://images.unsplash.com/photo-1752346800862-252719b8315d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXklMjBob3VzZSUyMHNpbHZlciUyMG1ldGFsfGVufDF8fHx8MTc1ODM5MzMxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
]

const Cards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cards Page</Text>
      <Text style={styles.subtitle}>
        Добро пожаловать на страницу обучения!
      </Text>
      <Text style={styles.description}>
        Здесь вы можете изучать новые языки и улучшать свои навыки.
      </Text>

      <Link href="/" style={styles.link}>
        <Text style={styles.linkText}>Вернуться на главную</Text>
      </Link>
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#666',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#777',
    lineHeight: 24,
  },
  link: {
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
  linkText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
})
