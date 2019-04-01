/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { fetchDeckDB } from '../../actions'
import { Card, Title, SubTitle } from './styled'


const styles = {
  containerStyle: {
    flex: 1,
    alignSelf: 'stretch',
  },
}

class CardDeckList extends PureComponent {

  componentDidMount() {
    const { fetchDeckDB: getDeckDb } = this.props

    return getDeckDb()
  }

  componentDidUpdate() {
    const { fetchDeckDB: getDeckDb } = this.props

    return getDeckDb()
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
    const { DBdata } = this.props

    return (
      <View style={styles.containerStyle}>
        {DBdata.length
          ? (
            <FlatList
              data={DBdata}
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

const mapStateToProps = (state) => {
  const { decks } = state

  return { DBdata: decks }
}

export default connect(mapStateToProps, { fetchDeckDB })(CardDeckList)
