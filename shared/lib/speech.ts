import * as Speech from 'expo-speech'

export type SpeakOptions = {
  language?: string
  voice?: string
  rate?: number
  pitch?: number
  onDone?: () => void
  onError?: (error: unknown) => void
}

export async function speakWord(word: string, options?: SpeakOptions): Promise<void> {
  const text = (word || '').trim()
  if (!text) return

  Speech.stop()

  const voices = await Speech.getAvailableVoicesAsync()
  const maleVoice = voices.find(v => v.language === 'en-US' && v.name.includes('Daniel'))

  try {
    Speech.speak(text, {
      language: options?.language ?? 'en-US',
      voice: maleVoice?.identifier ?? options?.voice ?? 'en-GB-Wavenet-2',
      rate: options?.rate ?? 1.0,
      pitch: options?.pitch ?? 1.0,
      onDone: options?.onDone,
      onStopped: options?.onDone,
      onError: options?.onError,
    })
  } catch (error) {
    options?.onError?.(error)
  }
}
