import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/store';
import FavoritesList from './Containers/FavoritesList/FavoritesList';
import Home from './Containers/Home/Home';
import Messages from './Containers/Messages/Messages';
import UserProfile from './Containers/UserProfile/UserProfile';
import './styles.css';
import { BrowserRouter as Router,
          Route } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div className="main-site-div">
          <Route exact path="/" component={Home}/>
          <Route exact path="/favorites" component={FavoritesList}/>
          <Route exact path="/messages" component={Messages}/>
          <Route exact path="/user" component={UserProfile}/>
        </div>
      </Router>
    </Provider>,
  document.getElementById('root')
);
