import React from "react"

const Contact = () => {
    return(
        <div className="contact" style={{padding:"20px", textAlign:"center",backgroundColor:"white"}}>
            <h2>Welcome To
                <a href={`https://consultants-d87ef.web.app`}>
                     <button style={{backgroundColor:"green",
                    color:"white",borderRadius:"63px",
                    border:"hidden",
                    marginTop:"5%",
                    marginBottom:"100%"}}>
                    <em> Ajao.H's </em>
                    </button>
                </a> Contact Page
            </h2>
        </div>
    );
};
export default Contact;
