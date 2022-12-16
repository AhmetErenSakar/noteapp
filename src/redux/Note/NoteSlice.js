import { createSlice } from "@reduxjs/toolkit";


export const NoteSlice = createSlice({
    name: 'note',
    initialState: {
        items: [],
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload)
        }
    },
})

export const { addNote } = NoteSlice.actions;

export default NoteSlice.reducer;