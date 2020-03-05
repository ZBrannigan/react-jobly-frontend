import React, { useState, useContext } from 'react';
import JoblyApi from './helpers/JoblyApi';
import FormInputs from './FormInputs';
import TokenContext from './helpers/TokenContext';
// import 'SignupForm.css'

function SignupForm() {

  const INITIAL_STATE = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE);
  const {saveToken} = useContext(TokenContext);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(oldFormData => ({ ...oldFormData, [name]: value }));
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let token = await JoblyApi.signUp(formData);
    saveToken(token);
  }

  const formInputs = [
    {
      name: "username",
      value: formData.username
    },
    {
      name: "password",
      value: formData.password
    },
    {
      name: "first_name",
      value: formData.first_name
    },
    {
      name: "last_name",
      value: formData.last_name
    },
    {
      name: "email",
      value: formData.email
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <FormInputs handleChange={handleChange} inputs={formInputs} />
      <button>Submit</button>
    </form>
  )
}


export default SignupForm;