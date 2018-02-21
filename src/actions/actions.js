import * as ActionTypes from '../common/actionTypes';

export function saveHomeData(data){
    return{
        type: ActionTypes.SAVE_HOME_DATA,
        data 
    }
} 