import React from "react"
import CarImage from "../../images/CarImage.PNG"
import bottomImage from "../../images/bottomImage.PNG"
import {Link, Route, Routes} from "react-router-dom";

const Home = () => {
    return (
        <div className="home" style={{ backgroundColor:"black", width:"100%",marginTop: "15px" }}>

            <div className="profile-container" style={{display: "inline-flex",marginTop: "105px", padding: "15px", width: "100%" }}>

                <img src={CarImage} className="my-picture" alt="my picture"
                     style={{width: "100%", padding: "15px", height: "100%"}}/>

                <div className="profile" style={{display: "inline-block", padding: "15px", width: "100%"}}>

                    <div className="my-message" style={{margin: "15px"}}>
                        <h1 style={{textAlign: "left", width: "100%",marginTop: "45px", padding: "10px",fontSize:"3em", fontWeight:"700", color: "white"}}>
                            Easy car hiring and management application
                        </h1>
                        <h3 style={{textAlign: "left", width: "100%", padding: "10px",marginTop: "15px",fontSize:"1.8em", fontWeight:"500", color: "white"}}>
                            Find the right cars suitable for your needs.
                        </h3>
                        <h6 style={{textAlign: "left", width: "100%", marginTop: "55px",   wordSpacing: "2px", padding: "10px",fontSize:"1.8em", fontWeight:"300", color: "white"}}>
                            Our Services is suitable for Automotive Industries, car owners who want to lease their cars for business purposes,
                            and customers who want to hire vehicle for short trip, holidays or for transporting their goods.
                        </h6>

                    </div>

                    <Link to="/login">

                    <div className="my-message" style={{
                        marginTop:"25%",
                        borderRadius:"10px",
                        padding: "15px",
                        width: "fit-content",
                        fontWeight: "bold",
                        fontSize: "large",
                        display:"inline-flex",
                        backgroundColor: "White",
                        color: "black",
                        float:"right",

                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                             className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                            <path fill-rule="evenodd"
                                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg>
                         Login
                    </div>
                    </Link>{''}

                </div>

            </div>

            <div className="contact-us" style={{padding:"25px", backgroundColor:"gray", width:"100%", }}>
                <div className="contact-us-message" style={{textAlign: "left",fontSize:"1.8em", fontWeight:"700", color: "white"}}>
                    Opening Days : Mon - Friday | Opening Hours : 7:00am - 18:00pm
                </div>
            </div>

            <main className="body-main" style={{padding:"25px", backgroundColor:"black",textAlign:"white", width:"100%", }}>
                <div className="d-flex justify-content-center" style={{marginTop: "5%"}}>
                <div className="btn-group">
                    <div className="btn-group" >
                        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" style={{marginRight: "3px",padding:"3px",backgroundColor:"#100720", color:"white",border:"1px solid white"}}>
                            Name</button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Audi</a>
                            <a className="dropdown-item" href="#">BMW</a>
                            <a className="dropdown-item" href="#">Benz</a>
                            <a className="dropdown-item" href="#">Ford</a>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle"style={{marginRight: "3px",padding:"3px",backgroundColor:"#100720", color:"white",border:"1px solid white"}}
                                data-bs-toggle="dropdown">Model
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">2008</a>
                            <a className="dropdown-item" href="#">2018</a>
                            <a className="dropdown-item" href="#">2019</a>
                            <a className="dropdown-item" href="#">2020</a>
                            <a className="dropdown-item" href="#">2021</a>
                            <a className="dropdown-item" href="#">2022</a>
                        </div>
                    </div>
                    <div className="btn-group" >
                        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" style={{marginRight: "3px",padding:"3px",backgroundColor:"#100720", color:"white",border:"1px solid white"}} >
                            Body Type
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Coupe</a>
                            <a className="dropdown-item" href="#">Sedan</a>
                            <a className="dropdown-item" href="#">Wagon</a>
                            <a className="dropdown-item" href="#">SUV</a>
                        </div>
                    </div>

                </div>
                </div>

                <div className="contact-us" style={{padding:"25px", backgroundColor:"black", width:"100%",marginTop: "2%" }}>
                    <div className="contact-us-message" style={{textAlign: "center",fontSize:"1.8em", fontWeight:"300", color: "white"}}>
                        Select by popular body type
                    </div>
                </div>

                <div className="d-flex justify-content-center">

                <div className="d-flex flex-wrap align-content-around " >
                    <div className="body-type " style={{ margin: "10px",fontSize:"3em", fontWeight:"700", color: "black", padding: "10px",borderRadius:"15px", backgroundColor:"darkgray"}}>Crossover

                    </div>

                    <div className="body-type " style={{ margin: "10px",fontSize:"3em", fontWeight:"700", color: "black", padding: "10px",borderRadius:"15px", backgroundColor:"darkgray"}}>Wagon

                    </div>
                    <div className="body-type  " style={{ margin: "10px",fontSize:"3em", fontWeight:"700",color: "black", padding: "10px",borderRadius:"15px", backgroundColor:"darkgray"}}>Sedan

                    </div>
                    <div className="body-type  " style={{ margin: "10px",fontSize:"3em", fontWeight:"700", color: "black", padding: "10px",borderRadius:"15px", backgroundColor:"darkgray"}}>SUV

                    </div>
                    <div className="body-type " style={{ margin: "10px",fontSize:"3em", fontWeight:"700", color: "black", padding: "10px",borderRadius:"15px", backgroundColor:"darkgray"}}>Coupe

                    </div>


                    <div className="body-type  " style={{ margin: "10px",fontSize:"3em", fontWeight:"700", color: "black", padding: "10px",borderRadius:"15px", backgroundColor:"darkgray"}}>Compact
                    </div>
                    <div className="body-type  " style={{ margin: "10px",fontSize:"3em", fontWeight:"700", color: "black", padding: "10px",borderRadius:"15px", backgroundColor:"darkgray"}}>Convertible

                    </div>

                </div>
                </div>


                <div className="container-fluid mt-3">
                    <h1 style={{marginTop: "6%",color:"White" }}>Cheapest Offer</h1>
                    <div className="row"  >
                        <div className="col-sm-4 p-3 bg-dark text-white" >

                            <div id="demo" class="carousel slide" data-bs-ride="carousel" >


                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                                </div>


                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={CarImage}  alt="Los Angeles" class="d-block" style={{width:"100% " }}/>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={CarImage} alt="Chicago" class="d-block" style={{width:"100% " }}/>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={CarImage} alt="New York" class="d-block" style={{width:"100% " }}/>
                                    </div>
                                </div>


                                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                            </div>

                            <div className="affordable-car-info" style={{backgroundColor:"black",padding:"10px",display:"inline-flex",width:"100%", color:"white", marginTop:"5%" }}>
                                <div style={{float:"left",width:"100%",}}>Model  </div>
                                <div style={{float:"right"}}>2017  </div>
                            </div>
                            <div className="affordable-car-info" style={{backgroundColor:"black",padding:"10px",display:"inline-block",width:"100%", color:"white", marginTop:"5%" }}>
                                <div style={{width:"100%"}}>Bentley 2017 Model  </div>
                                <div style={{width:"100%"}}>€35/hr </div>
                                <hr></hr>

                            </div>

                            <div className="d-flex justify-content-center" style={{backgroundColor:"black"}}>

                                <div className="d-flex flex-wrap align-content-around " >
                                    <div className="p-1 " style={{display:"inline-block",textAlign:"center", margin: "10px",fontSize:"1em", fontWeight:"200", color: "white"}}>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                             fill="currentColor" className="bi bi-speedometer" viewBox="0 0 16 16">
                                            <path
                                                d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                                            <path fill-rule="evenodd"
                                                  d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
                                        </svg>

                                        <p>25K mi</p>

                                    </div>
                                    <div className="p-1 " style={{display:"inline-block",textAlign:"center", margin: "10px",fontSize:"1em", fontWeight:"200", color: "white"}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                             fill="currentColor" className="bi bi-diagram-3-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                  d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z"/>
                                        </svg>

                                        <p>Manual</p>

                                    </div>
                                    <div className="p-1 " style={{display:"inline-block",textAlign:"center", margin: "10px",fontSize:"1em", fontWeight:"100", color: "white"}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                             fill="currentColor" className="bi bi-droplet-half" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                  d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                                            <path fill-rule="evenodd"
                                                  d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
                                        </svg>
                                        <p>Diesel</p>

                                    </div>


                                </div>
                            </div>

                        </div>




                        <div className="col-sm-8 p-3 bg-dark text-white" >

                            <div className="container-fluid mt-3">

                                <div className="carbyside" style={{ width:"100%"}}>
                                    <div className="col p-3 bg-black text-white" style={{ display:"inline-block",width:"100%"}}>

                                        <img src={CarImage} className="my-picture" alt="my picture" style={{width: "100%"}}/>

                                        <div className="affordable-car-info" style={{backgroundColor:"black",padding:"10px",display:"inline-flex",width:"100%", color:"white", }}>
                                            <div style={{float:"left",width:"100%",}}>Model  </div> <div style={{float:"right"}}>2017  </div>
                                        </div>

                                        <hr></hr>

                                        <div className="affordable-car-info" style={{backgroundColor:"black",display:"inline-block",width:"100%", color:"white",}}>
                                            <div style={{width:"100%"}}>Bentley 2017 Model  </div>
                                            <div style={{width:"100%"}}>€35/hr </div>
                                        </div>


                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="container-fluid mt-3">
                        <h1 style={{marginTop: "6%",color:"White", textAlign:"center" }}>Cheapest Offer</h1>
                        <div className="row">
                            <div className="col p-3 bg-back text-white" style={{border: "1px solid white", margin:"5px"}}>
                                <img src={CarImage} alt="Chicago" className="d-block" style={{width: "100% "}}/>
                                <div className="affordable-car-info" style={{backgroundColor:"black",padding:"10px",display:"inline-flex",width:"100%", color:"white", }}>
                                    <div style={{float:"left",width:"100%",}}>Model  </div> <div style={{float:"right"}}>2020  </div>
                                </div>

                                <hr></hr>

                                <div className="affordable-car-info" style={{backgroundColor:"black",display:"inline-block",width:"100%", color:"white",}}>
                                    <div style={{width:"100%"}}>Bentley 2020 Model  </div>
                                    <div style={{width:"100%"}}>€35/hr </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                         fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                    </svg>
                                  Helsinki
                                </div>
                            </div>

                            <div className="col p-3 bg-back text-white" style={{border: "1px solid white ", margin:"5px"}}>
                                <img src={CarImage} alt="Chicago" className="d-block" style={{width: "100% "}}/>
                                <div className="affordable-car-info" style={{backgroundColor:"black",padding:"10px",display:"inline-flex",width:"100%", color:"white", }}>
                                    <div style={{float:"left",width:"100%",}}>Model  </div> <div style={{float:"right"}}>2018  </div>
                                </div>

                                <hr></hr>

                                <div className="affordable-car-info" style={{backgroundColor:"black",display:"inline-block",width:"100%", color:"white",}}>
                                    <div style={{width:"100%"}}>Bentley 2018 Model  </div>
                                    <div style={{width:"100%"}}>€35/hr </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                         fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                    </svg>
                                   Turku
                                </div>

                            </div>

                            <div className="col p-3 bg-back text-white" style={{border: "1px solid white ", margin:"5px"}}>
                                <img src={CarImage} alt="Chicago" className="d-block" style={{width: "100% "}}/>
                                <div className="affordable-car-info" style={{backgroundColor:"black",padding:"10px",display:"inline-flex",width:"100%", color:"white", }}>
                                    <div style={{float:"left",width:"100%",}}>Model  </div> <div style={{float:"right"}}>2010  </div>
                                </div>

                                <hr></hr>

                                <div className="affordable-car-info" style={{backgroundColor:"black",display:"inline-block",width:"100%", color:"white",}}>
                                    <div style={{width:"100%"}}>Bentley 2010 Model  </div>
                                    <div style={{width:"100%"}}>€35/hr </div>
                                    <div style={{width:"100%"}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                             fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                        </svg>
                                        Tampere
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            </main>
            <img src={bottomImage } className="my-picture" alt="my picture" style={{width: "100%", padding: "15px", height: "100%", borderTop:"15px solid #F0A500"}}/>
        </div>
    );
}
export default Home;
