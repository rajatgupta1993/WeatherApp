import * as ActionTypes from '../common/actionTypes';

const initialState= {
    weeklyReport:{}
};

export default function WeeklyReportReducer(state=initialState, action){
    switch(action.type){

        case ActionTypes.SAVE_WEEKLY_DATA:
            return {...state, weeklyReport:action.data}
        
        default: return state
    }
}