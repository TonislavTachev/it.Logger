import { SET_LOADING, GET_TECHS, TECHS_ERROR, ADD_TECH, DELETE_TECH } from "../actions/types";

const initialState = {
    techs: null,
    current: null,
    loading: false,
    error: null
}

export default (state = initialState, action) =>{
    switch(action.type){
        default:
            return state;
        case SET_LOADING:
             return {
                 ...state,
                 loading:true
             }
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload
            }
        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, action.payload]
                    }
        case DELETE_TECH:
            return{
                ...state,
                techs: state.techs.filter(tech => tech.id !== action.payload),
                loading:false
            }
        case TECHS_ERROR:
            return {
                ...state,
                error: action.payload
            }
    }
}