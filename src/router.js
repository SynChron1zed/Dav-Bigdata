import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Data from './routes/Data';
import Login from './routes/Login';
import Home from './routes/Home';
import Indata from './routes/Indata';
import Sztjdata from './sztjroutes/Sztjdata';
import Layout from './components/Layout';
import User from './routes/User';
import Model from './routes/Model';



export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/data" component={IndexPage} />
      <Route path="/" component={Data} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/layout" component={Layout}/>
      <Route path="/indata" component={Indata}/>
      <Route path="/sztjdata" component={Sztjdata}/>
      <Route path="/user" component={User}/>
      <Route path="/model" component={Model}/>
    </Router>
  );
};
