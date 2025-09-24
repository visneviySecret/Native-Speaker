import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import LearningCardWrapper from '../../entities/Learning/LearningCardWrapper'

interface Word {
  id: string
  word: string
  hint: string
  imageUrl: string
}

const LearningCard = ({ word }: { word: Word }) => {
  return (
    <LearningCardWrapper>
      <View style={styles.imageWrapper}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: word.imageUrl }} style={styles.image} />
        </View>
      </View>
    </LearningCardWrapper>
  )
}

export default LearningCard

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 256,
    height: 256,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
