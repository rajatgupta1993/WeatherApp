import React from 'react';
import * as Constants from '../common/constants';

export default class Home extends React.Component{

  constructor(){
        super();
       
    }

    componentDidMount(){
    fetch(Constants.BASE_URL)
    .then((response) => response.json())
    .then(res => this.props.saveHomeData(res))
}
    
    render(){
        console.log(this.props.todayWeather);
        return(
            <div style={{width:'100%' , height:'100%'}}> this is home</div> 
        )
    }
}