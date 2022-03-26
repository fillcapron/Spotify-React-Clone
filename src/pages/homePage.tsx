import React from "react";
import { useEffect } from "react"
import Playlist from "../components/Playlists/playlists";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchNewReleasesPlaylist, fetchFeaturedPlaylists } from "../store/reducers/actionCreator";

const HomePage: React.FC = () => {
    const token = useAppSelector(token => token.spotifySlice.token.access_token);
    const featuredPlaylist = useAppSelector(featured => featured.featuredPlaylistSlice.response);
    const newReleasesPlaylist = useAppSelector(newReleases => newReleases.newReleasesPlaylistSlice.albums);
    const dispatch = useAppDispatch();

    useEffect(() => {

        if (token) {
            dispatch(fetchFeaturedPlaylists(token));
            dispatch(fetchNewReleasesPlaylist(token));
        }
    }, [token, dispatch]);

    console.log('home render')

    return (
        <div className="content spacing pt">
            {
                featuredPlaylist.playlists.items.length && newReleasesPlaylist.items.length ?
                    <>
                        <Playlist items={featuredPlaylist.playlists.items} title={featuredPlaylist.message} link={'featured'} unfold={false} />
                        <Playlist items={newReleasesPlaylist.items} title={"Новые релизы"} link={'newReleases'} unfold={false} />
                    </> : ''
            }
        </div>
    )
}

export default HomePage;