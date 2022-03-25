import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { ContentButtons } from "../components/Content/contentButtons";
import { HeaderContent } from "../components/Content/contentHeader";
import { ContentTrackList } from "../components/Content/contentTrackList";
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
        <div>
            <HeaderContent
                img={album.images[0]?.url}
                type={album.type}
                name={album.name}
                description={''}
                artists={album.artists[0]?.name}
                date={album.release_date.split('-')[0]}
                totalTracks={album.total_tracks}
            />
            <ContentButtons/>
            <ContentTrackList type={'album'} items={album.tracks.items}/>
        </div>
    )
}