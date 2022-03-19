import { useNavigate, NavLink } from 'react-router-dom';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useAppSelector } from '../../hooks/redux';
import { useEffect, useRef, useState } from 'react';

export const Topbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isLogin = localStorage.getItem('user');

    const ref = useRef<HTMLDivElement>(null);
    const user = useAppSelector(user => user.userSlice.user);

    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const goForward = () => navigate(1);

    useEffect(() => {
        const checkOpen = (e: React.ChangeEvent<HTMLInputElement> | any) => {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('click', checkOpen);

        return () => {
            document.removeEventListener('click', checkOpen);
        }

    }, [isOpen])

    const logout = () => {
        localStorage.removeItem('user');
        setIsOpen(false);
        window.location.reload();
    }

    return (
        <header className="topbar">
            <div className="topbar__content">
                <div className="buttons">
                    <button className='buttons-arrow' onClick={goBack}>
                        <ArrowBackIosOutlinedIcon fontSize="small" />
                    </button>
                    <button className='buttons-arrow' onClick={goForward}>
                        <ArrowForwardIosOutlinedIcon fontSize="small" />
                    </button>
                </div>
                <div ref={ref}>
                    {
                        isLogin && user.id ?
                            <>
                                <button className="button-profile" onClick={() => setIsOpen(!isOpen)}>
                                    <figure>{
                                        user.images?.length ? '' : <PermIdentityIcon />
                                    }</figure>
                                    <span className='user-name'>{user.display_name}</span>
                                    {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                </button>
                            </>
                            :
                            <NavLink to={'/login'}>
                                <button className='button-login'>Войти</button>
                            </NavLink>
                    }
                    {
                        isOpen ?
                            <div className='submenu'>
                                <div className="menu">
                                    <ul onClick={() => setIsOpen(false)}>
                                        <li>
                                            <NavLink to={'/user/' + user?.id}>
                                                <button>Аккаунт</button>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/user/' + user?.id}>
                                                <button> Профиль</button>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <button onClick={logout}>Выйти</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            :
                            ''
                    }
                </div>
            </div>
        </header>
    )
}