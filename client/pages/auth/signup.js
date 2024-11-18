import React, { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { doRequest, errors } = useRequest({
      url: "http://microservice-ticketing.test/api/users/signup",
      method: "post",
      body: {
        email,
        password,
      },
      onSuccess: () => Router.push("/"),
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    await doRequest();
  };

  return (
    <div className="container mt-5 w-50 border p-5">
      <h1 className="mb-3 text-center">Sign Up</h1>
      <form className="container mt-5" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Email Address</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label>Confirm Password</label>
          <input
            className="form-control"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {errors}
        <button className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
