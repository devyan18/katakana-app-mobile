import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useKatakana } from '../providers/KatakanaProvider'

const ButtonSelector = ({ groupName, active, onPress }) => {
  return (
    <TouchableOpacity
      title={groupName}
      style={active ? styles.buttonActive : styles.button}
      onPress={onPress}
    >
      <Text style={{ fontSize: 16, color: '#ccc' }}>{groupName}</Text>
    </TouchableOpacity>
  )
}

export default function GroupSelector () {
  const { groups, selectGroup } = useKatakana()

  return (
    <View style={styles.container}>
      {groups.map(([group, value], index) => {
        return (
          <ButtonSelector
            key={index}
            groupName={group}
            active={value}
            onPress={() => selectGroup(group)}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 6,
    marginTop: 20,
    backgroundColor: '#111',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonActive: {
    backgroundColor: '#111',
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
