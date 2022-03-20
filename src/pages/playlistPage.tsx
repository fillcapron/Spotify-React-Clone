import { useEffect } from "react";
import { useParams } from "react-router-dom"
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
    }, [id, dispatch, token.access_token])


    return (
        <div className="playlistPage">
            <div className="playlistPage_header spacing">
                <div className="playlistPage_header-image">
                    <img src={playlist.images[0]?.url} className="img" alt={playlist.name}/>
                </div>
                <div className="playlistPage_header-info">
                    <h2 className="type">{playlist.type === 'playlist' ? 'Плейлист' : 'Альбом'}</h2>
                    <span><h1 className="name">{playlist.name}</h1></span>
                    <h2 className="description">{playlist.description}</h2>
                    <div className="stats">
                        <div className="username">
                            <span>{playlist.owner.id}</span>
                        </div>
                        <span className="stats_followers">{playlist.followers.total} подписчиков</span>
                        <span className="stats_followers">{playlist.tracks.total} треков</span>
                    </div>
                </div>
            </div>
            <div className="playlistPage_tracklist">
                PlaylistPage
            </div>
        </div>
    )
}