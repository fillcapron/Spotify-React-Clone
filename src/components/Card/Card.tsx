
interface IProps {
    url: string,
    title: string,
    description: string
}

export const Card: React.FC<IProps> = ({ url, title, description }) => {
    return (
        <div className="card">
            <img className="card_image" src={url} alt={title}/>
            <span className="card_title ellipsis">{title}</span>
            {
                description ?
                <div className="card_description ellipsis">{description}</div>
                : ''
            }
        </div >
    )
}