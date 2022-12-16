import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./Note/NoteSlice";

export const store = configureStore({
    reducer: {
        notes: noteSlice,
    },
})