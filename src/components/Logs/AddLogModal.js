import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import {connect} from 'react-redux';
import {addLog} from '../../actions/logActions'; 
import PropTypes from 'prop-types';
import TechSelectOptions from '../techs/TechSelectOptions';

const AddLogModal = ({addLog}) => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [technician, setTechnician] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();
        if(message === '' || technician === ''){
            M.toast({html: "Please enter a message and tech"})
        } else {
            const newLog = {
                message,
                attention,
                technician,
                date: new Date()
            }
            addLog(newLog);
            M.toast({html: `Log added by ${technician}`});
            setMessage('');
            setTechnician('');
            setAttention(false);
        }
    }

    return (
        <div id="add-log-modal" className='modal' style={modalStyle}>
            <div className="modal-content">
                 <h4>Enter system log</h4>
                 <div className='row'>
                    <input type='text' name='message' value={message} onChange={e => setMessage(e.target.value)}/>
                    <label htmlFor='message' className='active'>Log message</label>
                 </div>
                 <div className='row'>
                    <div className="input-field">
                        <select name='tech' value={technician} className="browser-default" onChange={e=>setTechnician(e.target.value)}>
                            <option value="" disabled>Select Technician</option>
                           <TechSelectOptions/>
                        </select>
                    </div>
                 </div>
                 <div className='row'>
                    <div className='input-field'>
                        <p>
                            <label>
                                 <input type='checkbox' className='filled-in' checked={attention} value={attention} onChange={e=>setAttention(!attention)}/>
                                 <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                 </div>
            </div>
            <div className='modal-footer' style={footerModal}>
               <a href='#!' onClick={onSubmit} className='modal-close waves-effect blue btn btn-large'>Enter</a>
            </div>
        </div>
    )
}

const modalStyle={
    width: '75%',
    height: '75%'
}

const footerModal={
   textAlign: 'center'
}

AddLogModal.propTypes={
    addLog: PropTypes.func.isRequired,
}

export default connect(null, {addLog})(AddLogModal);
