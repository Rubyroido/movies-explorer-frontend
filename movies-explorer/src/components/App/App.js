import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from './ProtectedRoute';
import * as mainApi from '../../utils/MainApi';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import InfoToolTip from '../InfoToolTip/InfoToolTip';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true : false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [infoToolTipOpened, setInfoToolTipOpened] = useState(false);
  const [infoToolTipMessage, setInfoToolTipMessage] = useState('');

  const navigate = useNavigate();

  React.useEffect(() => {
    if (isLoggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
        .then(([data, items]) => {
          const saved = items.filter((m) => m.owner === data._id);

          setCurrentUser(data);
          setSavedMovies(saved);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [isLoggedIn])

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.validate(token)
        .then(() => {
          setIsLoggedIn(true);
        })
        .catch((err) => {
          setIsLoggedIn(false);
          console.log(err);
        })
    }
  }, [])

  function onLogin({ email, password }) {
    mainApi.authorize(email, password)
      .then((data) => {
        if (data.token) {
          setIsLoggedIn(true);
          navigate('/movies')
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
        setInfoToolTipOpened(true)
        setInfoToolTipMessage(err)
        console.log(err);
      })
  }

  function onRegister({ name, email, password }) {
    mainApi.register(name, email, password)
      .then(() => {
        onLogin({ email, password })
      })
      .catch((err) => {
        setInfoToolTipOpened(true)
        setInfoToolTipMessage(err)
        console.log(err);
      })
  }

  function onSignOut() {
    setIsLoggedIn(false);
    navigate('/signin');
    setSavedMovies([]);
    localStorage.removeItem('token');
  }

  function handleUpdateUser({ name, email }) {
    mainApi.updateProfile(name, email)
      .then((data) => {
        setCurrentUser(data)
      })
      .catch((err) => {
        setInfoToolTipOpened(true)
        setInfoToolTipMessage(err)
        console.log(err);
      })
  }

  function handleSaveMovie(movie) {
    mainApi.saveMovie(movie)
      .then((data) => {
        setSavedMovies([data, ...savedMovies]);
      })
      .catch((err) => {
        setInfoToolTipOpened(true)
        setInfoToolTipMessage(err)
        console.log(err);
      })
  }

  function handleDeleteMovie(movie) {
    const savedMovie = savedMovies.find((m) => {
      return m.movieId === (movie.id || movie.movieId)
    })
    const newSavedMovies = savedMovies.filter((m) => m.movieId !== (movie.id || movie.movieId))

    mainApi.deleteMovie(savedMovie._id)
      .then(() => {
        setSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        setInfoToolTipOpened(true)
        setInfoToolTipMessage(err)
        console.log(err);
      })
  }

  function handleClose() {
    setInfoToolTipOpened(false)
    setInfoToolTipMessage('')
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Preloader isLoading={isLoading} />
        <InfoToolTip isOpen={infoToolTipOpened} message={infoToolTipMessage} onClose={handleClose} />
        <Routes>
          <Route path="/" exact element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Main />
              <Footer />
            </>
          } />

          <Route path="movies" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Header isLoggedIn={isLoggedIn} />
              <Movies
                savedMovies={savedMovies}
                onSaveMovie={handleSaveMovie}
                onDeleteMovie={handleDeleteMovie}
                setIsLoading={setIsLoading}
                setInfoToolTipOpened={setInfoToolTipOpened}
                setInfoToolTipMessage={setInfoToolTipMessage}
              />
              <Footer />
            </ProtectedRoute>
          } />

          <Route path="saved-movies" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Header isLoggedIn={isLoggedIn} />
              <SavedMovies
                savedMovies={savedMovies}
                onDeleteMovie={handleDeleteMovie}
                setInfoToolTipOpened={setInfoToolTipOpened}
                setInfoToolTipMessage={setInfoToolTipMessage}
              />
              <Footer />
            </ProtectedRoute>
          } />

          <Route path="profile" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Header isLoggedIn={isLoggedIn} />
              <Profile
                onSignOut={onSignOut}
                onUpdateUser={handleUpdateUser}
              />
            </ProtectedRoute>
          } />

          <Route path="signin" element={
            <Login
              onLogin={onLogin}
            />
          } />

          <Route path="signup" element={
            <Register
              onRegister={onRegister}
            />
          } />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
