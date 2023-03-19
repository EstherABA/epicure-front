import  React from 'react';
import './SingInPage.css'
import Footer from '../Footer/Footer';
import orIcon from '../../../assets/icon/orIcon.svg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { presentUserName } from '../../../store/slices/UsersSlice';
import { RootState } from '../../../store/Store';


const SingInPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch ();
    const [infoUserLogin, setInfoUserLogin] = useState({
        email: "",
        password: ""
    })
    const [countSignIn, setCountSignIn] = useState(0);
    
    useEffect(() => {
        if (countSignIn>1){
            fetch('http://localhost:8000/api/users/login', {
            method: 'POST',
            headers: {'Content-type': 'application/json; charset=utf-8'},
            body: JSON.stringify(infoUserLogin)
            })
            .then((response)=> response.json())
            .then((data) => {
                console.log(data, "data after return one user");
                dispatch(presentUserName(data));
                returnUserToHOmePage();
            })
            .catch((err) => {
                console.log(err.message,"error");
            });
        }
    },[infoUserLogin,countSignIn]);
        
    const returnUserToHOmePage = ()=>{navigate("/")};
    
    const handleSubmit = (event:any)=> {
        event.preventDefault()
        let email = event.target[0].value
        let password =  event.target[1].value
        setInfoUserLogin({ email, password })
        setCountSignIn(prevCount => prevCount + 1)
    }

    return ( <>
        <div className="sing-in-container">
            <div className="sign-in-titles">
                <div className='sign-in-title'>SIGN IN</div>
                <div className='sign-in-sub-title'>To continue the order, please sign in</div>
            </div>

            <form className='form-sign-in' onSubmit={handleSubmit}>
                <div className="filed-holder">
                   <input className='input-sign-in' type='email' id='email' required/>
                   <label className='label-sign-in' htmlFor="email">Email Address</label> 
                </div>

                <div className="filed-holder">
                   <input  className='input-sign-in' type='password' id='password' required/>
                   <label className='label-sign-in' htmlFor="password">Password</label> 
                </div>
                    <button className='btn-form-sign-in' type='submit'>LOGIN</button>
            </form>

            <div className="form-bottom">
                <button className="forget-password">Forget password?</button>
                <img src={orIcon} />
                <button className='btn-form-sign-up' onClick={()=>navigate("/sign-up")}>Sign Up</button>
            </div>
        </div>

    <Footer />
    </> );
}
 
export default SingInPage;
