import React, {useState, useEffect,useRef} from 'react'
import {connect} from 'react-redux';
import {filterLogs} from '../../actions/logActions'

const Searchbar = ({filterLogs}) => {
  
  const text = useRef('');

  const onChange = e =>{
    filterLogs(text.current.value);
  }

    return (
<nav style={{marginBottom: '30px'}} className='blue'>
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" name='filtered' ref={text} onChange={onChange} required/>
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
    )
}



export default connect(null, {filterLogs})(Searchbar);
