import logo from '../../assets/images/spotify-logo.png';
import { SidebarLink } from './sidebarLink';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { useEffect } from 'react';
import { fetchPlaylistUser } from '../../store/reducers/actionCreator';
import { Link } from 'react-router-dom';

export const Sidebar: React.FC = () => {
    const dispatch = useAppDispatch();
    const token = useAppSelector(token => token.spotifySlice.token.access_token);
    const user = useAppSelector(user => user.userSlice.user);
    const { playlist } = useAppSelector(playlist => playlist.playlistSlice);
    
    useEffect(() => {
        if(user.id){
            dispatch(fetchPlaylistUser(token, user?.id));
        }
    }, [dispatch, token, user.id]);

    return (
        <nav className="nav-bar">
            <div className='sidebar'>
                <div className="sidebar__logo">
                    <a href="/">
                        <img
                            src={logo}
                            alt="Spotify logo"
                            className="banner" />
                    </a>
                </div>
                <ul className='nav-link'>
                    <SidebarLink name='Главная' Icon={HomeIcon} link='/'/>
                    <SidebarLink name='Поиск' Icon={SearchIcon} link='/search'/>
                    <SidebarLink name='Моя медиатека' Icon={LibraryMusicIcon}  link='/collection'/>
                </ul>
                <div className='playlist'>
                    {
                        playlist && playlist.items.map(item => (
                            <Link to={'/playlist/'+  item.id} key={item.id}>{item.name}</Link>
                        ))
                    }
                </div>
            </div>
        </nav>
    )
}