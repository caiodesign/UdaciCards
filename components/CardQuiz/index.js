/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react'

import { View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { clearStorage, setLocalNotification } from '../../utils/helpers'
import { CardContainer, Button, ButtonTitle, ButtonContainer, Title, SubTitle, HeaderContainer } from './styled'


class CardQuiz extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    const title = navigation.state.params.navTitle

    return { title }
  }

  state = {
    showQuestion: true,
    questions: this.getQuestions(),
    currentQuestion: 0,
    correctAnswers: 0,
  }

  getQuestions() {
    const { navigation } = this.props
    const { questions } = navigation.state.params

    return questions
  }

  backToDeck() {
    const { navigation } = this.props
    const backAction = NavigationActions.back()
    this.resetQuiz()
    navigation.dispatch(backAction)
    this.resetNotification()
  }

  resetQuiz() {
    this.setState(() => {
      return {
        showQuestion: true,
        questions: this.getQuestions(),
        currentQuestion: 0,
        correctAnswers: 0,
      }
    })
    this.resetNotification()
  }

  resetNotification() {
    clearStorage()
      .then(setLocalNotification)
  }

  renderCard() {
    const {
      questions,
      currentQuestion,
      correctAnswers,
      showQuestion,
    } = this.state

    if (currentQuestion < questions.length) {
      return (
        <CardContainer>
          <HeaderContainer>
            <Title>
              {
              showQuestion
                ? `Q: ${questions[currentQuestion].question}`
                : `A: ${questions[currentQuestion].answer}`
              }
            </Title>
            <SubTitle>{`Question ${currentQuestion + 1} of ${questions.length}`}</SubTitle>
          </HeaderContainer>

          <ButtonContainer>
            <Button
              onPress={() => this.setState({ showQuestion: !showQuestion })}
              color="lighter"
            >
              <ButtonTitle color="dark">
                {showQuestion ? 'Answer' : 'Question'}
              </ButtonTitle>
            </Button>
          </ButtonContainer>

          <ButtonContainer>
            <Button
              onPress={() => {
                this.setState({
                  currentQuestion: currentQuestion + 1,
                  correctAnswers: correctAnswers + 1,
                })
              }}
              color="lighter"
            >
              <ButtonTitle>
                Correct
              </ButtonTitle>
            </Button>
          </ButtonContainer>


          <ButtonContainer>
            <Button
              onPress={() => this.setState({ currentQuestion: currentQuestion + 1 })}
              color="dark"
            >
              <ButtonTitle color="lighter">
                Incorrect
              </ButtonTitle>
            </Button>
          </ButtonContainer>

        </CardContainer>
      )
    }

    return (
      <CardContainer>
        <HeaderContainer>
          <Title>
            {`You got ${correctAnswers} out of ${questions.length}`}
          </Title>
        </HeaderContainer>
        <ButtonContainer>
          <Button onPress={() => this.resetQuiz()} color="lighter">
            <ButtonTitle color="dark">
              Start again
            </ButtonTitle>
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onPress={() => this.backToDeck()} color="dark">
            <ButtonTitle color="lighter">
              Back to Deck
            </ButtonTitle>
          </Button>
        </ButtonContainer>
      </CardContainer>
    )
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        {this.renderCard()}
      </View>
    )
  }

}

export default CardQuiz
