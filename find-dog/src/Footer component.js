import react ,{Component} from "react";
import "./Footer.css";

export class Footer extends  Component{
    render(){
        const time = new Date();
        const year = time.getFullYear()
        return(

            <div className="footer">
                <footer>
                    <p>
                        &copy; Dog for you <span>{year}</span> 
                    </p>
                </footer>
            </div>
        )
    }
}