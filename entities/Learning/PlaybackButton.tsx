import React from 'react'
import { ViewStyle } from 'react-native'
import { Play, RotateCcw, Rabbit, Turtle, Mic, ArrowBigRight } from 'lucide-react-native'
import { Button } from '../../shared/ui/Button'

interface PlaybackButtonProps {
  variant: 'play' | 'repeat' | 'slower' | 'faster' | 'speak' | 'next'
  onPress: () => void
  disabled?: boolean
  style?: ViewStyle
}

export function PlaybackButton({ variant, onPress, disabled, style }: PlaybackButtonProps) {
  const getIcon = () => {
    switch (variant) {
      case 'play':
        return <Play size={24} color={getTextColor()} />
      case 'repeat':
        return <RotateCcw size={24} color={getTextColor()} />
      case 'slower':
        return <Turtle size={24} color={getTextColor()} />
      case 'faster':
        return <Rabbit size={24} color={getTextColor()} />
      case 'speak':
        return <Mic size={24} color={getTextColor()} />
      case 'next':
        return <ArrowBigRight size={24} color={getTextColor()} />
    }
  }

  const getButtonStyle = (): ViewStyle => {
    const baseStyle = {
      width: 56,
      height: 56,
      borderRadius: 28,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      borderWidth: 1,
      borderColor: '#E5E7EB',
    }

    if (variant === 'speak') {
      return {
        ...baseStyle,
        backgroundColor: '#EF4444',
      }
    }

    return {
      ...baseStyle,
      backgroundColor: '#FFFFFF',
    }
  }

  const getTextColor = () => {
    if (variant === 'speak') return '#FFFFFF'
    return '#374151'
  }

  return (
    <Button onPress={onPress} disabled={disabled} style={[getButtonStyle(), style]} size="icon">
      {getIcon()}
    </Button>
  )
}
