import { ITrack, ITracks } from '../../store/models/IPlaylist';
import { millisToMinutesAndSeconds } from '../../utils/utils';

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
                    items.map((item, i) => (
                        <div className='content-tracklist__list-item grid' key={i}>
                            <div>{i + 1}</div>
                            {
                                'track' in item ?
                                    <div className='item-info'>
                                        <img src={item.track.album.images[0].url} width="40" height="40" alt={item.track.name}/>
                                        <div className='album'>
                                            <span>{item.track.name}</span>
                                            <span>{item.track.artists.map(artist => artist.name).join(', ')}</span>
                                        </div>
                                    </div>

                                    : <div className='album'>
                                        <span>{item.name}</span>
                                        <span>{item.artists.map(artist => artist.name).join(', ')}</span>
                                    </div>
                            }
                            {
                                'track' in item && <div>{item.track.album.name}</div>
                            }
                            <div>{'track' in item ? millisToMinutesAndSeconds(item.track.duration_ms) : millisToMinutesAndSeconds(item.duration_ms)}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}