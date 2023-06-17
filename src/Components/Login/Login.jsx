import { useContext, useState } from "react";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import app from "./../../../Firebase/Firebase.init";
import { AuthContext } from "./../../../Auth Providers/AuthProviders";

const auth = getAuth(app);
const Login = () => {
  const [showPassword, setShowPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);

  const handleShowPassword = (e) => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        e.target.reset();
        toast.success("Login successful");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Password or email incorrect");
      });
  };
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Repudiandae et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="input  border-blue-300"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="input focus:border-0 border-blue-300 relative w-full pr-9"
                    required
                  />
                  <button
                    onClick={handleShowPassword}
                    type="button"
                    className="absolute btn  label-text-alt bg-base-100 border-2  rounded-l-none mr-7 mt-0 py-0 border-l-2-2 border-blue-300 right-0 hover:border-2 hover:border-red-300 transition duration-300 w-16 "
                  >
                    {showPassword ? "Hide " : "Show"}
                  </button>
                </div>
                <label className="label flex justify-between w-full">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                  <p className="label-text-alt text-right">
                    Have no account ! Please
                    <span className="ps-2">
                      <Link to="/register">Register</Link>
                    </span>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
