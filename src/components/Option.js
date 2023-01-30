import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Option ({
  title,
  onPress
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    width: '44%',
    height: '30%',
    margin: 10,
    borderRadius: 10
  },
  text: {
    fontSize: 50,
    color: '#ccc'
  }
})
