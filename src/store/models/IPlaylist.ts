import { IUser } from "./IUser";
import { External_urls, Image, Tracks } from "./types";

export interface IPlaylist {
    collaborative: boolean,
    description: string,
    external_urls: External_urls,
    followers: {
        href: null,
        total: number
    }
    href: string,
    id: string,
    images: Image[],
    name: string,
    owner: Omit<IUser, 'followers' | 'images'> | IUser,
    primary_color: string | null,
    public: boolean,
    snapshot_id: string,
    tracks: IPlaylistBody<ITracks>,
    type: string,
    uri: string
}
export interface IAlbum {
    album_type: string,
    artists: IArtist[],
    available_markets: string[],
    external_urls: External_urls,
    href: string,
    id: string,
    images: Image[],
    name: string,
    tracks: IPlaylistBody<Omit<ITrack, 'album' | 'episode' | 'explicit' | 'popularity' | 'track'>>,
    release_date: string,
    release_date_precision: string,
    total_tracks: number,
    type: string,
    uri: string
}
export interface IPlaylistBody<T> {
    href: string,
    items: T[],
    limit: number,
    next: string | null,
    offset: number,
    previous: string | null,
    total: number
}
export interface INewReleases {
    albums: IPlaylistBody<IAlbum>
}

export interface IFeaturedPlaylist {
    message: string,
    playlists: IPlaylistBody<IPlaylist>
}

interface IArtist {
    external_urls: External_urls,
    followers: {
        href: null | string,
        total: number
    },
    genre: string[],
    href: string,
    id: string,
    images: Image[],
    name: string,
    popularity: number,
    type: string,
    uri: string
}

export interface ITracks {
    added_at: string,
    added_by: {
        external_urls: External_urls,
        href: string,
        id: string,
        type: string,
        uri: string
    },
    is_local: boolean,
    primary_color: null,
    track: ITrack,
    video_thumbnail: {
        url: null | string
    }
}
export interface ITrack {
    album: IAlbum,
    artists: Omit<IArtist, 'images' | 'followers' | 'genre' | 'popularity'>[],
    avaible_markets: string[],
    disc_number: number,
    duration_ms: number,
    episode: boolean,
    explicit: boolean,
    external_ids: {
        isrc: string
    },
    external_urls: External_urls,
    href: string,
    id: string,
    is_local: boolean,
    name: string,
    popularity: number,
    preview_url: string,
    track: boolean,
    track_number: number,
    type: string,
    uri: string
}