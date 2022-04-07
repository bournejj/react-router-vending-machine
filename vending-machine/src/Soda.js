import react from "react";
import VendingMachine from "./VendingMachine";
import {BrowserRouter, Route, Link} from 'react-router-dom';

const Soda = () => {

    return (
        <div>
        <h3>Soda</h3>
        <img src="https://media.istockphoto.com/vectors/soda-can-in-aluminium-on-white-vector-id1167116334?k=20&m=1167116334&s=170667a&w=0&h=fu5oW1HXnSCBEvVu1_upyXwEVgKxpjBmst3qqQetAlE=" alt="Girl in a jacket" width="500" height="600"/>
        <Link to='/'>Back</Link>
        <Route exact path='/Soda'>
                <VendingMachine/>
                </Route>
        </div>
    )
}

export default Soda;