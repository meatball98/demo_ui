import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React, { Component  } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import IndexPage from './Components/Page/IndexPage/IndexPage'
import LoginPage from './Components/Page/LoginPage/LoginPage'
import RegisterPage from './Components/Page/RegisterPage/RegisterPage'
import ResetPasswordPage from './Components/Page/ResetPasswordPage/ResetPasswordPage'
import HomePage from './Components/Page/HomePage/HomePage'
import axios from 'axios'

class App extends Component {
  state = {};

  componentDidMount = () => {
      const config = {
          headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
          }
      };
      axios.get('user', config).then(
          res => {
              this.setUser(res.data)
          },
          err => {
              console.log(err); 
          },
      )
  };

  setUser = user => {
    this.setState({
      user : user
    })
  }
  
  
  render(){
    return (
      <Router>
        <Header user={this.state.user} setUser={this.setUser}/>
          <Switch>
            <Route path= '/Home' exact component= {() => < HomePage user={this.state.user} />} />
            <Route path= '/' exact component= { IndexPage } />
            <Route path= '/login' component= { () => <LoginPage setUser={this.setUser}/> } />
            <Route path= '/register' component= { RegisterPage } />
            <Route path= '/reset_password' component= { ResetPasswordPage } />
          </Switch>
      </Router>
    );
  }
}

export default App
