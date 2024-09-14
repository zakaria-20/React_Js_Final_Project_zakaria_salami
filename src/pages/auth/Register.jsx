import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMyAppContext } from "../../context";

const Register = () => {
  const { dataProfile, setDataProfile } = useMyAppContext();
  const navigate = useNavigate();

  const [firstInputValue, setFirstInputValue] = useState("");
  const [lastInputValue, setLastInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [validationMessage, setValidationMessage] = useState(""); 

  const invalidChars = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProfile = {
      firstName: firstInputValue,
      lastName: lastInputValue,
      email: emailInputValue,
      password: passwordInputValue,
    };

  
    if (!firstInputValue) {
      setValidationMessage("First name is required.");
      return;
    } else if (invalidChars.test(firstInputValue)) {
      setValidationMessage("Your first name contains special characters.");
      return;
    } else if (!lastInputValue) {
      setValidationMessage("Last name is required.");
      return;
    } else if (!emailInputValue) {
      setValidationMessage("Email is required.");
      return;
    } else if (dataProfile.find((element) => element.email === emailInputValue)) {
      setValidationMessage("This email already exists.");
      return;
    } else if (!passwordInputValue) {
      setValidationMessage("Password is required.");
      return;
    } else {
      setDataProfile([...dataProfile, newProfile]); 
      navigate("/login", {
        state: { notificationMessage: "Registration Successful!" },
      });
    }
  };

  return (
    <div id="content" className="w-full px-4">
      <h1 className="text-3xl font-bold mb-6">Create Account</h1>
      <form onSubmit={handleSubmit} id="create_customer" acceptCharset="UTF-8">
        <div id="create-account-form">
          <fieldset id="account" className="space-y-6">
            <legend className="text-xl font-semibold mb-4">Your Personal Details</legend>

            <div className="mb-4">
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                value={firstInputValue}
                onChange={(e) => setFirstInputValue(e.target.value)}
                id="first_name"
                placeholder="First Name"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

        
            <div className="mb-4">
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                value={lastInputValue}
                onChange={(e) => setLastInputValue(e.target.value)}
                id="last_name"
                placeholder="Last Name"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

          
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={emailInputValue}
                onChange={(e) => setEmailInputValue(e.target.value)}
                id="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                autoCorrect="off"
                autoCapitalize="off"
              />
            </div>

       
            <div className="mb-4">
              <label htmlFor="create_password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={passwordInputValue}
                onChange={(e) => setPasswordInputValue(e.target.value)}
                id="create_password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

          
            {validationMessage && (
              <div className="mb-4 text-red-600">{validationMessage}</div>
            )}
          </fieldset>

     
          <div className="mt-6 flex items-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span>
                <i className="fa fa-user mr-2" />
                Create
              </span>
            </button>
            <Link className="ml-4 text-blue-500 hover:underline" to="/home">
              Return to Store
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
