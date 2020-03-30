import React, {useState, useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import TechItem from './TechItem'
import {connect} from 'react-redux';
import axios from 'axios';
import {getTechs, techs} from '../../actions/techActions'

const TechListModal = ({getTechs, tech: {techs, loading}}) => {


    useEffect(()=>{
        getTechs();
    }, [])


    // const getTechnicians = async() =>{
    //     setLoading(true);
    //     try{
    //     const res = await axios.get('/techs');
    //     setTechnician(res.data);
    //     setLoading(false);
    //     } catch(error){
    //       setLoading(true);
    //       setTechnician([]);
    //     }
        // }

    return (
        <div id="tech-modal" className='modal'>
            <div className="modal-content">
                 <h4>Technician List</h4>
                   <ul className="collection">
                     {!loading && techs !== null && techs.map(tech =><TechItem key={tech.id} tech={tech}/>)}
                   </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
  tech:state.tech
})


export default connect(mapStateToProps, {getTechs})(TechListModal);
