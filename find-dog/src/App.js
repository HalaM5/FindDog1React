import './App.css';
import React , {Component} from "react";
import { Header } from './Header Components';
import {Footer} from "./Footer component";
import Conten from "./Content component";
class App extends Component{
  state={
    dogs:["Bohemian shepherd",
    "old german sherpherd","vizsla", "BullDogs", 
    "christmas-dog","puppy","puppy","Halden Hound "] 
 }
  render(){
  return (
    <div className="App">
      <div className="appSon appSon1">
        <Header search={this.state.dogs}/>
        </div>
      <div className="appSon appSon2">
        <Conten type={this.state.dogs}/>
        </div>
      <div className="appSon appSon3">
        <Footer />
        </div>
    </div>
  );
  }
}

export default App;

