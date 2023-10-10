import "./dogs.css";
import react , {Component} from "react";
//import {ShowDog} from "./Header Components";

class Dogs extends Component{
    show = (props)=>{
        let num =0;
        let doo ="";
        const arr = this.props.typ.map(n=>{
    
            doo=  ` ${num+1}-${n} `;
            ++num
            return( <li key={num}><a href={`#d${num}`} onClick={this.handleScroll}>{doo}</a></li> )
        })
   return arr;
}

handleScroll =(e)=>{
    const scro = e.target.getAttribute("href");
    const sec = document.querySelector(scro);
    sec.scrollIntoView({ behavior: 'smooth',block: 'center'});


}
  
    render(){
        
 return(
    <div id="dog">
        <h1>Dogs</h1>
         <ul>
        {this.show()}
        </ul>
        <br/>
        
        <div id="imgg">
            <img id="d1" src={require('./Bohemian shepherd.jpg')} alt="Bohemian shepherd dog" style={{width:300,height:300}}></img>
            <img id="d2" src={require('./old german sherpherd dog.jpg')} alt="old german sherpherd dog" style={{width:300,height:300}}></img>
            <img id="d3" src={require('./vizsla.jpg')} alt="vizsla" style={{width:300,height:300}}></img>
            <img id="d4" src={require('./BullDogs.jpg')} alt="BullDogs" style={{width:300,height:300}}></img>
            <img id="d5" src={ require('./christmas-dog-1407593.jpg')} alt="christmas-dog" style={{width:300,height:300}}></img>
            <img id="d6" src={require('./puppy-1308791.jpg')} alt="puppy" style={{width:300,height:300}}></img>
            <img id="d7" src={ require('./puppy-1367640.jpg')} alt="puppy" style={{width:300,height:300}}></img>
            <img id="d8" src={require('./Halden Hound.jpg')} alt="Halden Hound" style={{width:300,height:300}}></img>

        </div>

    </div>

 )   
}
}

export default Dogs;