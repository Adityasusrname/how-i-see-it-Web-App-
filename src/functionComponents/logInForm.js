function LogInForm(props){
    return(
        <div>
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
         <input type="password" name="password"/>
         <br/>
        <br/>
        <br/>
        <button id="logInButton">Log In</button>
        </form>

    </div>
    )
}
export default LogInForm;