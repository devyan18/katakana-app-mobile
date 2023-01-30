import { View, Text, StyleSheet } from 'react-native'
import { useKatakana } from '../providers/KatakanaProvider'

export default function RandomKatakana () {
  const { randomKatakana } = useKatakana()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{randomKatakana}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 200,
    color: '#fff',
    fontWeight: 'normal'
  }
})
