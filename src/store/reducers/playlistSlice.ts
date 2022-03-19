import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlaylist, IPlaylistBody } from "../models/IPlaylist";

interface PlaylistState {
    playlist: IPlaylistBody<IPlaylist>,
    isLoading: boolean,
    error: string
}

const initialState: PlaylistState = {
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

export const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        playlistFetching(state) {
            state.isLoading = true;
        },
        playlistFetchingSuccess(state, action: PayloadAction<IPlaylistBody<IPlaylist>>) {
            state.isLoading = false;
            state.error = '';
            state.playlist = action.payload;
        },
        playlistFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});
export const { playlistFetching, playlistFetchingSuccess, playlistFetchingError } = playlistSlice.actions;
export default playlistSlice.reducer;