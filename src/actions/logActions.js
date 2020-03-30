import {
 GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, UPDATE_LOG, SET_CURRENT, SEARCH_LOGS
} from './types'
import axios from 'axios';


export const getLogs = () =>{
   return async(dispatch) =>{
      try{
        setLoading();
        const res = await axios.get('/logs');
        dispatch({
            type:GET_LOGS,
            payload:res.data
        })
      } catch(error){
         dispatch({type: LOGS_ERROR, payload: error.message});
      }
   }
}


export const addLog = (log) =>{
    return async(dispatch) =>{
       try{
         setLoading();
         const confing = {
             headers:{
                 'Content-Type': 'application/json'
             }
         }
         const res = await axios.post('/logs', log, confing); 
         dispatch({
             type:ADD_LOG,
             payload:res.data
         })
       } catch(error){
          dispatch({type: LOGS_ERROR, payload: error.message});
       }
    }
 }

 export const deleteLogs = (log_id) =>{
    return async(dispatch) =>{
       try{
    
         setLoading();
         await axios.delete(`/logs/${log_id}`);
         dispatch({
             type:DELETE_LOG,
             payload:log_id
         })
       } catch(error){
          dispatch({type: LOGS_ERROR, payload: error.message});
       }
    }
}

export const filterLogs = (word) =>{
    return async(dispatch) =>{
       try{
    
         setLoading();
         const res = await axios.get(`/logs?q=${word}`);
         console.log(res.data);

         dispatch({
             type:SEARCH_LOGS,
             payload:res.data
         })
       } catch(error){
          dispatch({type: LOGS_ERROR, payload: error.message});
       }
    }
}

export const setCurrent = (log_id) =>{
    return async(dispatch) =>{
       try{
         setLoading();
         const config = {
             headers: {
                 'Content-Type' : 'application/json'
             }
         }
         const res = await axios.get(`/logs/${log_id}`);
         console.log(res.data)
         dispatch({
             type:SET_CURRENT,
             payload:res.data
         })
       } catch(error){
          dispatch({type: LOGS_ERROR, payload: error.message});
       }
    }
}
export const updateLog = (log_id, updatedStuff) =>{
    return async(dispatch) =>{
       try{
         setLoading();
         const confing = {
             headers:{
                 'Content-Type': 'application/json'
             }
         }
         const res = await axios.put(`/logs/${log_id}`, updatedStuff, confing); 
         dispatch({
             type:UPDATE_LOG,
             payload:res.data
         })
       } catch(error){
          dispatch({type: LOGS_ERROR, payload: error.message});
       }
    }
 }


export const setLoading = ()=>{
    return {
        type:SET_LOADING
    }
}