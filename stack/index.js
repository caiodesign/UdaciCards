/* eslint-disable react/prop-types */
import React from 'react'
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer } from 'react-navigation'
import DeckMain from '../components/DeckMain'
import DeckDetail from '../components/DeckDetail'
import AddEntry from '../components/AddEntry'
import AddQuestion from '../components/AddQuestion'
import QuizMain from '../components/QuizMain'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: DeckMain,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="cards-outline" size={30} color={tintColor} />,
    },
  },
  AddEntry: {
    screen: AddEntry,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name="md-add-circle-outline" size={30} color={tintColor} />,
    },
  },
})

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'Flash Cards',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
    },
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',

      },
    },
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',

      },
    },
  },
  QuizMain: {
    screen: QuizMain,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',

      },
    },
  },
}, {
  initialRouteName: 'Home',
})

export const AppContainerTabs = createAppContainer(Tabs)
export const AppContainer = createAppContainer(MainNavigator)

export default AppContainerTabs
