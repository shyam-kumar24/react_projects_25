import { useState } from "react";
import "./formValidate.css";

export default function ValidateTheForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleInputChange(eventTarget) {
    const { name, value } = eventTarget;

    console.log(name);
    console.log(value);

    setFormData({
      ...formData,
      [name]: value,
    });

    validateInput(name, value);
  }

  function validateInput(name, value) {
    switch (name) {
      case "username":
        setErrorMsg((prevError) => ({
          ...prevError,
          username:
            value.length < 3
              ? "Username must be at least 3 character long"
              : "",
        }));
        break;
      case "email":
        setErrorMsg((prevError) => ({
          ...prevError,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? ""
            : "Invalid email entered.",
        }));
        break;
      case "password":
        setErrorMsg((prevError) => ({
          ...prevError,
          password:
            value.length < 5
              ? "Password must be at least 5 character long"
              : "",
        }));
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="main-container">
      <h1>Simple Form Validation</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-div">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            placeholder="Enter username..."
            id="username"
            value={formData.username}
            onChange={(e) => handleInputChange(e.target)}
            name="username"
          />
          <span>{errorMsg.username}</span>
        </div>
        <div className="input-div">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter email..."
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e.target)}
            name="email"
          />
          <span>{errorMsg.email}</span>
        </div>
        <div className="input-div">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter password..."
            id="password"
            value={formData.password}
            onChange={(e) => handleInputChange(e.target)}
            name="password"
          />
          <span>{errorMsg.password}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
