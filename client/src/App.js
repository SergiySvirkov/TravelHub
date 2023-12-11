import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import Booking from './pages/Booking';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={SearchResult} />
        <Route path="/booking" component={Booking} />
        <Route path="/profile" component={UserProfile} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;
