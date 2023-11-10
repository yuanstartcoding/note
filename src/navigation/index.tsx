import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AddNote, EditNote, Home } from '@screens'
import * as React from 'react'

const MainStack = createStackNavigator()
function MainNavigator() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name='MainTab' component={Home} />
      <MainStack.Screen name='AddNote' component={AddNote} />
      <MainStack.Screen name='EditNote' component={EditNote} />
    </MainStack.Navigator>
  )
}

const RootStack = createStackNavigator()
const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name='Main' component={MainNavigator} />
    </RootStack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}
