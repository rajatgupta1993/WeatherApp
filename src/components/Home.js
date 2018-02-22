import React from 'react';
import * as Constants from '../common/constants';
import Searchbox from './SearchBox';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            searchText: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSearchClicked = this.onSearchClicked.bind(this);
    }

    onValueChange(e) {
        this.setState({
            searchText: e.target.value
        })
    }

    onSearchClicked() {
        fetch(Constants.BASE_URL + this.state.searchText)
            .then((response) => response.json())
            .then(res => this.props.saveHomeData(res))
    }

    // componentDidMount() {
    //     fetch(Constants.BASE_URL)
    //         .then((response) => response.json())
    //         .then(res => this.props.saveHomeData(res))
    // }

    render() {

        const { todayWeather } = this.props;
        console.log(todayWeather);

        let date = new Date().toLocaleDateString();
        
        return (
            <div >
                <Searchbox searchText={this.state.searchText}
                    onValueChange={this.onValueChange}
                    onSearchClicked={this.onSearchClicked}
                />

                {(todayWeather.main != null) && (<div className="search-box-container">


                    <div className="search-box-container">
                        <div className="search-box-container">
                            <div className="weather-info">
                                <div className="weather-info-label"> {`Today's Weather - ${date}`} </div>
                                <div className="main-temp-text"> {`Current Temperature : ${todayWeather.main.temp}`}&#8451; </div>
                               <div className="main-temp-text">{`Humidity : ${todayWeather.main.humidity}`}</div>
                               <div className="main-temp-text">{`Presuure : ${todayWeather.main.pressure}`}</div>
                               <Link to={`/Weekly/${this.state.searchText}`}>
                                <div style={{color:#fff, }}>See Weekly Weather Status</div>
                               </Link>
                            </div>
                        </div>
                    </div>
                </div>)}

            </div>
        )
    }
}