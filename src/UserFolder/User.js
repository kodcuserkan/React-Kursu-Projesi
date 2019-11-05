import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context'
import axios from 'axios'
import {Link} from 'react-router-dom'

class User extends Component {
    state={
        isVisible : false,
        
        
    }
    static defaultProps = {
        name : "Bilgi girilmedi",
        salary : "Bilgi girilmedi",
        department : "Bilgi girilmedi"

    }
    
    // constructor(props){
    //     super(props);
    //     this.state={
    //         isVisible : false
    //     }
    // }
    // constructor(props){
    //     super(props);
    //     this.onClickEvent = this.onClickEvent.bind(this);
    // } // This i kullanmak ve metodu bind etmek için
    onClickEvent = e => {
        // console.log(e.target);
        // console.log("test...");
        // console.log(this);
        console.log(e.target.parentElement.parentElement);
        // console.log(deger);
        
        this.setState(
            {isVisible : ! this.state.isVisible}
            
        );
        console.log(this.state.isVisible);
        
    } // Şayet bu metodu arrow function larla yazarsak bind etmemiz e gerek kalmayacak
    ondeleteuser = async (dispatch, e) => { 
        
        // const {id,deleteuser}= this.props;
        const {id} = this.props; 

        await axios.delete(`http://localhost:3006/users/${id}`)
        // Buraya consumer dan gelecek dispatch yazılacak
        dispatch({type : "DELETE_USER", payload:id});
        // const deleteuser = this.props.deleteusers;
        // console.log(e,id, deleteuser,this.props);
// background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
        // deleteuser(id);
    }
    render() {
        const {id,name,department,salary} = this.props;
        const {isVisible} = this.state;
        return(
            <UserConsumer>
                {
                    value => {
                        const {dispatch} = value;

                        return (
                            <div className="col-md-8 mb-4">
                    
                                <div className = "card" style={isVisible? { backgroundColor : "#88b69f",color : "white"} :null}>
                                    <div className="card-header d-flex justify-content-between">
                                       <h4 className="d-inline" onClick={this.onClickEvent}>{name + "    "} </h4>
                                       <h4>
                                        <i onClick = {this.ondeleteuser.bind(this, dispatch)} 
                                        className="far fa-trash-alt"  style={{cursor : "pointer"}}></i>
                                        </h4>
                                        {/* <h4>{name + " "}</h4>
                                        <i onClick={this.ondeleteuser.bind(this, dispatch)} 
                                        className="far fa-trash-alt" style={{cursor : "pointer"}}></i> */}

                                    </div>
                                    {                        
                                        this.state.isVisible ?
                                        <div className="card-body">
                                        <p className="card-text">Maaş : {salary}</p>
                                        <p className="card-text">Departman : {department}</p>
                                        <Link to={`edit/${id}`} className="btn btn-dark btn-block">Değişiklik Yap</Link>
                                        </div>:null
                                    }
                                    </div>
                                </div>
                        )
                    }
                }
            </UserConsumer>
        )

    }
}
User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired
    // deleteusers : PropTypes.func.isRequired
}
export default User;
