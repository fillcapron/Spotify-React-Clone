
interface IProps {
    img: string,
    type: string,
    name: string,
    description?: string,
    artists: string,
    followers?: number | undefined,
    date?: string | undefined
    totalTracks: number
}

export const PlaylistHeader: React.FC<IProps> = ({ img, type, name, description, artists, followers, totalTracks, date }) => {
    return (
        <div className="playlistPage_header spacing">
            <div className="playlistPage_header-image">
                <img src={img} className="img" alt={name} />
            </div>
            <div className="playlistPage_header-info">
                <h2 className="type">{type === 'playlist' ? 'Плейлист' : 'Альбом'}</h2>
                <span><h1 className="name">{name}</h1></span>
                <h2 className="description">{description}</h2>
                <div className="stats">
                    <div className="username">
                        <span>{artists}</span>
                    </div>
                    {
                        followers ?
                         <span className="stats_followers">{followers} подписчиков</span>
                         :
                         <span className="stats_followers">{date}</span>
                    }
                    <span className="stats_followers">{totalTracks} треков</span>
                </div>
            </div>
        </div>
    )
}