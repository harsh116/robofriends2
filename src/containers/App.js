import logo from '../logo.svg';
import './App.css';
import CardList from '../components/CardList';
import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import React,{Component} from 'react';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {

  constructor()
  {
    super();
    this.state=
    {
      robots: [],
      searchfield: ''
    }
  }

  onSearchChange=(event)=>
  {
   
    this.setState({searchfield: event.target.value}) ;
   // console.log('inside function: ',this.state.searchfield);
    
    
  }

  render(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      
      return response.json();
    })
    .then((users)=>{this.setState({robots: users});
 // console.log(`%c%ousers`,"color: green",users);
});  



    const filteredRobots=this.state.robots.filter((user,i)=>{
     // console.log('substr',robots[i].name.substr(0,this.state.searchfield.length).toLowerCase(),"\nlength",this.state.searchfield.length);
      return this.state.searchfield.toLowerCase()===this.state.robots[i].name.substr(0,this.state.searchfield.length).toLowerCase();
    })
     // console.log( this.state.searchfield);

    // console.log(filteredRobots);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>



    <div className="tc"
    >
      <h1 id="heading1" className="f1 lh-title washed-green">RoboFriends!</h1>
      <SearchBox searchChange={this.onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots}/>
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}
}

export default App;
