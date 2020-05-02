/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './index.css';
import './example.css';
import { createBrowserHistory } from 'history';
import App from './page-admin';
import Backend from './backend';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

const backend = new Backend();

const Nav = (props) => (
  <ol className="nav">
    {props.pages.map((page) => (
      <li>
        <Link to={`pages/${page.id}`} replace>
          {page.title}
        </Link>
      </li>
    ))}
  </ol>
);

const StaticPage = (props) => {
  const id = props.match.params.page || 1;

  const pages = backend
    .all()
    .filter((page) => page.id == id);

  if (pages.length < 1) {
    return <div>not found</div>;
  }

  return (
    <div className="page">
      <h1>{pages[0].title}</h1>
      {pages[0].body}
      <Link to="/"> Back</Link>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <Nav pages={backend.all()} />
          <App backend={backend} />
        </Route>
        <Route
          path="/pages/:page"
          render={(props) => (<StaticPage {...props} backend={backend} />
          )}
        />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
