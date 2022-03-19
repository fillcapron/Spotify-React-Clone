import { useNavigate } from "react-router-dom"

interface IProps {
    img: string,
    title: string,
    description: string,
    url: string
}

export const Card: React.FC<IProps> = ({ img, title, description, url }) => {
    const navigate = useNavigate();

    return (
        <div className="card" onClick={() => navigate(url)}>
            <img className="card_image" src={img} alt={title} />
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