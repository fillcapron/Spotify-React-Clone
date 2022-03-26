import { ITrack, ITracks } from '../../store/models/IPlaylist';
import { ContentTrackRow } from './contentTrackRow';

interface IProps {
    type: string,
    items: ITracks[] | Omit<ITrack, 'album' | 'episode' | 'explicit' | 'popularity' | 'track'>[]
}

export const ContentTrackList: React.FC<IProps> = ({ items, type }) => {

    return (
        <div className="spacing">
            <div className="content-tracklist__header">
                <div className="content-tracklist__header-columns grid">
                    <div>#</div>
                    <div>Название</div>
                    {
                        type === 'playlist' && <div>Альбом</div>
                    }
                    <div><svg role="img" height="16" width="16" viewBox="0 0 16 16" className="svg"><path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"></path><path d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z"></path></svg></div>
                </div>
            </div>
            <div className="content-tracklist__list">
                {
                    items.length && items.map((item, i) => (
                       <div key={i}>
                       {
                           "track" in item ?
                           item.track &&
                           <ContentTrackRow index={i + 1} name={item.track?.name} artist={item.track?.artists.map(artist => artist.name).join(', ')} album={item.track?.album.name} img={item.track?.album.images[0].url} duration={item.track?.duration_ms}/>
                           : <ContentTrackRow index={i === 0 ? i + 1 : i} name={item.name} artist={item.artists.map(artist => artist.name).join(', ')} duration={item.duration_ms}/>
                       }
                       </div>
                    ))
                }
            </div>
        </div>
    )
}