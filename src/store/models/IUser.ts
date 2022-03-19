import { Image } from "./types";

export interface IUser {
    display_name: string,
    external_urls: {
        spotify: string
    },
    followers: {
        href: string,
        total: number
    },
    href: string,
    id: string,
    images: Image[],
    type: string,
    uri: string
}
