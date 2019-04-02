import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native'
import { Input, ButtonContainer, Button, ButtonTitle, Label, CardContainer, ErrorText } from './styled'
import { saveDeckTitle } from '../../utils/api'


export default class AddDeck extends PureComponent {

  state = {
    titleText: '',
    error: false,
  }

  handleSubmit = () => {
    const { titleText } = this.state
    const { navigation } = this.props

    if (titleText) {
      saveDeckTitle(titleText)
      this.setState({
        error: false,
        titleText: '',
      })
      navigation.navigate(
        'CardDeckDetail',
        {
          entryId: titleText,
          navTitle: titleText,
        },
        Keyboard.dismiss(),
      )
    } else {
      this.setState({ error: true })
    }
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
          <Label>Deck name:</Label>
          <Input
            onChangeText={event => this.setState({ titleText: event })}
            value={titleText}
          />
          <ErrorText>
            {error ? 'This field is required' : ''}
          </ErrorText>
          <ButtonContainer>
            <Button onPress={this.handleSubmit} color="dark">
              <ButtonTitle color="lighter">Add Deck</ButtonTitle>
            </Button>
          </ButtonContainer>
        </CardContainer>

      </KeyboardAvoidingView>
    )
  }

}

AddDeck.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
}

AddDeck.defaultProps = {
  navigation: {},
}
