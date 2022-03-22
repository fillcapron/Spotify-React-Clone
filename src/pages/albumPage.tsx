import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { PlaylistHeader } from "../components/Playlist/playlistHeader";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchAlbum } from "../store/reducers/actionCreator";

export const AlbumPage: React.FC = () => {
    const token = useAppSelector(token => token.spotifySlice.token);
    const album = useAppSelector(album => album.albumSlice.album);
    const dispatch = useAppDispatch();

    const { id } = useParams();

    useEffect(() => {
        if (token.access_token) {
            dispatch(fetchAlbum(token.access_token, id));
        }
    }, [dispatch, token.access_token, id])


    return (
        <div className="playlistPage">
            <PlaylistHeader
                img={album.images[0]?.url}
                type={album.type}
                name={album.name}
                description={''}
                artists={album.artists[0]?.name}
                date={album.release_date.split('-')[0]}
                totalTracks={album.total_tracks}
            />
            <div className="playlistPage_tracklist">
                AlbumPage
            </div>
        </div>
    )
}