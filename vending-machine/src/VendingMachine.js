import react from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Soda from './Soda'
import Chips from './Chips'
import FreshSardines from './FreshSardines'

const VendingMachine = () => {

    return (
        <div>
         
            <BrowserRouter>
           <Route exact path='/'>
           <h1>VendingMachine</h1>
            <div>
            <img src="https://wallpapercave.com/wp/wp10117075.jpg" alt="Girl in a jacket" width="500" height="600"/>
            </div>
       
            
            <Link to='/Soda'>Soda</Link>
            <Link to='/Chips'>Chips</Link>
            <Link to='/FreshSardines'>FreshSardines</Link>
         
            </Route>
      
            <Route exact path='/Soda'>
                <Soda/>
                </Route>
            <Route exact path='/Chips'>
                <Chips/>
                </Route>
            <Route exact path='/FreshSardines'>
                <FreshSardines/>
                </Route>

        
       
     
        </BrowserRouter>
        </div>
    )
}
    
export default VendingMachine;