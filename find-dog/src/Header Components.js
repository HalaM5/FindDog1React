import react ,{Component} from "react";
import './Header.css';
import About from "./About us component";
import Dogs from  "./Dogs component";
import Contact from "./Contact us component";
import logo from  "./logo.jpg";


export class Header extends Component{
  
    handleChange =(e,props)=>{
            let result="";

            let put = document.getElementById('search').value.toLowerCase();
            let found=false;
            const arrr = this.props.search.map((ser)=>{

                if(put == ser.toLowerCase()){

            
                          result= `There is ${put}`;
                          found =true;
                          return ;
                        
                        
                        }
                             
            })
            if(!found){   
                result=`There isnot this dog now ${put}`;
        }
            document.getElementById('result').innerHTML=result;

        }


    

    handleSubmit =(e)=>{
        e.preventDefault();


    }
    handleScroll =(e)=>{
        e.preventDefault();
        const scro = e.target.getAttribute("href");
        const sec = document.querySelector(scro);
        sec.scrollIntoView({ behavior: 'smooth',block: 'center'});


    }
    
        
    render(){
        return (
            <header>
                <h1> Dog for you</h1>
                <img className="llog" src={logo} alt="dog picture logo" ></img>
                <nav>
                    <ul>
                        <li>
                            <a href="#about"onClick={this.handleScroll}>About us</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={this.handleScroll}>Contact us</a>
                        </li>
                        <li>
                            <a href="#dog"onClick={this.handleScroll}>Dogs</a>
                        </li>
                    </ul>
                    {/*tomake search response to enter and click  */}
                    <form onSubmit={this.handleSubmit}> 
                        <label for="search">
                            <input id="search" placeholder="search for Dog" />
                            <button onClick={this.handleChange}>Search</button>
                            <p id="result"></p>
                        </label>
                    </form>
                </nav>
            </header>

        );

    }
}

//export default Header;