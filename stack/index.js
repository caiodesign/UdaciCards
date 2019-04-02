/* eslint-disable react/prop-types */
import React from 'react'
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer } from 'react-navigation'
import CardDeckMain from '../components/CardDeckMain'
import CardDeckDetail from '../components/CardDeckDetail'
import AddDeck from '../components/AddDeck'
import AddCardQuestion from '../components/AddCardQuestion'
import CardQuiz from '../components/CardQuiz'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: CardDeckMain,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="cards-outline" size={30} color={tintColor} />,
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name="md-add-circle-outline" size={30} color={tintColor} />,
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 10,
    },
    tabStyle: {
      paddingTop: 7,
    },
  },
})

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'Flash Cards',
      headerTintColor: '#FBFBFF',
      headerStyle: {
        backgroundColor: '#01BAEF',
      },
    },
  },
  CardDeckDetail: {
    screen: CardDeckDetail,
    navigationOptions: {
      headerTintColor: '#FBFBFF',
      headerStyle: {
        backgroundColor: '#01BAEF',

      },
    },
  },
  AddCardQuestion: {
    screen: AddCardQuestion,
    navigationOptions: {
      headerTintColor: '#FBFBFF',
      headerStyle: {
        backgroundColor: '#01BAEF',

      },
    },
  },
  CardQuiz: {
    screen: CardQuiz,
    navigationOptions: {
      headerTintColor: '#FBFBFF',
      headerStyle: {
        backgroundColor: '#01BAEF',

      },
    },
  },
}, {
  initialRouteName: 'Home',
})

export const AppContainerTabs = createAppContainer(Tabs)
export const AppContainer = createAppContainer(MainNavigator)

export default AppContainerTabs
