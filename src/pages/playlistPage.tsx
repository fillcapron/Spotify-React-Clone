import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { ContentButtons } from "../components/Content/contentButtons";
import { HeaderContent } from "../components/Content/contentHeader";
import { ContentTrackList } from "../components/Content/contentTrackList";
import Loading from "../components/Loading/loading";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchPlaylist } from "../store/reducers/actionCreator";

export const PlaylistPage: React.FC = () => {
    const { access_token } = useAppSelector(token => token.spotifySlice.token);
    const { playlist, isLoading, error } = useAppSelector(playlist => playlist.playlistSlice);
    const dispatch = useAppDispatch();

    const { id } = useParams();

    useEffect(() => {
        if (access_token && id) {
            dispatch(fetchPlaylist(access_token, id));
        }

    }, [dispatch, access_token, id])

    useEffect(() => {
        document.title = "Spotify - " + playlist.name;
    }, [playlist.name])

    if (isLoading) return <Loading/>
    if (error) return <div>Error</div>

    return (
        <>
            {
                playlist.name &&
                    <div>
                        <HeaderContent
                            img={playlist.images[0]?.url}
                            type={playlist.type}
                            name={playlist.name}
                            description={playlist.description}
                            artists={playlist.owner.id}
                            followers={playlist.followers.total}
                            totalTracks={playlist.tracks.total}
                        />
                        <ContentButtons />
                        <ContentTrackList type={'playlist'} items={playlist.tracks.items} />
                    </div>
            }
        </>
    )
}

export default React.memo(PlaylistPage);