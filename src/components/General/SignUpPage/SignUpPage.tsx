import * as React from 'react';
import './SignUpPage.css'
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { presentUserName } from '../../../store/slices/UsersSlice';
import { RootState } from '../../../store/Store';

const SignUpPage:React.FC = () => {
  const [infoUserSignUp, setInfoUserSignUp] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "", 
  })
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch ();
  const returnUserToSignIn = ()=>{navigate("/sign-in")};
  const AllUsers = useSelector(
    (state:RootState) => state.users.value
  );

  useEffect(() => {
    if (count>1){
      fetch('http://localhost:8000/api/users/register', {
      method: 'POST',
      headers: {'Content-type': 'application/json; charset=utf-8'},
      body: JSON.stringify(infoUserSignUp)
      })
      .then((response)=> response.json())
      .then((data) => {
        dispatch(presentUserName(data));
        returnUserToSignIn();
      })
      .catch((err) => {
        console.log(err.message,"error");
      });
    }
  },[infoUserSignUp,count]);
  
  

  const handleSubmit = async (evt:any)=> {
    evt.preventDefault();
    setInfoUserSignUp({
      firstName: evt.target[0].value,
      lastName: evt.target[1].value,
      address: evt.target[2].value,
      email: evt.target[3].value,
      password: evt.target[4].value
    })
    setCount(prevCount => prevCount + 1)
  }

  return ( 
    <>
      <div className="sing-up-container">
        <div className="sign-in-titles">
          <div className='sign-in-title'>SIGN UP</div>
          <div className='sign-in-sub-title'>To continue the order, please sign up</div>
        </div>
        <form className='form-sign-in' onSubmit={handleSubmit}>
          <div className="filed-holder">
              <input className='input-sign-in' name='first-name' type='text' id='first-name'/>
              <label className='label-sign-in' htmlFor="first-name">First Name</label> 
          </div>
          <div className="filed-holder">
              <input className='input-sign-in'  type='text' id='last-name'/>
              <label className='label-sign-in' htmlFor="last-name">Last Name</label> 
          </div>
          <div className="filed-holder">
              <input className='input-sign-in'  type='text' id='address'/>
              <label className='label-sign-in' htmlFor="address">Address</label> 
          </div>
          <div className="filed-holder">
              <input className='input-sign-in' type='email' id='email'/>
              <label className='label-sign-in' htmlFor="email">Email Address</label> 
          </div>
          <div className="filed-holder">
              <input  className='input-sign-in'  type='password' id='password'/>
              <label className='label-sign-in' htmlFor="password">Password</label> 
          </div>
          <div className="form-bottom">
              <button className='btn-form-sign-in' type='submit' >Sign up</button>
          </div>
        </form>
      </div>
      <Footer />
    </> );
}
 
export default SignUpPage;