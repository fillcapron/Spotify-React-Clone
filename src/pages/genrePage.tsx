import { useLocation } from "react-router-dom"
import Playlist from "../components/Playlists/playlists";

export const GenrePage: React.FC = () => {

    const { state } = useLocation();

    return (
        <div className="content spacing">
            {
                state ?
                    <Playlist items={state} />
                    :
                    []
            }
        </div>
    )
}