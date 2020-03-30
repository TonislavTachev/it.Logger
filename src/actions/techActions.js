import {GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR} from './types'
import axios from 'axios';

//get techs from server
export const getTechs = () =>{
    return async(dispatch) =>{
       try{
         setLoading();
         const res = await axios.get('/techs');
         console.log(res.data);
         dispatch({
             type:GET_TECHS,
             payload:res.data
         })
       } catch(error){
          dispatch({type: TECHS_ERROR, payload: error.message});
       }
    }
 }

 export const addTech = (techInfo) =>{
    return async(dispatch) =>{
       try{
         setLoading();
         const config = {
             headers: {
                 'Content-Type' : 'application/json'
             }
         }
         const res = await axios.post('/techs', techInfo, config);
         console.log(res.data);
         dispatch({
             type:ADD_TECH,
             payload:res.data
         })
       } catch(error){
          dispatch({type: TECHS_ERROR, payload: error.message});
       }
    }
 }
 export const deleteTech = (id) =>{
    return async(dispatch) =>{
       try{
         setLoading();
         await axios.delete(`/techs/${id}`);
         dispatch({
             type:DELETE_TECH,
             payload:id
         })
       } catch(error){
          dispatch({type: TECHS_ERROR, payload: error.message});
       }
    }
 }

//set loading
export const setLoading = ()=>{
    return {
        type:SET_LOADING
    }
}