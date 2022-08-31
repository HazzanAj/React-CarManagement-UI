import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import CarList from "../CarComponent/CarList";
import CompanyList from "../CompanyComponent/CompanyList";
import Login from "../LoginComponent/Login";
import Home from "../HomeComponent/Home"
import Contact from "../ContactComponent/Contact";
function Header() {
    return (
        <BrowserRouter>
            <header style={{backgroundColor:"#203239",}}>

                <nav style={{display: "inline-flex", justifyContent:"center",marginTop: "15px" ,  width:"100%",  margin: "5px",}}>
                    <Link to="/">
                            <div className="home-button" style={{marginRight: "3px", padding:"3px",backgroundColor:"#100720", color:"white",border:"1px solid white"}}>
                             <div className="dropdown" >
                                    <button type="button" className="btn btn-inherit dropdown-toggle text-white" data-bs-toggle="dropdown">
                                        Home
                                    </button>
                                    <ul className="dropdown-menu" style={{backgroundColor:"lightyellow",border:"2px solid black", color:"white"}}>
                                        <li><h5 className="dropdown-header">Home</h5></li>
                                        <li><a className="dropdown-item" href="#">About</a></li>
                                        <li><a className="dropdown-item" href="#">Services</a></li>
                                        <li><a className="dropdown-item" href="#">Cost Estimate</a></li>
                                        <li><h5 className="dropdown-header">Lorry Hire</h5></li>
                                        <li><a className="dropdown-item" href="#">Car Repairer</a></li>
                                    </ul>
                                </div>
                            </div>
                    </Link>{''}

                    <Link to="/carlist">
                        <div className="carlist-button" style={{marginRight: "3px",padding:"3px",backgroundColor:"#100720", color:"white",border:"1px solid white"}}>
                            <button type="button" className="btn btn-inherit  text-white">
                                CarList
                            </button>
                        </div>
                    </Link>{''}

                    <Link to="/companylist">
                        <div className="companylist-button" style={{marginRight: "3px",padding:"3px",backgroundColor:"#100720", color:"white",border:"1px solid white"}}>
                            <button type="button" className="btn btn-inherit  text-white">
                                CompanyList
                            </button>
                        </div>
                    </Link>{''}

                    <Link to="/contact">
                        <div className="contact-button" style={{marginRight: "3px",padding:"3px",backgroundColor:"#100720", color:"white",border:"1px solid white"}}>
                            <button type="button" className="btn btn-inherit  text-white">
                                Contact
                            </button>
                        </div>
                    </Link>{''}


                </nav>

                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/carlist" element={<CarList/>}/>
                    <Route path="/companylist" element={<CompanyList/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route render={() => <h1> Page not found</h1>}></Route>
                </Routes>

            </header>
        </BrowserRouter>
    )
}

export default Header;
