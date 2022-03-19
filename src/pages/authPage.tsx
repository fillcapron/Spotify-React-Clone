import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from '../assets/images/spotify-logo.png';
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchUser } from "../store/reducers/actionCreator";

const Layout = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background: #000;
`;
const Img = styled.img`
    margin: 50px 0;
    height: 100px;
    max-width: 300px;
    width: 100%;
`;

const Input = styled.input`
    width: 300px;
    height: 40px;
    border: 0;
`;

const Label = styled.label`
    color: white;
    font-size: 16px
`;

const Button = styled.button`
    border: 0px;
    background: #1ed760;
    font-weight: 700;
    border-radius: 500px;
    padding: 14px 32px;
`

export const AuthPage: React.FC = () => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const token = useAppSelector(token => token.spotifySlice.token.access_token);

    const handler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUserName(e.target.value);
    }

    const login = () => {
        if (token && userName) {
            dispatch(fetchUser(token, userName, true));
            navigate('/');
        }
    }

    return (
        <div>
            <Layout>
                <div>
                    <Img
                        src={logo}
                        alt="Spotify logo"
                        className="banner" />
                </div>
                <Label>Введите имя профиля</Label>
                <Input value={userName} onChange={handler} />
                <Button onClick={login}>Войти</Button>
            </Layout>
        </div>
    )
}