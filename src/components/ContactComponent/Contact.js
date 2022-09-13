import React from "react"

const Contact = () => {
    return(
        <div className="contact" style={{padding:"20px",marginBottom:"80%", textAlign:"center",backgroundColor:"white"}}>
            <br></br>   <br></br>   <br></br>
            <h5>Welcome To
                 <a href={`https://consultants-d87ef.web.app`}>
                     <button style={{backgroundColor:"green",
                    color:"white",borderRadius:"15px",
                    border:"hidden",
                      marginLeft:"4px",
                    marginTop:"5%",
                         padding:"10px",
                    marginBottom:"100%"}}>
                    Ajao.H's
                    </button>
                </a> Contact Page
            </h5>
        </div>
    );
};
export default Contact;
