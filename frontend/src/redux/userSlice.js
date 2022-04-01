import { createSlice } from '@reduxjs/toolkit';
import { APPLICATION_SETTINGS } from '../constant';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "The Happy Code",
        age: "33",
        about: "I'm a software engineer",
        avaUrl: APPLICATION_SETTINGS.avaUrl[0],
        theme: "#ff9051",
        // loading: false,
        pending: false,
        error: false
    },
    reducers: {
        updateStart: state => {
            state.pending = true;
        },
        updateError: state => {
            state.pending = false;
            state.error = true
        },
        updateSuccess: (state, action) => {
            console.log(action);
            state.pending = false;
            state.error = false;
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaUrl = action.payload.avaUrl;
            state.theme = action.payload.theme;
        }
        // update: (state, action) => {
        //     state.name = action.payload.name;
        //     state.age = action.payload.age;
        //     state.about = action.payload.about;
        //     state.avaUrl = action.payload.avaUrl;
        //     state.theme = action.payload.theme;
        // }
    }
});

export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;