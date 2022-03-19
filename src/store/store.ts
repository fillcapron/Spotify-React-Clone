import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from './reducers/userSlice';
import spotifySlice from './reducers/spotifySlice';
import playlistSlice from "./reducers/playlistSlice";
import newReleasesPlaylist from "./reducers/newReleasesPlaylist";
import featuredPlaylist from "./reducers/featuredPlaylist";

const rootResucers = combineReducers({
    userSlice,
    spotifySlice,
    playlistSlice,
    newReleasesPlaylist,
    featuredPlaylist
});

export const initStore = () => {
    return configureStore({
        reducer: rootResucers
    });
}

export type RootState = ReturnType<typeof rootResucers>;
export type AppStore = ReturnType<typeof initStore>;
export type AppDispatch = AppStore['dispatch'];