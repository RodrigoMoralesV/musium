import React from 'react'
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { StyledText } from './components/StyledText'
import { TabNavigator } from './navigation/TabNavigator'

export const Main = () => {
  return (
    <TabNavigator />
  )
}
