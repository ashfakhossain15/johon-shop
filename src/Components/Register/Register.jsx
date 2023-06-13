import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Auth Providers/AuthProviders";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const ref = React.useRef();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const passwordMatch = () => {
    return password === confirmPassword;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!passwordMatch()) {
      setError("Passwords do not match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        ref.current.reset();
        const user = result.user;
        setError("");
        setSuccess("User registration successful");
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
      });
  };

  return (
    <div className="flex  items-center h-screen max-w-4xl mx-auto">
      <div className=" w-full ">
        <form
          className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full "
          onSubmit={handleSubmit}
          ref={ref}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border  w-full bg-white py-4 rounded-lg px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border  w-full  bg-white py-4 rounded-lg  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border  w-full  bg-white py-4 rounded-lg  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                className="absolute right-0 top-0 mt-1 mr-1 focus:outline-none text-black"
                onClick={toggleShowPassword}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="relative">
              <input
                className="shadow appearance-none border  w-full  bg-white py-4 rounded-lg  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-0 top-0 mt-1 mr-1 focus:outline-none text-black"
                onClick={toggleShowPassword}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
            {success && success}
            {error && error}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
