import React from 'react';
import * as Constants from '../common/constants';

export default class WeeklyReport extends React.Component{

    constructor(props){
        super(props);

        
        
    }

    componentDidMount(){
       
        fetch(Constants.WEEKLY_URL + this.props.match.params.city)
        .then( (response) => response.json())
        .then( (res) => this.props.saveWeeklyData(res))
    }

    render(){
        console.log(this.props.weeklyReportData)
        return(
            <div> hello </div>

        );
    }
}