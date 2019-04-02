/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { CardContainer, Button, ButtonTitle, ButtonContainer, Title, SubTitle, HeaderContainer } from './styled'
import { deleteDeckFromStorage, getCard } from '../../utils/api'
import { getCardDeckDetails, deleteDeck } from '../../actions'

class CardDeckDetailComponent extends PureComponent {

  static navigationOptions = ({ navigation }) => navigation.state.params.navTitle

  componentDidMount = async () => {
    const { navigation, getCardDeckDetails: getCardAction } = this.props
    const getDeckCards = await getCard(navigation.state.params.entryId)

    return getCardAction(getDeckCards)
  }

  componentDidUpdate(props) {
    // const { getCardDeckDetails: getDeck, navigation } = this.props
    // getDeck(navigation.state.params.entryId)
    console.log('did', this.props)
    console.log('update', props)
  }

  deleteItem = async () => {
    const { CardDeckDetail: { title }, navigation, deleteDeck: deleteDeckAction } = this.props
    const del = await deleteDeckFromStorage(title)

    deleteDeckAction(del)

    navigation.goBack()
  }

  render() {
    const { navigation, CardDeckDetail } = this.props
    const { title, questions } = CardDeckDetail

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

const mapStateToProps = reducer => ({ ...reducer })

const mapDispatchToProps = dispatch => ({
  deleteDeck: deck => dispatch(deleteDeck(deck)),
  getCardDeckDetails: deck => dispatch(getCardDeckDetails(deck)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDeckDetailComponent)
