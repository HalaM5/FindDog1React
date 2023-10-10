import "./Contact.css";

const Contact =()=>{

    return(
        <div className="contac"  id="contact"> 
            <h1>Contact us</h1>
            <div className="phowhamail">
                <img src={require("./phone.png")} alt="phone number"></img>
                <img src={require("./whats.png")} alt="contact by Whats app"></img>
                <img src={require("./maill.png")} alt=" send e-mail"></img>
            </div>

        </div>
    )
}

export default Contact;