import { Stack } from "expo-router";


import React from 'react'

const RootLayout = () => {
  return <Stack
  screenOptions={{
    headerStyle:{
      backgroundColor: '#ff8c00'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    contentStyle: {
      paddingHorizontal: 10,
      paddingTop: 10,
      backgroundColor: 'fff',
    },
  }}
  >
    <Stack.Screen name='index' options={{title: 'Home'}}/>
    <Stack.Screen name='notes' options={{headerTitle: 'Notes'}}/>
    </Stack>;
}

export default RootLayout
