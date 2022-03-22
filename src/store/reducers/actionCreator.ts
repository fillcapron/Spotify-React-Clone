import { AppDispatch } from "../store";
import { featuredPlaylistFetching, featuredPlaylistFetchingError, featuredPlaylistFetchingSuccess } from "./featuredPlaylist";
import { newReleasesPlaylistFetching, newReleasesPlaylistFetchingError, newReleasesPlaylistFetchingSuccess } from "./newReleasesPlaylist";
import { userPlaylistFetching, userPlaylistFetchingError, userPlaylistFetchingSuccess } from "./userPlaylistSlice";
import { tokenFetching, tokenFetchingSuccess, tokenFetchingError } from "./spotifySlice";
import { userFetching, userFetchingSuccess, userFetchingError } from "./userSlice";
import { playlistFetching, playlistFetchingError, playlistFetchingSuccess } from "./playlistSlice";
import { albumFetching, albumFetchingError, albumFetchingSuccess } from "./albumSlice";

export const fetchUser = (token: string, id: string, isLogin: boolean = false) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userFetching());

        const res = await fetch('https://api.spotify.com/v1/users/' + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        const data = await res.json();

        if (data.error) {
            dispatch(userFetchingError(data.error));
        }
        if (isLogin) {
            localStorage.setItem('user', JSON.stringify({ id }));
        }
        dispatch(userFetchingSuccess(data));
    } catch (e) {
        dispatch(userFetchingError('Ошибка получения пользователя'));
    }
}

export const loginSpotify = (clientId: string, secret: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(tokenFetching());

        const res = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + btoa(clientId + ':' + secret)
            },
            body: 'grant_type=client_credentials'
        })
        const data = await res.json();

        if (data.error) {
            dispatch(tokenFetchingError(data.error));
        }
        dispatch(tokenFetchingSuccess(data));
    } catch (e) {
        dispatch(tokenFetchingError('Ошибка получения токена'));
    }
}

export const fetchPlaylistUser = (token: string, id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userPlaylistFetching());

        const res = await fetch(`https://api.spotify.com/v1/users/${id}/playlists/`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        const data = await res.json();

        if (data.error) {
            dispatch(userPlaylistFetchingError(data.error));
        }
        dispatch(userPlaylistFetchingSuccess(data));
    } catch (e) {
        dispatch(userPlaylistFetchingError('Ошибка получения плейлиста'));
    }
}

export const fetchPlaylist = (token: string, id: string | undefined) => async (dispatch: AppDispatch) => {
    
    try {
        dispatch(playlistFetching());

        const res = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        const data = await res.json();

        if (data.error) {
            dispatch(playlistFetchingError(data.error));
        }
        dispatch(playlistFetchingSuccess(data));
    } catch (e) {
        dispatch(playlistFetchingError('Ошибка получения плейлиста'));
    }
}

export const fetchAlbum = (token: string, id: string | undefined) => async (dispatch: AppDispatch) => {
    
    try {
        dispatch(albumFetching());

        const res = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        const data = await res.json();

        if (data.error) {
            dispatch(albumFetchingError(data.error));
        }
        dispatch(albumFetchingSuccess(data));
    } catch (e) {
        dispatch(albumFetchingError('Ошибка получения плейлиста'));
    }
}

export const fetchFeaturedPlaylists = (token: string) => async (dispatch: AppDispatch) =>{
    try {
        dispatch(featuredPlaylistFetching());

        const res = await fetch('https://api.spotify.com/v1/browse/featured-playlists?country=RU', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        const data = await res.json();

        if (data.error) {
            dispatch(featuredPlaylistFetchingError(data.error));
        }
        dispatch(featuredPlaylistFetchingSuccess(data));
    } catch (e) {
        dispatch(featuredPlaylistFetchingError('Ошибка получения плейлиста'));
    }
}

export const fetchNewReleasesPlaylist = (token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(newReleasesPlaylistFetching());

        const res = await fetch('https://api.spotify.com/v1/browse/new-releases?country=RU', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        const data = await res.json();

        if (data.error) {
            dispatch(newReleasesPlaylistFetchingError(data.error));
        }
        dispatch(newReleasesPlaylistFetchingSuccess(data));
    } catch (e) {
        dispatch(newReleasesPlaylistFetchingError('Ошибка получения плейлиста'));
    }
}