/* eslint-disable react/prop-types */
import React from 'react'

import { View, Text } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Badge, Button, Card } from 'react-native-elements'
import { clearStorage, setLocalNotification } from '../utils/helpers'

const styles = {
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  questionsRemaining: {
    textAlign: 'center',
    marginBottom: 10,
  },
  badgeStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 0,
  },
}

class CardQuiz extends React.Component {

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
        <Card
          title={
            showQuestion
              ? `Q: ${questions[currentQuestion].question}`
              : `A: ${questions[currentQuestion].answer}`
          }
        >
          <View>
            <Text
              style={styles.questionsRemaining}
            >
              {`Question ${currentQuestion + 1} of ${questions.length}`}
            </Text>
          </View>
          <View style={styles.badgeStyle}>
            <Badge
              containerStyle={{ backgroundColor: 'violet' }}
              onPress={() => this.setState({ showQuestion: !showQuestion })}
            >
              <Text>
                {showQuestion ? 'Answer' : 'Question'}
              </Text>
            </Badge>
          </View>
          <Button
            buttonStyle={styles.buttonStyle}
            title="Correct"
            backgroundColor="#377D22"
            onPress={() => {
              this.setState({
                currentQuestion: currentQuestion + 1,
                correctAnswers: correctAnswers + 1,
              })
            }}
          />
          <Button
            buttonStyle={[styles.buttonStyle, { marginTop: 10 }]}
            title="Incorrect"
            backgroundColor="#C3392A"
            onPress={() => this.setState({ currentQuestion: currentQuestion + 1 })}
          />
        </Card>
      )
    }

    return (
      <Card
        title={`You got ${correctAnswers} out of ${questions.length}`}
      >
        <Button
          buttonStyle={styles.buttonStyle}
          title="Start Over"
          backgroundColor="#377D22"
          onPress={() => this.resetQuiz()}
        />
        <Button
          buttonStyle={[styles.buttonStyle, { marginTop: 10 }]}
          title="Back to Deck"
          backgroundColor="#C3392A"
          onPress={() => this.backToDeck()}
        />
      </Card>
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
