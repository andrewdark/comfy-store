import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
    winter: 'winter',
    dracula: 'dracula',
};

const initialState = {
    user: 'user',
    theme: themes.dracula,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            toast.success("Login, " + state.userSlice.name);
        },
        logoutUser: (state) => {
            toast.success('Logged out successfully');
        },
        toggleTheme: (state) => {

        },
    }
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;