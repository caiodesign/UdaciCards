/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { CardContainer, Button, ButtonTitle, ButtonContainer, Title, SubTitle, HeaderContainer } from './styled'
import { getCardDeckDetails, deleteDeck } from '../../actions'

class CardDeckDetail extends PureComponent {

  static navigationOptions = ({ navigation }) => navigation.state.params.navTitle

  componentDidMount() {
    const { getCardDeckDetails: getDeck, navigation } = this.props
    getDeck(navigation.state.params.entryId)
  }

  componentDidUpdate() {
    const { getCardDeckDetails: getDeck, navigation } = this.props
    console.log('here', navigation.state.params.entryId)
    getDeck(navigation.state.params.entryId)
  }

  deleteItem() {
    const { title, deleteDeck: delDeck, navigation } = this.props

    delDeck(title)
    navigation.goBack()
  }

  render() {
    const { title, questions, navigation } = this.props

    return (
      <CardContainer>
        <HeaderContainer>
          <Title>{title}</Title>
          <SubTitle>{questions ? questions.length : 0} cards</SubTitle>
        </HeaderContainer>
        <ButtonContainer>
          <Button
            color="lighter"
            onPress={() => {
              navigation.navigate(
                'CardQuiz',
                {
                  navTitle: title,
                  questions,
                },
              )
            }}
          >
            <ButtonTitle color="dark">Play Quiz!</ButtonTitle>
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button
            color="lighter"
            onPress={() => {
              navigation.navigate(
                'AddCardQuestion',
                {
                  navTitle: title,
                  title,
                },
              )
            }}
          >
            <ButtonTitle color="dark">Add Card</ButtonTitle>
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onPress={() => this.deleteItem()} color="dark">
            <ButtonTitle color="lighter">DeleteDeck</ButtonTitle>
          </Button>
        </ButtonContainer>
      </CardContainer>
    )
  }

}


const mapStateToProps = (state) => {
  const { title, questions } = state.CardDeckDetail ? state.CardDeckDetail : ('', [])

  return { title, questions }

}


export default connect(
  mapStateToProps,
  {
    deleteDeck,
    getCardDeckDetails,
  },
)(CardDeckDetail)
