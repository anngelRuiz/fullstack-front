import React, { useState} from 'react';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';
import { API_ENDPOINT } from '../config/config';

export default function AddUser() {

  let navigate = useNavigate()

  const [user, setUser] = useState({
    name:"",
    lastName:"",
    email:"",
    age: "",
    gender: "",
    deparment: ""
  });

  const {name, lastName, email, age, gender, deparment} = user;

  const onInputChange = (e) =>{
      setUser({...user, [e.target.name]: e.target.value});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_ENDPOINT + "/users", user);
    navigate("/");
  };


  return (
    <div className='container text-center'>
      <div className='row'>        
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Register User</h2>
          <form onSubmit={(e) => {onSubmit(e)}}>
            <div className='mb-3'>
              <label htmlFor='Name' className='form-label'>Name</label>
              <input type={"text"} className='form-control' placeholder='Enter your name' name="name" value={name} onChange={(e) => onInputChange(e)}></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='lastName' className='form-label'>Last Name</label>
              <input type={"text"} className='form-control' placeholder='Enter your Last name' name="lastName" value={lastName} onChange={(e) => onInputChange(e)}></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input type={"text"} className='form-control' placeholder='Enter your Email' name="email" value={email} onChange={(e) => onInputChange(e)}></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='age' className='form-label'>Age</label>
              <input type={"number"} className='form-control' placeholder='Enter your Age' name="age" value={age} onChange={(e) => onInputChange(e)}></input>
            </div>
            <div class="input-group mb-3">
            <select class="form-select" id="inputGender" name="gender" value={gender} onChange={(e) => onInputChange(e)}>
              <option>Choose gender...</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
            <label class="input-group-text" for="inputGender">Gender</label>
          </div>

          <div class="input-group mb-3">
            <select class="form-select" id="inputDepartment" name="deparment" value={deparment} onChange={(e) => onInputChange(e)}>
              <option>Choose Deparment...</option>
              <option value="IT">IT</option>
              <option value="ACCOUNT">ACCOUNT</option>
              <option value="CALL">CALL</option>
            </select>
            <label class="input-group-text" for="inputDepartment">Deparment</label>
          </div>

            <Link className='btn btn-outline-secondary mx-2' to="/">Cancel</Link>
            <button type="submit" className='btn btn-primary'>Submit</button>
          </form>
        </div>

      </div>      
    </div>
  )
}
