// themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
            localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
        },
        loadThemeFromStorage: (state) => {
            const savedTheme = JSON.parse(localStorage.getItem("darkMode"));
            if (savedTheme !== null) state.darkMode = savedTheme;
        }
    }
});

export const { toggleDarkMode, loadThemeFromStorage } = themeSlice.actions;
export default themeSlice.reducer;
