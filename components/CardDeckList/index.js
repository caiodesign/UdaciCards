/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { fetchDeckDB } from '../../actions'
import { getDecks } from '../../utils/api'
import { Card, Title, SubTitle } from './styled'


const styles = {
  containerStyle: {
    flex: 1,
    alignSelf: 'stretch',
  },
}

class CardDeckList extends PureComponent {

  state = {
    decks: [],
  }

  componentDidMount = async () => {
    const { updateDecks } = this.props
    const storageDecks = await getDecks()
    const userDecks = updateDecks(storageDecks)

    this.setState({
      decks: userDecks.payload,
    })
  }

  componentDidUpdate = (props) => {
    const { decks: { decks } } = this.props

    if (decks !== props.decks.decks) {
      this.setState({
        decks: props.decks.decks,
      })
    }
  }

  renderItem = ({ item }) => {
    const { key, title, questions } = item
    const { navigation } = this.props

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(
          'CardDeckDetail',
          {
            entryId: key,
            navTitle: title,
          },
        )}
      >
        <Card>
          <Title>{title} </Title>
          <SubTitle> {`${questions.length} cards`}</SubTitle>
        </Card>
      </TouchableOpacity>
    )
  }

  render() {
    const { decks } = this.state

    return (
      <View style={styles.containerStyle}>
        {decks
          ? (
            <FlatList
              data={decks}
              renderItem={this.renderItem}
            />
          )
          : (
            <Card>
              <Title>Create a new deck</Title>
              <SubTitle>:)</SubTitle>
            </Card>
          )
        }
      </View>
    )
  }

}

const mapStateToProps = reducer => ({ ...reducer })

const mapDispatchToProps = dispatch => ({
  updateDecks: decks => dispatch(fetchDeckDB(decks)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDeckList)
