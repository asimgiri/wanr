import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

export default function Footer() {
    return (
        <Router>
            <section className="footer center">
                <div className="container">
                    <ul className="spacing">
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/privacy">Privacy</Link>
                        </li>
                        <li>
                            <Link to="/terms">Terms</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact US</Link>
                        </li>
                    </ul>

                    <ul className="spacing">
                        <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href=""><i className="fab fa-twitter"></i></a></li>
                        <li><a href=""><i className="fab fa-instagram"></i></a></li>
                    </ul>

                    <p className="subtitle spacing_two">Made<br />in<br />Düsseldorf</p>

                    <span>© 2019 Wanr</span>

                </div>

            </section>
        </Router>
    )
}