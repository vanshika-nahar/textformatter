import React from 'react'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <span className="navbar-brand">{props.title}</span>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li> */}
                        </ul>
                        <div style={{paddingRight:20}} className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.colorRedmode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red Mode</label>
                        </div>
                        <div style={{ paddingRight: 20 }} className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.colorPurplemode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Purple Mode</label>
                        </div>
                        <div style={{ paddingRight: 20 }} className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.colorGreenmode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green Mode</label>
                        </div>
                        <div className={`form-check form-switch text-${props.mode === "light"?"dark":"light"}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
