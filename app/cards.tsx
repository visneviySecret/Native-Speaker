import { StyleSheet, View } from 'react-native'
import React from 'react'
import LearningCard from '../widgets/LearningCard/LearningCard'

export interface Word {
  id: string
  word: string
  speech: string
  hint: string
  imageUrl: string
}

const words: Word[] = [
  {
    id: '1',
    word: 'Apple',
    speech: 'This is an apple',
    hint: 'A red fruit that grows on trees',
    imageUrl:
      'https://images.unsplash.com/photo-1711818032617-0959ed594603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGZydWl0JTIwcmVkJTIwc2ltcGxlfGVufDF8fHx8MTc1ODM5MzMxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '2',
    word: 'Cup',
    speech: 'This is a cup',
    hint: 'Used for drinking coffee or tea',
    imageUrl:
      'https://images.unsplash.com/photo-1643821042383-879d7c4e4bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjB3aGl0ZSUyMGNlcmFtaWN8ZW58MXx8fHwxNzU4MzkzMzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '3',
    word: 'Key',
    speech: 'This is a key',
    hint: 'Opens doors and locks',
    imageUrl:
      'https://images.unsplash.com/photo-1752346800862-252719b8315d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXklMjBob3VzZSUyMHNpbHZlciUyMG1ldGFsfGVufDF8fHx8MTc1ODM5MzMxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
]

const Cards = () => {
  return (
    <View style={styles.container}>
      <LearningCard word={words[0]} />
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
})
