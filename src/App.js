import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
        <Route path="*" component={ NotFound } />
      </Switch>
      <br />
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
    </BrowserRouter>
  );
}

export default App;
