import React, { Component } from "react";

export default function TeachersForm() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="form mt-3">
                            <form id="formTeachers" method="post" className="needs-validation" noValidate>
                                <p className="h2 mt-3">Сведения об учителе</p>
                                <div className="form-row mt-4">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="lastName">Фамилия:</label>
                                            <input name="lastName" type="text" className="form-control" id="lastName"
                                                   required />
                                                <div className="invalid-feedback">
                                                    Пожалуйста заполните фамилию
                                                </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="firstName">Имя:</label>
                                            <input name="firstName" type="text" className="form-control" id="firstName"
                                                   required />
                                                <div className="invalid-feedback">
                                                    Пожалуйста заполните имя
                                                </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="middleName">Отчество:</label>
                                            <input name="middleName" type="text" className="form-control"
                                                   id="middleName" required />
                                                <div className="invalid-feedback">
                                                    Пожалуйста заполните отчество
                                                </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <div className="text-center">
                                            <img src="/src/img/template.svg" className="rounded" alt="Фото" width="200" height="200" />
                                        </div>
                                        <div className="form-file form-file-lg col-md-6 mt-3">
                                            <input type="file" className="form-file-input" id="customFileLg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="addInfo">Дополнительные сведения:</label>
                                    <textarea name="addInfo" className="form-control" id="addInfo" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Сохранить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
}