import { createSlice } from "@reduxjs/toolkit";
import profile from "./profile-data.json"

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            console.log("Updating profile")
            return action.payload;
        }
    }
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;