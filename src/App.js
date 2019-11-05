import React, { Component } from 'react';
import './App.css';
import Users from './UserFolder/Users';
import Navbar1 from './layout/FunctionalComponents';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NotFound from './pages/NotFound'
import AddUser from './forms/AddUser';
import UpdateUser from './forms/UpdateUser';
import Contribute from './pages/Contribute';

// import Navbar2 from './UserFolder/FunctionalComponents2';

// const home = () => {
//   return (
//     <h3>Home page</h3>
//   )
// }

// const about = () => {
//   return (
//     <h3>About page</h3>
//   )
// }

class App extends Component {
  // const sayi1 = 5;
  // const sayi2 = 6;
  // const isTrue = true;
  // state ={
  //   users : [
  //     { id : 1,
  //      name : "Serkan Coşkulu",
  //      department : "Bilgisayar - Yazılım Uzmanı", 
  //      salary : "4440"},
  //     { id : 2,
  //     name : "Alexandr Dallama",
  //     department : "Seyis", 
  //     salary : "4343"},
  //     { id : 3,
  //     name : "Hamit Kaşık",
  //     department : "Doktor", 
  //     salary : "11111"}
  //   ]
  // }

  // deleteUsers1=(id)=>{
  //   this.setState({
  //       users : this.state.users.filter(user=> id !== user.id)
  //     })
  // }
  render () {
    return (

      <Router>
        <div className = "container"> 
          <Navbar1 title="Çalışanlar Uygulaması"></Navbar1>
          <hr/>
          <Switch> 
            <Route exact path = "/" component = {Users} />
            <Route exact path = "/add" component = {AddUser} />
            <Route exact path = "/github" component = {Contribute} />
            <Route exact path = "/edit/:id" component = {UpdateUser} />
            <Route component={NotFound} />
          </Switch>
          
        </div>
      
      </Router>



//     <div className="container">
//     <Test test = "Deneme"></Test>
//   {/* <h1> 
//     Bu bir react jsx çalışmasıdır
//   </h1> */}
 
//   <Navbar1 title="Çalışan Ekranı" />
//   <br/>
//   <AddUser/>
//   <Users />


// </div>
    )
  }
   
}

export default App;
