/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { getCardDeckDetails, deleteDeck } from '../actions'

class CardDeckDetail extends PureComponent {

  static navigationOptions = ({ navigation }) => navigation.state.params.navTitle

  componentDidMount() {
    const { getCardDeckDetails: getDeck, navigation } = this.props
    getDeck(navigation.state.params.entryId)
  }

  componentDidUpdate() {
    const { getCardDeckDetails: getDeck, navigation } = this.props
    getDeck(navigation.state.params.entryId)
  }

  deleteItem() {
    const { title, deleteDeck: delDeck, navigation } = this.props

    delDeck(title)
    navigation.goBack()
  }

  render() {
    const { title, questions, navigation } = this.props

    const styles = {
      buttonStyle: {
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
      },
    }


    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <Card title={title}>
          <Text style={{ marginBottom: 10, textAlign: 'center' }}>
            {questions ? questions.length : 0} cards
          </Text>
          <View>
            <Button
              icon={{ name: 'add-circle' }}
              backgroundColor="#03A9F4"
              buttonStyle={styles.buttonStyle}
              title="Add Card"
              onPress={() => {
                navigation.navigate(
                  'AddCardQuestion',
                  {
                    navTitle: title,
                    title,
                  },
                )
              }}
            />
          </View>
          <View>
            <Button
              icon={{ name: 'play-arrow' }}
              backgroundColor="#96C051"
              buttonStyle={[styles.buttonStyle, { marginTop: 10 }]}
              title="Start Quiz"
              onPress={() => {
                navigation.navigate(
                  'CardQuiz',
                  {
                    navTitle: title,
                    questions,
                  },
                )
              }}
            />
          </View>
        </Card>
        <View>
          <Button
            title="Delete Deck"
            buttonStyle={[styles.buttonStyle, { marginTop: 50 }]}
            backgroundColor="red"
            onPress={() => this.deleteItem()}
          />
        </View>
      </View>
    )
  }

}

const mapStateToProps = (state) => {

  if (state.CardDeckDetail) {
    const { title, questions } = state.CardDeckDetail

    return { title, questions }
  }

}


export default connect(
  mapStateToProps,
  {
    deleteDeck,
    getCardDeckDetails,
  },
)(CardDeckDetail)
