import { IUser } from "./IUser";
import { Image, Tracks } from "./types";

export interface IPlaylist {
    collaborative: boolean,
    description: string,
    external_urls: {
        spotify: string
    },
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
    tracks: Tracks,
    type: string,
    uri: string
}
export interface IAlbum {
    album_type: string,
    artists: [],
    available_markets: [],
    external_urls: {
        spotify: string
    },
    href: string,
    id: string,
    images: Image[],
    name: string,
    release_date:  string,
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