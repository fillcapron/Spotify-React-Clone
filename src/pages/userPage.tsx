import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { fetchUser } from "../store/reducers/actionCreator";


export const UserPage: React.FC = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const token = useAppSelector(token => token.spotifySlice.token);
    const { user } = useAppSelector(user => user.userSlice);
    const { playlist } = useAppSelector(playlist => playlist.userPlaylistSlice);

    const isLogin = localStorage.getItem('user');

    useEffect(() => {

        if (!isLogin && token.access_token && id) {
            dispatch(fetchUser(token.access_token, id, false));
        }
    }, [dispatch, token.access_token, id, isLogin])

    return (
        <div>
            <div className="user-profile">
                <div className="image">img</div>
                <div className="name">
                    <div>Профиль</div>
                    <span>{user.display_name}</span>
                    <div>Плейлист</div>
                </div>
            </div>
            <div>{playlist.items?.map(item => {
                return (
                    <span key={item.id}>{item.name}</span>
                )
            })}</div>
        </div>
    )
}