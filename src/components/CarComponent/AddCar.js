import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
const AddCar = (props) => {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({carName: '', carEngine: '', carFuelType: '', carModel: '', carChargesPerMin: '',carBookingStatus:'',carCode:''});

    // For opening modal form
    const handleClickOpen = () => {
        setOpen(true);
    };
    // For closing modal form
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value});
    }

    // Save car and close modal form
    const handleSave = () => {
        props.addCar(car);
        handleClose();
    }

    return (
        <div>
            <Button variant="outlined" color="primary" style={{margin: 10}} onClick={handleClickOpen} style={{ backgroundColor:"green",margin:"10px", color:"white"}}>New Car</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle >New car</DialogTitle>
                <DialogContent>
                    <TextField autoFocus fullWidth   label="Name" name="carName"
                           value={car.carName} onChange={handleChange}/><br/>
                    <TextField fullWidth  label="Engine" name="carEngine"
                           value={car.carEngine} onChange={handleChange}/><br/>
                    <TextField fullWidth  label="Fuel" name="carFuelType"
                           value={car.carFuelType} onChange={handleChange}/><br/>
                    <TextField fullWidth  label="Model" name="carModel"
                           value={car.carModel} onChange={handleChange}/><br/>
                    <TextField fullWidth  label="Price" name="carChargesPerMin"
                           value={car.carChargesPerMin} onChange={handleChange}/><br/>
                    <TextField fullWidth  label="Status" name="carBookingStatus"
                           value={car.carBookingStatus} onChange={handleChange}/><br/>
                    <TextField fullWidth  label="Code" name="carCode"
                           value={car.carCode} onChange={handleChange}/><br/>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={handleClose}>Cancel</Button>
                    <Button color="primary"   onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddCar;





