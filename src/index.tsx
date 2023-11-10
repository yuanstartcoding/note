import Navigation from '@navigation'
import { persistor, store } from '@redux/store'
import React from 'react'
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <PaperProvider theme={theme}>
            <Navigation />
          </PaperProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
