import React from 'react';
import * as Constants from '../common/constants';

export default class WeeklyReport extends React.Component {

    componentDidMount() {

        fetch(Constants.WEEKLY_URL + this.props.match.params.city)
            .then((response) => response.json())
            .then((res) => this.props.saveWeeklyData(res))
    }

    render() {
        const { weeklyReportData } = this.props;
        console.log(weeklyReportData);

        return (
            <div >
                {(weeklyReportData.list) && (
                    weeklyReportData.list.map((item) => (
                        <ul className="weekly-ul" >
                            <li>
                                <div style={{ width: '200px', backgroundColor: 'rgba(51,51,51,0.7)'}}>
                                    <div className="week-weather-info-label"> {`Today's Weather - ${new Date(item.dt).toLocaleDateString()}`} </div>
                                    <div style={{ padding: '10px' }}>
                                        <div className="weekly-temp-text"> {`Min Temperature : ${item.temp.min}`}&#8451; </div>
                                        <div className="weekly-temp-text"> {`Max Temperature : ${item.temp.max}`}&#8451; </div>
                                        <div className="weekly-temp-text">{`Humidity : ${item.humidity}`}</div>
                                        <div className="weekly-temp-text">{`Pressure : ${item.pressure}`}</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    ))
                )}
            </div>

        );
    }
}