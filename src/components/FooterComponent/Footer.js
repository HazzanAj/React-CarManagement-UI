import React from "react";

function Footer(){

    const currentYear = new Date().getFullYear();
    return(
        <footer  className="footer-date" style={{backgroundColor:"#203239",textAlign:"center",color:"white" }}>
            <div >
                © Copyright Ajao.H {currentYear}
            </div>
        </footer>

    )
}

export default Footer;
