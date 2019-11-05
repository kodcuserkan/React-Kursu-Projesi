import React, { Component } from 'react'
import UserConsumer from '../context';
import axios from 'axios'

class UpdateUser extends Component {
    state = {
        name : "",
        department : "",
        salary : "",
        error : false
    }

    changeInput = e  => {
        this.setState({
            [e.target.name] : e.target.value
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

    UpdateUser = async (dispatch,e) => {
      e.preventDefault();  
        // Update User Yazılacak
        const {id} = this.props.match.params;
        const {name,salary,department} = this.state;
        const UpdatedUser = {
            name,
            salary,
            department
        }


        if (!this.validateForm()) {
            this.setState ( {
                error : true
            })
            return
        }


        const response = await axios.put(`http://localhost:3006/users/${id}`,UpdatedUser);        

        dispatch({type : "UPDATE_USER", payload : response.data})

        // Redirect işlemi 
        this.props.history.push("/");
    }

    componentDidMount  = async () => {
        const {id} = this.props.match.params;
        const response = await axios.get(`http://localhost:3006/users/${id}`);
        const {name,salary,department} = response.data;
        this.setState({
            name,
            salary,
            department
        })


    }
    

    render() {
        const {name,salary,department,error} = this.state;
        return <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        
                        <div className="col-md mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Çalışan Güncelle Formu</h4>
                                </div>
                                <div className="card-body">
                                {
                                    error ? 
                                    <div className = "alert alert-danger">
                                        Lütfen eksik alanları doldurun...
                                    </div>
                                    : null
                                }

                                    <form onSubmit={this.UpdateUser.bind(this,dispatch)}>
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
                                            GÜNCELLE
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </UserConsumer>       
    }
}

export default  UpdateUser;