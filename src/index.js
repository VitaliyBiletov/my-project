
import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.min.css"
import Registration from "./components/registration/Registration";

const forms = [
    {
        id: 'Students-tab',
        name: 'Ученики',
    },
    {
        id: 'Teachers-tab',
        name: 'Учителя'
    }
]

ReactDOM.render(<Registration forms={forms}/>, document.getElementById('main'));


