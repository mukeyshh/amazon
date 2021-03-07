import React from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom';
import {auth} from "./firebase";


function Login() {
    const history= useHistory();
    const[email,setEmail]=useState('')
    const [password, setPassword] = useState('')

const login=e=>{
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth)=>{
        //logged in . redirect to home page..
        history.push('/')
    })
    .catch(e=>alert(e.message))
}

const regiter=e=>{
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(auth=>{
        //create a user and log in then redirect to the home page,,
        history.push('/')

    })
    .catch(e=>alert(e.message))
}


    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo" src="/images/login.png" alt="" />
            </Link>


        <div className="login__container">
            <h1> Sign In </h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={e=>setEmail(e.target.value)} type="email" />
                <h5>Password</h5>
                <input value={password} onChange={e=>setPassword(e.target.value)} type="password" />
                <button onClick={login} type="submit" className="login__signInButon">Sign in</button>
                </form>
                <p>
                EM IPSUM GENERATOR
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button onClick={register} className="login__registerButton">Create amazon account</button>
           
        </div>

        </div>
    )
}

export default Login
