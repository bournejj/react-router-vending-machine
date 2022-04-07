import react from "react";
import VendingMachine from "./VendingMachine";
import {BrowserRouter, Route, Link} from 'react-router-dom';

const FreshSardines = () => {

    return (
        <div>
        <h3>FreshSardines</h3>
        <img src="https://i.pinimg.com/736x/dd/33/b3/dd33b3b13da62cc7ad0058afbd0e5e79.jpg" alt="Girl in a jacket" width="500" height="600"/>
        <Link to='/'>Back</Link>
        <Route exact path='/Soda'>
                <VendingMachine/>
                </Route>
        
        </div>
        
    )
}

export default FreshSardines;