import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import './Login.css'

function Login(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
 
    const [formErrors,setFormErrors]=useState({}) 
    const [isSubmit,setIsSubmit]=useState(false)

    const dispatch=useDispatch();
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate({name,email,password}));
        setIsSubmit(true);
        }
        
        (Object.keys(formErrors).length === 0 && isSubmit) &&
        dispatch(login({
             name:name,
             email:email,
             password:password
         }))


    const validate=(values)=>{
        const errors={}
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if(!values.name){
            errors.name='Required!'
        }

        if(!values.email){
            errors.email='Required!'
        } else if(!regex.test(values.email)){
            errors.email="This is not a valid email format!"
        }

        if(!values.password){
            errors.password='Required!'
        }

        return errors;
    }

    return (
        <div className="login">
            <form className="login_form" onSubmit={(e)=>{handleSubmit(e)}}>
                <h1>Login</h1>

                <div>
                <input 
                type="name"
                placeholder="Name" 
                value={name} 
                onChange={(e)=>setName(e.target.value)}
                />
                <p className="error">{formErrors.name}</p>
                </div>

                <div>
                <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <p className="error">{formErrors.email}</p>
                </div>

                <div>
                <input type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <p className="error">{formErrors.password}</p>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;