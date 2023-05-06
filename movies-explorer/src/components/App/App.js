import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from  '../Register/Register';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" exact element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        } />

        <Route path="movies" element={
          <>
            <Header />
            <Movies />
            <Footer />
          </>
        } />

        <Route path="saved-movies" element={
          <>
            <Header />
            <Movies />
            <Footer />
          </>
        } />

        <Route path="profile" element={
          <>
            <Header />
            <Profile />
          </>
        } />

        <Route path="signin" element={ <Login /> } />

        <Route path="signup" element={ <Register /> } />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
