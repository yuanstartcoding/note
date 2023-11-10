import storage from '@react-native-async-storage/async-storage'
import { noteReducer } from '@redux/slices/noteSlice'
import { combineReducers } from '@reduxjs/toolkit'

export const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['note'],
}

export const reducers = combineReducers({
  note: noteReducer,
})
