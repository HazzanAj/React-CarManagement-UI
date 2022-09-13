import React from "react";

function Footer(){

    const currentYear = new Date().getFullYear();
    return(
        <footer  className="footer-date" style={{backgroundColor:"black",textAlign:"center",color:"white" }}>
            <div >
                © Copyright Ajao.H {currentYear}
            </div>
        </footer>

    )
}

export default Footer;
