/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react'
import { KeyboardAvoidingView, Keyboard } from 'react-native'
import { addCardToDeck } from '../../utils/api'
import { Input, ButtonContainer, Button, ButtonTitle, Label, CardContainer, ErrorText } from './styled'


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
        <CardContainer>
          <Label>Question:</Label>
          <Input
            onChangeText={questionText => this.setState({ questionText })}
            value={titleText}
          />
          <Label>Answer:</Label>
          <Input
            onChangeText={answerText => this.setState({ answerText })}
            value={titleText}
          />
          <ErrorText>
            {error ? 'Both fields are required' : ''}
          </ErrorText>
          <ButtonContainer>
            <Button onPress={this.handleSubmit} color="dark">
              <ButtonTitle color="lighter">Add Card</ButtonTitle>
            </Button>
          </ButtonContainer>
        </CardContainer>
      </KeyboardAvoidingView>
    )
  }

}

export default AddDeck
