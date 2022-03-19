import { ISpotifyToken } from "../models/ISpotify";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TokenState {
    token: ISpotifyToken,
    isLoading: boolean,
    error: string
}

const initialState: TokenState = {
    token: {
        access_token: '',
        token_type: '',
        expires_in: 0
    },
    isLoading: false,
    error: ''
}

export const tokenSlice = createSlice({
    name: 'spotifyToken',
    initialState,
    reducers: {
        tokenFetching(state) {
            state.isLoading = true;
        },
        tokenFetchingSuccess(state, action: PayloadAction<ISpotifyToken>) {
            state.isLoading = false;
            state.error = '';
            state.token = action.payload;
        },
        tokenFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});
export const { tokenFetching, tokenFetchingSuccess, tokenFetchingError } = tokenSlice.actions;
export default tokenSlice.reducer;