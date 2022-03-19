import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { useAppDispatch } from './hooks/redux';
import { HomePage } from './pages/homePage';
import { UserPage } from './pages/userPage';
import { SearchPage } from './pages/searchPage';
import { loginSpotify } from './store/reducers/actionCreator';
import "./style.scss";
import { AuthPage } from './pages/authPage';
import { GenrePage } from './pages/genrePage';
import { PlaylistPage } from './pages/playlistPage';

const clientId = 'f03d452f6b3647c38ab26ad5f8cc8629';
const secret = '8848ff822526499f9d0ba968f87807b3';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loginSpotify(clientId, secret));
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage/>} />
                <Route path='/playlist/:id' element={<PlaylistPage />} />
                <Route path='/album/:id' element={<PlaylistPage />} />
                <Route path='/genre/:id' element={<GenrePage />} />
                <Route path='/user/:id' element={<UserPage />} />
                <Route path='/search' element={<SearchPage />} />
              </Route>
              <Route path='/login' element={<AuthPage/>}/>
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
