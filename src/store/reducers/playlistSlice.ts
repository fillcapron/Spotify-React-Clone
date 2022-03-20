import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlaylist } from "../models/IPlaylist";

interface PlaylistState {
    playlist: IPlaylist,
    isLoading: boolean,
    error: string
}

const initialState: PlaylistState = {
    playlist: {
        collaborative: false,
        description: '',
        external_urls: {
            spotify: ''
        },
        followers: {
            href: null,
            total: 0
        },
        href: '',
        id: '',
        images: [],
        name: '',
        owner: {
            display_name: '',
            external_urls: {
                spotify: ''
            },
            followers: {
                href: '',
                total: 0
            },
            href: '',
            id: '',
            images: [],
            type: '',
            uri: ''
        }
        ,
        primary_color: '',
        public: false,
        snapshot_id: '',
        tracks:  {
            href: '',
            total: 0
        },
        type: '',
        uri: ''
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
        playlistFetchingSuccess(state, action: PayloadAction<IPlaylist>) {
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