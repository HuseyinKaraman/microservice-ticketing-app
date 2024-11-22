import { useState } from 'react';
import useRequest from '../../hooks/use-request';
import Router from "next/router";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { doRequest, errors } = useRequest({
        url: "http://microservice-ticketing.test/api/users/signin",
        method: "post",
        body: {
          email,
          password,
        },
        onSuccess: () => Router.push("/"),
      });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await doRequest();
    }

    return (
        <div className="container mt-5 w-50 border p-5">
            <h1 className="mb-3 text-center">Sign In</h1>
            <form className="container mt-5" onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label>Email Address</label>
                    <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group mb-3">
                    <label>Password</label>
                    <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {errors}
                <button className="btn btn-primary">Sign In</button>
            </form>
        </div>
    )
}


export default Signin