
import { SidebarContent } from 'react-pro-sidebar';
import {  BrowserRouter as Router, Route,} from 'react-router-dom';
import GenBtn from './component/genericBtn';

import Header from './containers/Header';
import ProductsListing from './containers/ProductListing';
import ProductDetail from './containers/ProductsDetail';
import ReduxForm from './containers/ReduxForm';
import Sidebar from './containers/Sidebar';
import Data from "./containers/Data"
import Login from './containers/Login';

function App() {
  return (
    <Router>
  
   <switch>
  
   
<Header/>
<Route path ="/Login" component={Login}/>

   <Route path ="/Sidebar" component={Sidebar}/>
   <Route path ="/Data"   component={Data}/>
   <Route path="/" exact component={ProductsListing}/>
   <Route path="/Product/:ProductId" exact component={ProductDetail}/>
   <Route> </Route>
   
  
   </switch>
   </Router>
  );
}

export default App;
