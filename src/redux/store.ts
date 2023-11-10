// import { injectStore } from '@app/request/apiClient'
// import saga from '@redux/saga'
import { persistConfig, reducers } from '@redux/slices'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

const rootReducer = persistReducer(persistConfig, reducers)
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
})

// injectStore(store)

export const persistor = persistStore(store)
// sagaMiddleware.run(saga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
