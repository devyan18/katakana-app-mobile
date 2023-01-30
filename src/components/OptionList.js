import { View, StyleSheet } from 'react-native'
import { useKatakana } from '../providers/KatakanaProvider'
import Option from './Option'

export default function OptionList () {
  const { romajis, random, randomRomaji } = useKatakana()

  const handlePress = (romaji) => {
    if (romaji === randomRomaji) {
      random()
    }
  }

  return (
    <View style={styles.container}>
      {
        romajis.map((item, index) => (
          <Option
            key={index}
            onPress={() => handlePress(item)}
            title={item}
          />
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#111',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10
  }
})
