/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react'
import { KeyboardAvoidingView, Keyboard } from 'react-native'
import {
  Card,
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage,
} from 'react-native-elements'
import { addCardToDeck } from '../utils/api'


class AddDeck extends PureComponent {

  static navigationOptions = ({ navigation }) => (
    { title: navigation.state.params.navTitle }
  )

  state = {
    questionText: '',
    answerText: '',
    error: false,
  }

  handleSubmit = () => {
    const { questionText, answerText } = this.state
    const card = { question: questionText, answer: answerText }

    const {
      navigation: {
        goBack,
        state: { params: { title } },
      },
    } = this.props


    if (questionText && answerText) {
      addCardToDeck(title, card)
      this.setState({
        error: false,
        questionText: '',
        answerText: '',
      })

      return goBack(Keyboard.dismiss())
    }

    return this.setState({ error: true })
  }

  render() {
    const { titleText, error } = this.state

    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}
        behavior="padding"
      >
        <Card title="Add a Card">
          <FormLabel>Question:</FormLabel>
          <FormInput
            onChangeText={questionText => this.setState({ questionText })}
            value={titleText}
          />
          <FormLabel>Answer:</FormLabel>
          <FormInput
            onChangeText={answerText => this.setState({ answerText })}
            value={titleText}
          />
          <FormValidationMessage>
            {error ? 'Both fields are required' : ''}
          </FormValidationMessage>
          <Button
            title="Submit"
            raised
            backgroundColor="rgb(72, 149, 236)"
            onPress={this.handleSubmit}
          />
        </Card>
      </KeyboardAvoidingView>
    )
  }

}

export default AddDeck
