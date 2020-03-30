import React,{useEffect} from 'react'
import Preloader from '../layout/Preloader';
import {connect} from 'react-redux' //connects Redux to this particular component
import LogItem from './LogItem';
import PropTypes from 'prop-types';
import {getLogs} from '../../actions/logActions';
const Logs = ({log: {logs, loading, filtered}, getLogs}) => {


    useEffect(()=>{
        getLogs();
        //eslint-disable-next-line
    },[])

    
    if(loading || logs === null){
      return  <Preloader/>
    }

    return (

        <ul className='collection with-header'>
            <li className="collection-header">
                <h4 className='center'>System logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className="center">No logs founds...</p>) : (
                logs.map(log =><LogItem log={log}/>)
            )}
        </ul>
    )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs:PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
   log: state.log
});

export default connect(mapStateToProps, {getLogs})(Logs);
