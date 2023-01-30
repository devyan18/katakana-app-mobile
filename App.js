import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import GroupSelector from './src/components/GroupSelector'
import { KatakanaProvider } from './src/providers/KatakanaProvider'
import constants from 'expo-constants'
import OptionList from './src/components/OptionList'
import RandomKatakana from './src/components/RandomKatakana'

export default function App () {
  return (
    <KatakanaProvider>
      <View style={styles.container}>
        <GroupSelector />
        <RandomKatakana />
        <OptionList />
        <StatusBar style='auto' />
      </View>
    </KatakanaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    flexDirection: 'column',
    paddingTop: constants.statusBarHeight,
    paddingHorizontal: 10
  }
})
