import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFeaturedPlaylist } from "../models/IPlaylist";

export interface IFeaturedPlaylistState {
    response: IFeaturedPlaylist,
    isLoading: boolean,
    error: string
}

const initialState: IFeaturedPlaylistState = {
    response: {
        message: '',
        playlists: {
            href: '',
            items: [],
            limit: 20,
            next: null,
            offset: 0,
            previous: null,
            total: 0
        }
    },
    isLoading: false,
    error: ''
}

export const featuredPlaylist = createSlice({
    name: 'featuredPlaylist',
    initialState,
    reducers: {
        featuredPlaylistFetching(state) {
            state.isLoading = true;
        },
        featuredPlaylistFetchingSuccess(state, action: PayloadAction<IFeaturedPlaylist>) {
            state.isLoading = false;
            state.error = '';
            state.response = action.payload;
        },
        featuredPlaylistFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});
export const { featuredPlaylistFetching, featuredPlaylistFetchingSuccess, featuredPlaylistFetchingError } = featuredPlaylist.actions;
export default featuredPlaylist.reducer;