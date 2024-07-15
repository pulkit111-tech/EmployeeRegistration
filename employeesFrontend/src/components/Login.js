import { Link } from "react-router-dom"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(`First Name: ${data.firstName}, Last Name: ${data.lastName}, Email: ${data.email}`);
    try {
      const url = "http://localhost:8000/api/auth"
      // alert("entered the handler");
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      alert("User logged in successfully");
      // window.location("/");
      console.log(res.message);
      // if (data.email === "admin1234gmail.com" && data.password === "admin@1234")
      navigate('/adminPage');
      // navigate('/employee');
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message)
        console.log(error);
      }
    }
  };

  return (
    <section class="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style={{ borderRadius: "1rem" }}>
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form" class="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">

                    <form onSubmit={handleSubmit}>

                      <div class="d-flex align-items-center mb-3 pb-1">
                        <i class="h1 fas fa-cubes fa-2x me-3" style={{ color: "black", fontFamily: "cursive" }}>Amdox</i>
                        {/* <div class="h1 fw-bold mb-0">L</div> */}
                      </div>

                      <h5 class="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                      <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form2Example17">Email address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={data.email}
                          onChange={handleChange}
                          class="form-control form-control-lg" />
                      </div>

                      <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form2Example27">Password</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={data.password}
                          onChange={handleChange}
                          class="form-control form-control-lg" />
                      </div>

                      <div class="pt-1 mb-4">
                        <button data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                      </div>
                      <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? <Link to='/SignUp'
                        style={{ color: "#393f81" }}>Register here</Link></p>
                      <a href="#!" class="small text-muted">Terms of use.</a>
                      <a href="#!" class="small text-muted">Privacy policy</a>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;