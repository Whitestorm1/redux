import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/store";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './containers/Sidebar';
import Table from './containers/Data';
import Data from './containers/Data';


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
<App/>

   
    
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

