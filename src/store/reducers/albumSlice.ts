import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAlbum } from '../models/IPlaylist'

interface IAlbumState {
    album: IAlbum,
    isLoading: boolean,
    error: string
}

const initialState: IAlbumState = {
    album: {
        album_type: '',
        artists: [],
        available_markets: [],
        external_urls: {
            spotify: ''
        },
        href: '',
        id: '',
        images: [],
        name: '',
        tracks: {
            href: '',
            items: [],
            limit: 0,
            next: null,
            offset: 0,
            previous: null,
            total: 0
        },
        release_date: '',
        release_date_precision: '',
        total_tracks: 0,
        type: '',
        uri: ''
    },
    isLoading: false,
    error: ''
}


export const albumSlice = createSlice({
    name: 'album',
    initialState,
    reducers: {
        albumFetching(state) {
            state.isLoading = true;
        },
        albumFetchingSuccess(state, action: PayloadAction<IAlbum>) {
            state.isLoading = false;
            state.error = '';
            state.album = action.payload;
        },
        albumFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const {albumFetching, albumFetchingSuccess, albumFetchingError } = albumSlice.actions;
export default albumSlice.reducer;