import React from 'react';
import { Link } from 'react-router-dom';

const footerStyle = {
    padding: '20px 0',
    width: '100%',
    position: 'relative',
    bottom: '0',
};

function Footer() {
    return (
        <footer className="bg-dark text-white pt-5 pb-4" style={footerStyle}>
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    {/* About Section */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Amdox</h5>
                        <p>
                            Our company is dedicated to providing the best employee registration system.
                            Register, manage, and track employees efficiently and effectively.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Quick Links</h5>
                        <p><Link to="/" className="text-white" style={{ textDecoration: 'none' }}>Home</Link></p>
                        <p><Link to="/about" className="text-white" style={{ textDecoration: 'none' }}>About Us</Link></p>
                        <p><Link to="/services" className="text-white" style={{ textDecoration: 'none' }}>Services</Link></p>
                        <p><Link to="/contact" className="text-white" style={{ textDecoration: 'none' }}>Contact</Link></p>
                    </div>

                    {/* Contact Section */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
                        <p>
                            <i className="fas fa-home mr-3"></i> Sector 57, Main Street, Gurugram
                        </p>
                        <p>
                            <i className="fas fa-envelope mr-3"></i> info@amdox.com
                        </p>
                        <p>
                            <i className="fas fa-phone mr-3"></i> + 123 456 789
                        </p>
                        <p>
                            <i className="fas fa-print mr-3"></i> + 123 456 789
                        </p>
                    </div>

                    {/* Social Media Section */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Follow Us</h5>
                        <p>
                            <a href="https://www.facebook.com" className="text-white" style={{ textDecoration: 'none' }}>
                                <i className="fab fa-facebook-f"></i> Facebook
                            </a>
                        </p>
                        <p>
                            <a href="https://www.twitter.com" className="text-white" style={{ textDecoration: 'none' }}>
                                <i className="fab fa-twitter"></i> Twitter
                            </a>
                        </p>
                        <p>
                            <a href="https://www.instagram.com" className="text-white" style={{ textDecoration: 'none' }}>
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                        </p>
                        <p>
                            <a href="https://www.linkedin.com" className="text-white" style={{ textDecoration: 'none' }}>
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a>
                        </p>
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-lg-7">
                        <p className="text-center text-md-left">© 2024 Amdox. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
