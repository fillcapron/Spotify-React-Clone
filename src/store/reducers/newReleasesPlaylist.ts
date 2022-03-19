import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAlbum, IPlaylistBody } from "../models/IPlaylist";

interface AlbumState {
    albums: IPlaylistBody<IAlbum>,
    isLoading: boolean,
    error: string
}

const initialState: AlbumState = {
    albums: {
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

export const newReleasesPlaylist = createSlice({
    name: 'newReleasesPlaylist',
    initialState,
    reducers: {
        newReleasesPlaylistFetching(state) {
            state.isLoading = true;
        },
        newReleasesPlaylistFetchingSuccess(state, action: PayloadAction<AlbumState>) {
            state.isLoading = false;
            state.error = '';
            state.albums = action.payload.albums;
        },
        newReleasesPlaylistFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});
export const { newReleasesPlaylistFetching, newReleasesPlaylistFetchingSuccess, newReleasesPlaylistFetchingError } = newReleasesPlaylist.actions;
export default newReleasesPlaylist.reducer;