import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlaylist, IPlaylistBody } from "../models/IPlaylist";

interface UserPlaylistState {
    playlist: IPlaylistBody<IPlaylist>,
    isLoading: boolean,
    error: string
}

const initialState: UserPlaylistState = {
    playlist: {
        href: '',
        items: [],
        limit: 20,
        next: null,
        offset: 0,
        previous: null,
        total: 0
    },
    isLoading: false,
    error: ''
}

export const userPlaylistSlice = createSlice({
    name: 'userPlaylist',
    initialState,
    reducers: {
        userPlaylistFetching(state) {
            state.isLoading = true;
        },
        userPlaylistFetchingSuccess(state, action: PayloadAction<IPlaylistBody<IPlaylist>>) {
            state.isLoading = false;
            state.error = '';
            state.playlist = action.payload;
        },
        userPlaylistFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});
export const { userPlaylistFetching, userPlaylistFetchingSuccess, userPlaylistFetchingError } = userPlaylistSlice.actions;
export default userPlaylistSlice.reducer;