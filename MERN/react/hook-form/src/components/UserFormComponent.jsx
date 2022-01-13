import React, { useState } from 'react';
import styles from "./UserFormComponent.module.css";

const UserForm = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleFirstname = (e) => {
    let fname = e.target.value;
    setFirstname(fname);
    (fname.length >= 2 || fname.length == 0) ? 
      setFirstnameError(false):
      setFirstnameError(true)
  }

  const handleLastname = (e) => {
    let lname = e.target.value;
    setLastname(lname);
    (lname.length >= 2 || lname.length == 0) ? 
      setLastnameError(false):
      setLastnameError(true)
  }

  const handleEmail = (e) => {
    let email = e.target.value;
    setEmail(email);
    (email.length >= 5 || email.length == 0) ? 
      setEmailError(false):
      setEmailError(true)
  }

  const handlePassword = (e) => {
    let pass = e.target.value;
    setPassword(pass);
    (pass.length >= 8 || pass.length == 0) ? 
      setPasswordError(false):
      setPasswordError(true);
    
    (pass == confirmPassword) ? 
      setConfirmPasswordError(false):
      setConfirmPasswordError(true)
  }

  const handleConfirmPassword = (e) => {
    let cpass = e.target.value;
    setConfirmPassword(cpass);
    (cpass == password || cpass.length == 0) ? 
      setConfirmPasswordError(false):
      setConfirmPasswordError(true)
  }

  const createUser = (e) => {
    e.preventDefault();
    if (firstnameError || lastnameError || emailError || passwordError || confirmPasswordError) {
      console.log("Failed to register. Please check input")
    } else if (firstname && lastname && email && password && confirmPassword) {
      const newUser = { firstname, lastname, email, password, confirmPassword };
      console.log("Welcome", newUser)
    } else {
      console.log("Please fill in all fields")
    }
  };

  return(
    <div className={ styles.formWrapper }>
      <h1>User Form</h1>
      <form className={ styles.userForm } onSubmit={ createUser }>

        
        <div>
          <label htmlFor="firstnameInput">First Name:</label>
          <input id="firstnameInput" type="text" onChange={ handleFirstname }/>
          { firstnameError ?
          <p>First name must be at least 2 characters</p>:
          "" }
        </div>
        <div>
          <label htmlFor="lastnameInput">Last Name:</label>
          <input id="lastnameInput" type="text" onChange={ handleLastname }/>
          { lastnameError ?
          <p>Last name must be at least 2 characters</p>:
          "" }
        </div>
        <div>
          <label htmlFor="emailInput">Email:</label>
          <input id="emailInput" type="email" onChange={ handleEmail }/>
          { emailError ?
          <p>Email must be at least 5 characters</p>:
          "" }
        </div>
        <div>
          <label htmlFor="passwordInput">Password:</label>
          <input id="passwordInput" type="password" onChange={ handlePassword }/>
          { passwordError ?
          <p>Password must be at least 8 characters</p>:
          "" }
        </div>
        <div>
          <label htmlFor="confirmPasswordInput">Confirm Password:</label>
          <input id="confirmPasswordInput" type="password" onChange={ handleConfirmPassword }/>
          { confirmPasswordError ?
          <p>Passwords must match.</p>:
          "" }
        </div>
        <input type="submit" value="Create New User" />
      </form>
      <div className={ styles.displayForm }>
        <div>First Name: { firstname }</div>
        <div>Last Name: { lastname }</div>
        <div>Email: { email }</div>
        <div>Password: { password }</div>
        <div>Confirm Password: { confirmPassword }</div>
      </div>
    </div>

  );
};

export default UserForm;

