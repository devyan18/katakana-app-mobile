import { useState, useEffect, useContext, createContext } from 'react'
import { getRandomItemFromArray, setRandomOrderArray } from '../utils/genRandom'
import { katakanasGroup, katakanaWithRomaji } from '../utils/katakanas'

const KatakanaContext = createContext()

export const KatakanaProvider = ({ children }) => {
  const [groups, setGroups] = useState([])
  const [katakanas, setKatakanas] = useState([])
  const [romajis, setRomajis] = useState([])
  const [randomKatakana, setRandomKatakana] = useState('')
  const [randomRomaji, setRandomRomaji] = useState('')

  const handleSelectGroup = (key) => {
    const newGroups = groups.map(([group, _value]) => {
      if (group === key) return [group, true]

      return [group, false]
    })

    setGroups(newGroups)
  }

  const genRandomKatakana = () => {
    const randomItem = getRandomItemFromArray(katakanas)

    if (randomItem === randomKatakana) {
      return genRandomKatakana()
    }

    setRandomKatakana(randomItem)
  }

  useEffect(() => {
    const data = Object.entries(katakanasGroup)
    const groups = data.map(([key, _value], index) => {
      if (index === 0) return [key, true]

      return [key, false]
    })
    setGroups(groups)
  }, [])

  useEffect(() => {
    if (groups.length === 0) return

    const selectedGroup = groups.find(([_key, value]) => value === true)
    const group = katakanasGroup[selectedGroup[0]]

    setKatakanas(group.katakana)

    const randomOrderRomajis = setRandomOrderArray(group.romaji)
    setRomajis(randomOrderRomajis)
  }, [groups])

  useEffect(() => {
    if (katakanas.length === 0) return

    const randomItem = getRandomItemFromArray(katakanas)

    setRandomKatakana(randomItem)
  }, [katakanas])

  useEffect(() => {
    if (randomKatakana === '') return

    const romaji = katakanaWithRomaji.find((item) => item[0] === randomKatakana)[1]

    setRandomRomaji(romaji)
  }, [randomKatakana])

  return (
    <KatakanaContext.Provider
      value={{
        groups,
        katakanas,
        romajis,
        randomKatakana,
        randomRomaji,
        selectGroup: handleSelectGroup,
        random: genRandomKatakana
      }}
    >
      {children}
    </KatakanaContext.Provider>
  )
}

export const useKatakana = () => useContext(KatakanaContext)
