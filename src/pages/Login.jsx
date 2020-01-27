import React, {useState} from 'react';
import { Formik } from 'formik';
import '../styles/Forms.css'
import axios from 'axios'

const Login = (props) => {

  // const [user, setUser] = useState();
  return(
    <div>
    <h1>Welcome Please Login!</h1>
    <Formik
      initialValues={{ username: "", password:"" }}
      onSubmit={(values, actions) => {
        axios.post('http://localhost:2019/api/login', `grant_type=password&username=${values.username}&password=${values.password}`, {
          headers:{
            Authorization : `Basic ${btoa('skyler-client:skyler-secret')}`,
            'Content-Type' :'application/x-www-form-urlencoded'
          }
        }).then(res => {
          console.log('login success', props )
            localStorage.setItem('token', res.data.access_token)
            localStorage.setItem('username', values.username)
            // setUser(val ues.username)
            props.history.push('/');   
          }).catch(err => console.log('login error', err))
        }}
    >
      {props => (
          <form onSubmit={props.handleSubmit}>
            <div className="form">
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.username}
            name="username"
            placeholder="Username"
            />
            {props.errors.username && <div id="feedback">{props.errors.username}</div>}
         <input
            type="password"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.password}
            name="password"
            placeholder="Password"
          />
            {props.errors.password && <div id="feedback">{props.errors.password}</div>}

          <div className="formBtn">
          <button type="submit">Submit</button>
          <button type='reset'>Reset</button>
          </div> 
          </div>
        </form>
      )}
    </Formik>
  </div>
)};

export default Login