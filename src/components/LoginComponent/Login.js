import React, { useState} from "react";
import { SERVER_URL} from "../CONST/constants";
import CompanyList from "../CompanyComponent/CompanyList";
import CarList from "../CarComponent/CarList";
import Button from "@material-ui/core/Button";
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";
import {Snackbar} from "@material-ui/core";
import bottomImage from "../../images/bottomImage.PNG";
import CarImage from "../../images/CarImage.PNG";
const Login = () => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    });


    const [isAuthenticated, setAuth] = useState(false);
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setUser({...user, [event.target.name] : event.target.value});
    }

    const login = () => {
        fetch(SERVER_URL + 'login', {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => {
                const jwtToken = res.headers.get('Authorization');
                if (jwtToken !== null) {
                    sessionStorage.setItem("jwt", jwtToken);
                    setAuth(true);
                }
                else {
                    setOpen(true);
                }
            })
            .catch(err => console.error(err))
    }

    if (isAuthenticated) {
        return <CompanyList />;
    }
    else {
        return(
            <div  style={{  width:"100%", display:"inline-flex"}}>
            <div className="loginData" style={{ backgroundColor:"lightgray",textAlign:"center", marginTop:"30px",border:"2px solid black", width:"100%"}}>
                <DialogTitle >Login </DialogTitle>
                    <TextField autoFocus fullWidth margin="normal"
                        name="username"
                        label="Username"
                        onChange={handleChange} />

                    <TextField autoFocus fullWidth margin="normal"
                        type="password"
                        name="password"
                        label="Password"
                        onChange={handleChange}/>
                    <br/><br/>
                    <Button
                        style={{ marginLeft:"15px",color:"white",marginBottom:"100%", backgroundColor:"green"}}
                        variant="outlined"
                        color="primary"
                        onClick={login}>
                        Login
                    </Button>

                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={() => setOpen(false)}
                    message="Login failed: Check your username and password"
                />

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        <div className="loginInfo" style={{textAlign:"center",fontSize:"3em",width:"100%",marginTop:"18px", fontWeight:"700",position:"relative", color: "white"}}>
            <hr></hr>
            Welcome to our login page !
            <hr></hr>
            <br/><br/>
            <img src={CarImage} className="my-picture" alt="my picture"
                 style={{ padding: "15px", width: "50%"}}/>
        </div>
            </div>
        );
    }
}
export default Login;
