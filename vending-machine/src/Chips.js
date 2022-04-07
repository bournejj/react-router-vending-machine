import react from "react";
import VendingMachine from "./VendingMachine";
import {BrowserRouter, Route, Link} from 'react-router-dom';

const Chips = () => {

    return (
        <div>
        <h3>YUMMY!</h3>
        <img src="https://ik.imagekit.io/pimberly/595e406f0f15f30010780448/tr:w-1000,h-1000,cm-pad_resize/1adeb602/5d5c02235ba98a48100001e8/ed505884/AU46175_01.jpg?product_name=Walkers-Salt-and-Vinegar-Crisps-32.5g-(Pack-of-32)-121795.jpg" alt="Girl in a jacket" width="500" height="600"/>
        <Link to='/'>Back</Link>
        <Route exact path='/Soda'>
                <VendingMachine/>
                </Route>
        </div>
    )
}

export default Chips;