import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { Badge, Card } from 'react-native-elements'
import { fetchDeckDB } from '../actions'


const styles = {
  containerStyle: {
    flex: 1,
    alignSelf: 'stretch',
  },
}

class CardDeckList extends PureComponent {

  componentDidMount() {
    const { fetchDeckDB } = this.props

    return fetchDeckDB()
  }

  componentDidUpdate() {
    const { fetchDeckDB } = this.props

    return fetchDeckDB()
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
        <View>
          <Card
            title={title}
            subtitle={`${questions.length} cards`}
          >
            <Badge
              containerStyle={{ backgroundColor: 'lightblue' }}
            >
              <Text>
                {`${questions.length} cards`}
              </Text>
            </Badge>
          </Card>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { DBdata } = this.props

    return (
      <View style={styles.containerStyle}>
        {DBdata.length > 0
          ? (
            <FlatList
              data={DBdata}
              renderItem={this.renderItem}
            />
          )
          : <Card title="Create" />
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
