import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMyAppContext } from "../../context";

const Signup = () => {
  const { dataProfile } = useMyAppContext(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = dataProfile.find(
      (profile) => profile.email === email && profile.password === password
    );

    if (user) {
      setLoginMessage("Login successful!");
      console.log("Logged in user:", user);
      navigate("/home"); 
    } else {
      setLoginMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <div id="content" className="w-full px-4">
        <div className="flex -mx-2">
          <div className="w-full md:w-1/2 px-2">
            <div className="bg-gray-100 p-6 rounded-md shadow">
              <h2 className="text-2xl font-bold mb-4">New Customer</h2>
              <p><strong>Register Account</strong></p>
              <p>
                By creating an account you will be able to shop faster, be up to
                date on an order's status, and keep track of the orders you have
                previously made.
              </p>
              <br />
              <Link
                to="/register"
                id="button-account"
                className="btn btn-primary bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Continue
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-2">
            <div className="bg-gray-100 p-6 rounded-md shadow">
              <h2 className="text-2xl font-bold mb-4">Returning Customer</h2>
              <p><strong>I am a returning customer</strong></p>

            
              <form onSubmit={handleLogin} id="customer_login">
             
                <div className="mb-4">
                  <label
                    htmlFor="customer_email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="customer_email"
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    autoCorrect="off"
                    autoCapitalize="off"
                    required
                  />
                </div>

          
                <div className="mb-4">
                  <label
                    htmlFor="customer_password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="customer_password"
                    placeholder="Password"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <a
                    href="#"
                    className="text-blue-500 hover:underline mt-2 block"
                    onClick={() => alert("Recover password functionality not implemented")}
                  >
                    Forgot your password?
                  </a>
                </div>

                {/* Submit Button */}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Sign In
                  </button>
                  <Link
                    to="/"
                    className="ml-2 text-blue-500 hover:underline"
                  >
                    Return to Store
                  </Link>
                </div>

               
                {loginMessage && (
                  <div className="mt-4 text-red-600">{loginMessage}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
