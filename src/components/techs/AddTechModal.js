import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import {connect} from 'react-redux';
import {addTech} from '../../actions/techActions';
const AddTechModal = ({addTech}) => {

    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();
        if(fName === '' || lName === ''){
            M.toast({html: "Please enter a message and tech"})
        } else {
           const obj = {
               firstName: fName,
               lastName:lName
           }
           addTech(obj);
        }
    }

    return (
        <div id="add-tech-modal" className='modal'>
            <div className="modal-content">
                 <h4>New Technician</h4>
                 <div className='row'>
                    <input type='text' name='fName' value={fName} onChange={e => setFname(e.target.value)}/>
                    <label htmlFor='message' className='active'>First name</label>
                 </div>
                 <div className='row'>
                    <input type='text' name='lName' value={lName} onChange={e => setLname(e.target.value)}/>
                    <label htmlFor='message' className='active'>Last name</label>
                 </div>
            </div>
            <div className='modal-footer'>
               <a href='#!' onClick={onSubmit} className='modal-close waves-effect blue btn'>Enter</a>
            </div>
        </div>
    )
}

const modalStyle={
    width: '75%',
    height: '75%'
}


export default connect(null, {addTech})(AddTechModal)
