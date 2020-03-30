import React, {useEffect, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import Searchbar from './components/layout/Searchbar';
import Logs from './components/Logs/Logs';
import AddBtn from './components/AddBtn';
import AddLogModal from './components/Logs/AddLogModal';
import EditLogModal from './components/Logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import {Provider} from 'react-redux';
import reduxStore from './store';

function App() {

  useEffect(()=>{
    //initialize Materialize javascript
    M.AutoInit();
  })

  return (
    <Provider store={reduxStore}>
    <Fragment>
       <Searchbar/>
       <div className='container'>
         <AddBtn/>
         <AddLogModal/>
         <EditLogModal/>
         <AddTechModal/>
         <TechListModal/>
         <Logs/>
       </div>
    </Fragment>
    </Provider>
  );
}

export default App;
