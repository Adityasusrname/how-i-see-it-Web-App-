function SignUpForm(props){
    return(
        <form>
        Email:
        <br/>
        <br/>
        <input type="email" name="email"/>
        <br/>
        <br/>
        Password:
        <br/>
        <br/>
        <input type="Password"/>
        <br/>
        <br/>
        Confirm Password:
        <br/>
        <br/>
        <input type="Password"/>
        <br/>
        <br/>
        Bio:
        <br/>
        <br/>
        <input type="text" name="bio"/>
        <br/>
        <br/>
        <br/>
        <button id="signUpButton">Sign Up</button>

        </form>
    )
}
export default SignUpForm;