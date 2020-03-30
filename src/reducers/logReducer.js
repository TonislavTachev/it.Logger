import { SET_LOADING, LOGS_ERROR, GET_LOGS,ADD_LOG, DELETE_LOG, UPDATE_LOG, SET_CURRENT, SEARCH_LOGS } from "../actions/types";

const initialState ={
    logs: null,
    current: null,
    loading:false,
    error:null,
    filtered: null
}

export default(state = initialState, action) =>{
     switch(action.type){
        default:
            return state;
        case SET_LOADING:
           return {
               ...state,
               loading: true
           }
        case ADD_LOG:
            return{
                ...state,
                logs:[...state.logs, action.payload],
                loading: false
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload,
                loading:false
            }
        case UPDATE_LOG:
            return{
                ...state,
                logs:state.logs.map(log => log.id=== action.payload.id ? action.payload : log)
            }
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload),
                loading:false
            }
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            }
        case SEARCH_LOGS:
            return {
                ...state,
                logs: action.payload
            }
        case LOGS_ERROR:
            return {
                ...state,
                error : action.payload
            }
     }
}