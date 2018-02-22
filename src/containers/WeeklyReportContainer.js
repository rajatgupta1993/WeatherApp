import { connect } from 'react-redux';
import WeeklyReport from '../components/WeeklyReport';
import {saveWeeklyData} from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        weeklyReportData: state.WeeklyReportReducer.weeklyReport
    }
}

const mapDispatchToProps = (dispatch) => {
return{
    saveWeeklyData : (data) =>dispatch( saveWeeklyData(data) )
}

}
debugger;
export default connect(mapStateToProps, mapDispatchToProps)(WeeklyReport);
