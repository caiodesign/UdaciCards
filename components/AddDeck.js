import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native'
import {
  Button,
  Card,
  FormInput,
  FormValidationMessage,
} from 'react-native-elements'
import { saveDeckTitle } from '../utils/api'


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
        <Card title="Deck title">
          <FormInput
            onChangeText={event => this.setState({ titleText: event })}
            value={titleText}
          />
          <FormValidationMessage>
            {error ? 'This field is required' : ''}
          </FormValidationMessage>
          <Button
            title="Create Deck"
            raised
            backgroundColor="rgb(72, 149, 236)"
            onPress={this.handleSubmit}
          />
        </Card>
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
