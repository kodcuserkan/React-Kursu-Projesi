import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../context';
import axios from 'axios'

const Animation = posed.div({
    visible : {
        opacity : 1,
        applyAtStart : {
            display : "block"
        }
    },
    hidden : {
        opacity : 0,
        applyAtEnd : {
            display : "none"
        }
    }
});


class AddUser extends Component {
    state = {
        visible : false,
        name : "",
        department : "",
        salary : "",
        error :  false
    }
    changeVisibility = e => {
        this.setState ({
            visible : !this.state.visible
        })
    }

    validateForm = () => {
        const {name,salary,department} = this.state;
        if (name ==="" || salary ==="" || department ==="") {
            return false;
        }
        else {
            return true;
        }
    }


    changeInput = e  => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // changeName = e => {
    //     this.setState({
    //         name : e.target.value
    //     })
    // }

    // changeSalary = e => {
    //     this.setState({
    //         salary : e.target.value
    //     })
    // }

    // changeDepartment = e => {
    //     this.setState({
    //         department : e.target.value
    //     })
    // }

    addUser = async (dispatch,e) => {
      e.preventDefault();  

        const {name,salary,department} = this.state;

        const newUser = {
            name,
            department,
            salary
        }

        if (!this.validateForm()) {
            this.setState ( {
                error : true
            })
            return
        }

        const response = await axios.post("http://localhost:3006/users/",newUser);



        dispatch({type : "ADD_USER" , payload: response.data})
        
        // Redirect işlemi 
        this.props.history.push("/");
    }

    render() {
        const {visible,name,salary,department,error} = this.state;
        return <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        
                        <div className="col-md mb-4">
                            <button onClick={this.changeVisibility} className="btn btn-warning btn-block mb-2">{visible ? "Formu Gizle": "Formu Göster"}</button>
                            <Animation pose = {visible ? "visible":"hidden"}>
                            <div className="card">
                                <div className="card-header">
                                    <h4>Çalışan Ekle Formu</h4>
                                </div>

                                <div className="card-body">
                                {
                                    error ? 
                                    <div className = "alert alert-danger">
                                        Lütfen eksik alanları doldurun...
                                    </div>
                                    : null
                                }
                                    <form onSubmit={this.addUser.bind(this,dispatch)}>
                                        <div className="form-group">
                                            <label htmlFor="name">İsim : </label>
                                            <input type="text"
                                            name = "name"
                                            id = "id"
                                            placeholder="İsmi giriniz"
                                            className="form-control"
                                            value = {name}
                                            onChange = {this.changeInput}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="salary">Maaş : </label>
                                            <input type="text"
                                            name = "salary"
                                            id = "salary"
                                            placeholder="Maaşı girin"
                                            className="form-control"
                                            value = {salary}
                                            onChange = {this.changeInput}

                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="department">Departman : </label>
                                            <input type="text"
                                            name = "department"
                                            id = "department"
                                            placeholder="Departmanı giriniz"
                                            className="form-control"
                                            value = {department}
                                            onChange = {this.changeInput}

                                            />
                                        </div>
                                        <button
                                            className="btn btn-danger btn-block" 
                                            type="submit"
                                        
                                        >
                                            EKLE
                                        </button>
                                    </form>
                                </div>
                            </div>
                            </Animation>
                        </div>
                    )
                }
            }
        </UserConsumer>       
    }
}

export default  AddUser;