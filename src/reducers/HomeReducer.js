import * as ActionTypes from '../common/actionTypes';

const initialState = {
    todayWeather:{}
};

export default function HomeReducer(state=initialState, action){
    switch(action.type){

        case ActionTypes.SAVE_HOME_DATA: 
            return {...state, todayWeather:action.data};

        default: 
            return state;
    }
} 