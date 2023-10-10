//import Header from "./Header components";
import react ,{Component} from "react";
import "./Content.css";
import About from "./About us component";
import Dogs from "./Dogs component";
import Contact from  "./Contact us component"


class Conten extends Component{

    render(){
    return(
    <div className="conten">
        <div className="about contSon">
            <About/>
         </div>   
        <div className="dogs contSon">
            <Dogs typ={this.props.type}/>
         </div>   
        <div className="call contSon">
            <Contact/>
         </div>  
          
    </div>
    

    )
    }
}
export default Conten;