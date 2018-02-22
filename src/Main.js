import React from 'react';
import HomeContainer from './containers/HomeContainer';
import WeeklyReportContainer from './containers/WeeklyReportContainer'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

debugger;
export default class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        
          <Switch>
            <Route path='/home' component={HomeContainer} />
            <Route path='/weekly/:city' component={WeeklyReportContainer} />
            <Redirect from="/" to="/home" />
          </Switch>
        
      </BrowserRouter>

      // <BrowserRouter >
        
      //       <Switch>
      //         <Route path="/home" component={HomeContainer} />
      //         <Route path='/weekly' component={WeeklyReportContainer} />
      //         <Redirect from="/" to="/home" />
      //       </Switch>
         
      // </BrowserRouter>

      // <HomeContainer/>

    )
  }
}