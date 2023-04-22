import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <page className="app">
      <Routes>
        <Route path="/" exact element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        } />

        <Route path="/movies" element={
          <>
            <Header />
          </>
        } />

        <Route path="/saved-movies" element={
          <>
            <Header />
          </>
        } />

        <Route path="/profile" element={
          <>
            <Header />
          </>
        } />

        {/* <Route path="/signin" element={ } />

        <Route path="/signup" element={ } /> */}
      </Routes>
    </page>
  );
}

export default App;
