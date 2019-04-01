import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'


import reducer from './reducers'
import { setLocalNotification, getTomorrowDay } from './utils/helpers'
import { AppContainer } from './stack'
import StatusBar from './StatusBar'

export default class App extends PureComponent {

  componentDidMount() {
    const today = new Date()
    const tomorrow = getTomorrowDay(today)
    setLocalNotification(tomorrow)
  }

  render() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
      reducer,
      composeEnhancers(applyMiddleware(ReduxThunk)),
    )

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar
            backgroundColor="#01BAEF"
            barStyle="light-content"
          />
          <AppContainer />
        </View>
      </Provider>
    )
  }

}
