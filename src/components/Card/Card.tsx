
interface IProps {
    url: string,
    title: string,
    description: string
}

export const Card: React.FC<IProps> = ({ url, title, description }) => {
    return (
        <div className="card">
            <img className="card_image" src={url} alt={title} />
            <div className="card_info">
                <span className="card_info-title ellipsis">{title}</span>
                {
                    description ?
                        <div className="card_info-description ellipsis">{description}</div>
                        : ''
                }
            </div>
        </div >
    )
}