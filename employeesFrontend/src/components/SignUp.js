// function SignUp() {

//     const handleSignUp = () => {

//         // alert("You are now the member of Amdox Family...");
//         event.preventDefault();
//         alert(document.getElementsById("firstName")).value();
//     }

//     return (
//         <section class="vh-150" style={{ backgroundColor: "#9A616D" }}>
//             <div class="container py-5 h-150">
//                 <div class="row d-flex justify-content-center align-items-center h-100">
//                     <div class="col col-xl-10">
//                         <div class="card" style={{ borderRadius: "1rem" }}>
//                             <div class="row g-0">
//                                 <div class="col-md-6 col-lg-5 d-none d-md-block">
//                                     <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
//                                         alt="login form" class="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
//                                 </div>
//                                 <div class="col-md-6 col-lg-7 d-flex align-items-center">
//                                     <div class="card-body p-4 p-lg-5 text-black">

//                                         <form>

//                                             <div class="d-flex align-items-center mb-3 pb-1">
//                                                 <i class="h1 fas fa-cubes fa-2x me-3" style={{ color: "black", fontFamily: "cursive" }}>Amdox</i>
//                                                 {/* <div class="h1 fw-bold mb-0"></div> */}
//                                                 <div style={{ letterSpacing: "1px", fontFamily: "cursive" }}>Let's be the Member of the Family</div>
//                                             </div>

//                                             <div data-mdb-input-init class="form-outline mb-4">
//                                                 <label class="form-label" for="form2Example17">First Name</label>
//                                                 <input type="text" id="form2Example17" class="form-control form-control-lg" name='firstName' />
//                                             </div>

//                                             <div data-mdb-input-init class="form-outline mb-4">
//                                                 <label class="form-label" for="form2Example17">Last Name</label>
//                                                 <input type="text" id="form2Example17" class="form-control form-control-lg" />
//                                             </div>

//                                             <div data-mdb-input-init class="form-outline mb-4">
//                                                 <label class="form-label" for="form2Example17">Email address</label>
//                                                 <input type="email" id="form2Example17" class="form-control form-control-lg" />
//                                             </div>

//                                             <div data-mdb-input-init class="form-outline mb-4">
//                                                 <label class="form-label" for="form2Example27">Password</label>
//                                                 <input type="password" id="form2Example27" class="form-control form-control-lg" />
//                                             </div>

//                                             <div data-mdb-input-init class="form-outline mb-4">
//                                                 <label class="form-label" for="form2Example27">Confirm Password</label>
//                                                 <input type="password" id="form2Example27" class="form-control form-control-lg" />
//                                             </div>

//                                             <div class="pt-1 mb-4">
//                                                 <button data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-block" type="submit" onClick={handleSignUp}>SignUp</button>
//                                             </div>
//                                             <a href="#!" class="small text-muted">Terms of use.</a>
//                                             <a href="#!" class="small text-muted">Privacy policy</a>
//                                         </form>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }


// export default SignUp;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();
    const [error, setError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        // alert(`First Name: ${data.firstName}, Last Name: ${data.lastName}, Email: ${data.email}`);
        try {
            const url = "http://localhost:8000/api/users"
            const { data: res } = await axios.post(url, data);
            navigate('/Login');
            console.log(res.message);
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message)
                console.log(error);
            }
        }
    };

    return (
        <section className="vh-150" style={{ backgroundColor: "#9A616D" }}>
            <div className="container py-5 h-150">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                        alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <form onSubmit={handleSignUp}>
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="h1 fas fa-cubes fa-2x me-3" style={{ color: "black", fontFamily: "cursive" }}>Amdox</i>
                                                <div style={{ letterSpacing: "1px", fontFamily: "cursive" }}>Let's be the Member of the Family</div>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="firstName">First Name</label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    required
                                                    className="form-control form-control-lg"
                                                    value={data.firstName}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="lastName">Last Name</label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    required
                                                    className="form-control form-control-lg"
                                                    value={data.lastName}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="email">Email address</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    className="form-control form-control-lg"
                                                    value={data.email}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="password">Password</label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    required
                                                    className="form-control form-control-lg"
                                                    value={data.password}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                                                <input
                                                    type="password"
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    required
                                                    className="form-control form-control-lg"
                                                    value={data.confirmPassword}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" type="submit">Sign Up</button>
                                            </div>
                                            <a href="#!" className="small text-muted">Terms of use.</a>
                                            <a href="#!" className="small text-muted">Privacy policy</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp;
