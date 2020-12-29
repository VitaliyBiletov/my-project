import React, { Component } from "react";

export default class StudentsForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            form: {
                lastName: '',
                firstName: '',
                dateOfBirth: '',
                addInfo: '',
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = (e) => {
        e.preventDefault();
        const { form } = this.state;
        const { name, value } = e.target;
        this.setState({form: { ...form,  [name]: value}});
        console.log(this.state);
    }

    render(){
        const { lastName, firstName, dateBirthDay, addInfo } = this.state.form;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="form mt-3">
                            <form id="formStudents" method="post" className="needs-validation" noValidate>
                                <p className="h2 mt-3">Сведения об ученике</p>
                                <div className="form-row mt-4">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="lastName">Фамилия:</label>
                                            <input
                                                name="lastName"
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                value={lastName}
                                                onChange={this.handleChange}
                                                required />
                                            <div className="invalid-feedback">
                                                Пожалуйста заполните фамилию
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="firstName">Имя:</label>
                                            <input
                                                name="firstName"
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                value={firstName}
                                                onChange={this.handleChange}
                                                required />
                                            <div className="invalid-feedback">
                                                Пожалуйста заполните имя
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="dateOfBirth">Дата рождения:</label>
                                            <input
                                                name="dateOfBirth"
                                                type="date"
                                                className="form-control"
                                                id="dateOfBirth"
                                                value={dateBirthDay}
                                                onChange={this.handleChange}
                                                required />
                                            <div className="invalid-feedback">
                                                Пожалуйста заполните дату рождения
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <div className="text-center">
                                            <img
                                                src='/src/img/template.svg'
                                                className="rounded"
                                                alt="Фото"
                                                width="200"
                                                height="200" />
                                        </div>
                                        <div className="form-file form-file-lg col-md-6 mt-3">
                                            <input
                                                type="file"
                                                className="form-file-input"
                                                id="customFileLg" />
                                        </div>
                                    </div>

                                </div>
                                <div className="form-row">

                                </div>
                                <div className="form-group">
                                    <label htmlFor="addInfo">Дополнительные сведения:</label>
                                    <textarea
                                        name="addInfo"
                                        className="form-control"
                                        id="addInfo"
                                        rows="3"
                                        onChange={this.handleChange}
                                        value={addInfo}></textarea>
                                </div>
                                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Сохранить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
}
}