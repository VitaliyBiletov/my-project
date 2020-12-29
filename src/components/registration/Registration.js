import React, { Component } from "react";
import TeachersForm from "./TeachersForm";
import StudentsForm from "./StudentsForm";
import cn from 'classnames';
import RegistrationForm from "./RegistrationForm";

export default class Registration extends Component {
    constructor(props) {
        super(props);
        const { forms } = this.props;
        this.state = {
            activeForm: {
                name: forms[0].name,
                id: forms[0].id,
            },
        }
    }

    onClick = (e) => {
        e.preventDefault();
        this.setState({ activeForm: {name : e.target.name , id: e.target.id}});
    }


    render() {
        const {forms} = this.props;
        return (
            <React.Fragment>
            <div className="container">
                <ul className="nav nav-pills mb-3 mt-3 justify-content-center" id="pills-tab" role="tablist">
                    {forms.map(({id, name}) => {
                        const classesLink = cn(
                            'nav-link',
                            {
                                active: name === this.state.activeForm.name,
                            })
                        return (
                        <li key={id} className='nav-item'>
                            <a name={name} onClick={this.onClick} className={classesLink} id={`${id}`} data-toggle="tab" href={`#${id}`} role="tab"
                               aria-controls="home" aria-selected="true">{`${name}`}</a>
                        </li>
                        )
                    })}
            </ul>
            <RegistrationForm tabId={this.state.activeForm.id}/>
            </div>
            </React.Fragment>
        )
    }
}