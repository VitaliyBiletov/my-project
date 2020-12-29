import React, { Component } from "react";
import StudentsForm from "./StudentsForm";
import TeachersForm from "./TeachersForm";

export default class RegistrationForm extends Component {
    constructor(props) {
        super(props);
    }

    switchTab(id){
        switch(id){
            case 'Students-tab': {
                return <StudentsForm />
                break;
            }
            case 'Teachers-tab': {
                return <TeachersForm />
                break;
            }
            default: throw Error('Нет такого таба');
        }
    }

    render(){
        const { tabId } = this.props;
        return this.switchTab(tabId)
    }

}

