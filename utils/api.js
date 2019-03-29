import { AsyncStorage } from 'react-native'

export const getDecks = () => (
  AsyncStorage.getAllKeys().then(keys => (
    AsyncStorage.multiGet(keys).then(stores => (
      stores.map((result, i, store) => {
        const key = store[i][0]
        const value = JSON.parse(store[i][1])
        if (value) {
          return {
            key,
            title: value.title,
            questions: value.questions,
          }
        }

        return false
      }).filter((items) => {
        if (items) {
          return typeof items.questions !== 'undefined'
        }

        return false
      })
    ))
  ))
)


export const getDeck = id => AsyncStorage.getItem(id)

export const saveDeckTitle = (title) => {
  try {
    return AsyncStorage.setItem(title, JSON.stringify({ title, questions: [] }))
  } catch (error) {
    console.log(error)
  }

  return false
}

export const addCardToDeck = (title, card) => {
  try {
    AsyncStorage.getItem(title).then((result) => {
      const data = JSON.parse(result)
      const { questions } = data

      questions.push(card)

      AsyncStorage.mergeItem(title, JSON.stringify({
        questions,
      }))
    })
  } catch (error) {
    console.log(error)
  }

  return ':)'
}
