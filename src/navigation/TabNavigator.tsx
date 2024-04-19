import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

// Screens
import { HomeScreen } from '../screens/navigatorScreens/HomeScreen';
import { ExploreScreen } from '../screens/navigatorScreens/ExploreScreen';
import { LibraryScreen } from '../screens/navigatorScreens/LibraryScreen';

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
