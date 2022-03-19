import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import useLocalStorage from '../../hooks/useLocalStorage';
import { fetchUser } from '../../store/reducers/actionCreator';
import { Sidebar } from '../Sidebar/Sidebar';
import { Topbar } from '../Topbar/Topbar';


export const Layout: React.FC = () => {
    const dispatch = useAppDispatch();
    const [login,] = useLocalStorage('user');
    const token = useAppSelector(token => token.spotifySlice.token.access_token);

    useEffect(() => {
        if (token && login) {
            dispatch(fetchUser(token, login.id, true));
        }
    }, [dispatch, token, login])

    return (
        <div className='container'>
            <Sidebar />
            <div className='main'>
                <Topbar />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}