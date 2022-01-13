import React, { useState } from 'react';
import styles from "./UserFormComponent.module.css";

const UserForm = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstname, lastname, email, password, confirmPassword };
    console.log("Welcome", newUser)
  };

  return(
    <div className={ styles.formWrapper }>
      <h1>User Form</h1>
      <form className={ styles.userForm } onSubmit={ createUser }>
        <div>
          <label htmlFor="firstnameInput">First Name:</label>
          <input id="firstnameInput" type="text" onChange={(e) => setFirstname(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="lastnameInput">Last Name:</label>
          <input id="lastnameInput" type="text" onChange={(e) => setLastname(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="emailInput">Email:</label>
          <input id="emailInput" type="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="passwordInput">Password:</label>
          <input id="passwordInput" type="text" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="confirmPasswordInput">Confirm Password:</label>
          <input id="confirmPasswordInput" type="text" onChange={(e) => setConfirmPassword(e.target.value)}/>
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

