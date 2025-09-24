import React from 'react'
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, ActivityIndicator } from 'react-native'

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  onPress?: () => void
  style?: Array<ViewStyle | undefined>
  textStyle?: TextStyle
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'default',
  disabled = false,
  loading = false,
  onPress,
  style,
  textStyle,
}) => {
  const buttonStyle = [styles.base, styles[variant], styles[size], disabled && styles.disabled, style]

  const textStyleCombined = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
    textStyle,
  ]

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'outline' || variant === 'ghost' ? '#007AFF' : 'white'}
          size="small"
        />
      ) : (
        <Text style={textStyleCombined}>{children}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },

  // Variants
  default: {
    backgroundColor: '#007AFF',
  },
  destructive: {
    backgroundColor: '#FF3B30',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  secondary: {
    backgroundColor: '#F2F2F7',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  link: {
    backgroundColor: 'transparent',
  },

  defaultSize: {
    height: 36,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sm: {
    height: 32,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  lg: {
    height: 40,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  icon: {
    height: 36,
    width: 36,
    borderRadius: 6,
  },

  text: {
    fontWeight: '500',
    textAlign: 'center',
  },
  defaultText: {
    color: 'white',
    fontSize: 14,
  },
  destructiveText: {
    color: 'white',
    fontSize: 14,
  },
  outlineText: {
    color: '#007AFF',
    fontSize: 14,
  },
  secondaryText: {
    color: '#000000',
    fontSize: 14,
  },
  ghostText: {
    color: '#007AFF',
    fontSize: 14,
  },
  linkText: {
    color: '#007AFF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },

  smText: {
    fontSize: 12,
  },
  lgText: {
    fontSize: 16,
  },
  iconText: {
    fontSize: 14,
  },

  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.5,
  },
})

export { Button }
