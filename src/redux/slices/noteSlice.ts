import { createSlice } from '@reduxjs/toolkit'

export type Note = { category: string; clients: string; text: string }

const initialState: { notes: Note[] } = {
  notes: [],
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    createNote: (state, action) => {
      state.notes = state.notes.concat(action.payload)
    },
    updateNote: (state, action) => {
      state.notes[action.payload.key] = action.payload.note
    },
    deleteNote: (state, action) => {
      state.notes.splice(action.payload.key, 1)
    },
  },
})

export const { createNote, updateNote, deleteNote } = noteSlice.actions
export const noteReducer = noteSlice.reducer
