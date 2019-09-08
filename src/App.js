import React, {Component } from 'react';
import './App.css';
import Header from './Header.js';
import Player from './Player.js';
import SelecetPlayer from './SelecetPlayer.js';
import {Switch, Route, withRouter} from 'react-router-dom';

class App extends Component {

  constructor() {
    super()
    this.state = {
      platfrom: 'origin',
      gamertag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

handleChange = (event) =>{
  if (event.target.value === 'origin' || event.target.value === 'xbl' || event.target.value === 'psn') {
     this.setState({platfrom: event.target.value});
  }else{
   this.setState({gamertag: event.target.value});
  }
};

handleSubmit = (event)=>{
    event.preventDefault();
    document.body.style.background = " #953036";
    this.props.history.push('/player');

}

 
  render(){

  return (

    <div className="App">
        <Header />
          <Switch>      
            <Route path='/' 
            exact 
            render={(props) => <SelecetPlayer {...props} 
                                handleChange={this.handleChange} 
                                handleSubmit={this.handleSubmit}                                 
                                platfrom={this.state.platfrom} 
                                gamertag={this.state.gamertag}/>}
            />
            <Route path='/player' 
            render={(props) => <Player {...props}                                
                                platfrom={this.state.platfrom} 
                                gamertag={this.state.gamertag}/>}
            />
          </Switch>



    </div>
  );
}
}

export default withRouter(App);
