import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { ContentButtons } from "../components/Content/contentButtons";
import { HeaderContent } from "../components/Content/contentHeader";
import { ContentTrackList } from "../components/Content/contentTrackList";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchPlaylist } from "../store/reducers/actionCreator";

export const PlaylistPage: React.FC = () => {
    const token = useAppSelector(token => token.spotifySlice.token);
    const playlist = useAppSelector(playlist => playlist.playlistSlice.playlist);
    const dispatch = useAppDispatch();

    const { id } = useParams();

    useEffect(() => {
        if (token.access_token) {
            dispatch(fetchPlaylist(token.access_token, id));
        }
        document.title = "Spotify - " + playlist.name;
    }, [dispatch, token.access_token, id, playlist.name])

    return (
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
            <ContentButtons/>
            <ContentTrackList type={'playlist'} items={playlist.tracks.items}/>
        </div>
    )
}