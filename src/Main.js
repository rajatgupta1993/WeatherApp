import  React  from 'react';
import * as Constants from './common/constants'; 
import HomeContainer from './containers/HomeContainer';
import { Route, BrowserRouter, Link, Switch, Redirect } from 'react-router-dom';

export default class Main extends React.Component{
render(){
  return(
      <BrowserRouter>
      <div>
        <Route path='/home' component={HomeContainer}/>
      
        </div>
      </BrowserRouter>
  )
}
}