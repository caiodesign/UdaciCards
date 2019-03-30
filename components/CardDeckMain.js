import React from 'react'
import { StyleSheet, View } from 'react-native'
import CardDeckList from './CardDeckList'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const CardDeckMain = props => (
  <View style={styles.container}>
    <CardDeckList {...props} />
  </View>
)

export default CardDeckMain
