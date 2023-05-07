import React from "react";
import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="error-page">
      <h1 className="error-heading">Oops!</h1>
      <p className="error-message">
        Something went wrong. Please try again later.
      </p>
      <img
        src="https://as1.ftcdn.net/v2/jpg/02/15/06/84/1000_F_215068406_S4qqbkegOu1Al2dQF3plwI3oWJvDWxYo.jpg"
        alt="Error"
        className="error-image"
      />
      <button className="error-button" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
