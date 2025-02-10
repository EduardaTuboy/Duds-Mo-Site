import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Submetendo o formulário manualmente
    event.target.submit();
  };
  const handleForgotPassword = (event) => {
    event.preventDefault();
    alert("bruh");
  };

  return (
    <div>
      <Navbar pagina={"register"} />

      <h2>Login</h2>
      <form action="/submit-login" method="POST">
        <input
          className="NB_border"
          type="text"
          id="username"
          name="username"
          placeholder="username"
          required
        />
        <input
          className="NB_border"
          type="password"
          id="password"
          name="password"
          placeholder="senha"
          required
        />
        <input
          className="NB_border"
          type="text"
          id="submit"
          value="Login"
          onClick={handleSubmit}
          style={{ cursor: "pointer" }}
        />
        <input
          className="NB_border"
          type="text"
          id="forgot"
          value="Esqueceu a senha?"
          onClick={handleForgotPassword}
          style={{ cursor: "pointer" }}
        />
      </form>

      <Footer />
    </div>
  );
}

export default Register;
