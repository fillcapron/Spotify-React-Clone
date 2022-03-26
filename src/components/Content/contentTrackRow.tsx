import { millisToMinutesAndSeconds } from "../../utils/utils"

interface IProps {
    index: number,
    img?: string,
    name: string,
    artist: string,
    album?: string
    duration: number
}

export const ContentTrackRow: React.FC<IProps> = ({ index, name, artist, duration, img = '', album = '' }) => {
    return (
        <div className='content-track grid'>
            <div>{index}</div>
            {
                img ?
                    <div className='item-info'>
                        <img src={img} width="40" height="40" alt={name} />
                        <div className='album'>
                            <span>{name}</span>
                            <span>{artist}</span>
                        </div>
                    </div>

                    : <div className='album'>
                        <span>{name}</span>
                        <span>{artist}</span>
                    </div>
            }
            {album && <div>{album}</div>}
            <div>{millisToMinutesAndSeconds(duration)}</div>
        </div>
    )
}