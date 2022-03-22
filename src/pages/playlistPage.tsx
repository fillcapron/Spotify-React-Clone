import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { PlaylistHeader } from "../components/Playlist/playlistHeader";
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
    }, [ dispatch, token.access_token, id])


    return (
        <div className="playlistPage">
            <PlaylistHeader 
            img={playlist.images[0]?.url} 
            type={playlist.type} 
            name={playlist.name} 
            description={playlist.description} 
            artists={playlist.owner.id} 
            followers={playlist.followers.total} 
            totalTracks={playlist.tracks.total}
            />
            <div className="playlistPage_tracklist">
                PlaylistPage
            </div>
        </div>
    )
}