import React from 'react';
import Information from "./ActivePanelComponents/Information";
import {BrowserRouter, Route, Router} from "react-router-dom";
import Performance from "./ActivePanelComponents/Performance";
import Tests from "./ActivePanelComponents/Tests";


const ActivePanel = () => {
    return (
        <div className='ActivePanel'>
            <div>
                <Route path='/information' component={Information} />
                <Route path='/performance' component={Performance} />
                <Route path='/tests'       component={Tests} />
            </div>

        </div>
    )
}

export default ActivePanel;
