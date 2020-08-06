import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './css/mainContents.css';
import Header from './components/header/Header';
import VideoPage from './components/content/VideoPage/VideoPage';
import SearchResult from './components/content/SearchResult';
import NotFound from './components/content/NotFound';
import InitialPage from './components/content/InitialPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={InitialPage} />
          <Route path="/watch/:videoId">
            <VideoPage />
          </Route>
          <Route exact path="/results/:searchParam">
            <SearchResult />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
