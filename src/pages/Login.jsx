import React from "react";
import { useForm } from "react-hook-form";
import { SHA256 } from "crypto-js";
import { useNavigate } from "react-router-dom";

const Login = ({ setAccessToken }) => {
  const navigate = useNavigate()
  function hashPassword(password) {
    const hash = SHA256(password).toString();
    return hash;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("username", data.email);
    formData.append("password", hashPassword(data.password));
    formData.append("grant_type", "password");

    try {
      const response = await fetch(
        "https://apiv2stg.promilo.com/user/oauth/token",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: "Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==",
          },
        }
      );
      const result = await response.json();
      setAccessToken(result.response.access_token);
      navigate("/products")
    } catch (error) {
      console.error("Error during login:", error.message);
    }

  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
