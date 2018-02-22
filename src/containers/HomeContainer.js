import { connect } from 'react-redux';
import Home from '../components/Home';
import {saveHomeData} from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        todayWeather: state.HomeReducer.todayWeather
    }
}

const mapDispatchToProps = (dispatch) => {
return{
    saveHomeData : (data) =>dispatch( saveHomeData(data) )
}

}
debugger;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
