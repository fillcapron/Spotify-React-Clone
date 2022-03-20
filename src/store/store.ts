import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from './reducers/userSlice';
import spotifySlice from './reducers/spotifySlice';
import userPlaylistSlice from "./reducers/userPlaylistSlice";
import newReleasesPlaylistSlice from "./reducers/newReleasesPlaylist";
import featuredPlaylistSlice from "./reducers/featuredPlaylist";
import playlistSlice from "./reducers/playlistSlice";

const rootResucers = combineReducers({
    userSlice,
    spotifySlice,
    userPlaylistSlice,
    newReleasesPlaylistSlice,
    featuredPlaylistSlice,
    playlistSlice
});

export const initStore = () => {
    return configureStore({
        reducer: rootResucers
    });
}

export type RootState = ReturnType<typeof rootResucers>;
export type AppStore = ReturnType<typeof initStore>;
export type AppDispatch = AppStore['dispatch'];