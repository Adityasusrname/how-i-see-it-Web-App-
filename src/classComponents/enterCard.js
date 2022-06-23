import React from "react";
import LogInForm from "../functionComponents/logInForm";
import SignUpForm from "../functionComponents/signUpForm";
import '../css/enterCard.css'
import Title from "../functionComponents/title";

class Enter_Card extends React.Component{
       constructor(props){
        super(props)
        this.state={
            logIn:true,
            signUp:false
        }
        this.logInClicked=this.logInClicked.bind(this)
        this.signUpClicked=this.signUpClicked.bind(this)
        

    }
    render(){
        var option=null
        if(this.state.logIn==true){
          option=<LogInForm/>
        }
        else{
            option=<SignUpForm/>
        }

        return(
            <div id="enterCardContainer">
                <Title/>
                <div>
         
             <button name="logIn" id="logInOptionButton" onClick={this.logInClicked}>Log In</button>
             <button name="signUp" id="signUpOptionButton" onClick={this.signUpClicked}>Sign Up</button>
             <br/>
             <br/>
            <div id="optionContainer"> 
            <div>
            {option}
            </div>
            </div>
            </div>

            </div>
        )
        

    }

   logInClicked(){
    this.setState({logIn:true,signUp:false},()=>{

        const loginbtn=document.getElementById("logInOptionButton")
        loginbtn.style.backgroundColor='wheat'

        const signupbtn=document.getElementById("signUpOptionButton")
        signupbtn.style.backgroundColor="white"
    })
   
    }

    signUpClicked(){
        this.setState({signUp:true,logIn:false},()=>{

            const signupbtn=document.getElementById("signUpOptionButton")
            signupbtn.style.backgroundColor="wheat"
            
            const loginbtn=document.getElementById("logInOptionButton")
            loginbtn.style.backgroundColor='white'
            
        })
        
    }
}

export default Enter_Card;