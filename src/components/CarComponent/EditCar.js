import React, {useState} from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";

const EditCar = (props) => {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({carName: '', carEngine: '', carFuelType: '', carModel: '', carChargesPerMin: '',carBookingStatus:'',carCode:''});

    // For opening modal form
    const handleClickOpen = () => {
        setCar({carName: props.car.carName, carEngine: props.car.carEngine, carFuelType: props.car.carFuelType,
            carModel: props.car.carModel, carChargesPerMin: props.car.carChargesPerMin, carBookingStatus: props.car.carBookingStatus,carCode: props.car.carCode})
        setOpen(true);
    }
    // For closing modal form
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value});
    }

    // Update car and close modal form
    const handleSave = () => {
        props.updateCar(car, props.link);
        handleClose();
    }

    return (
        <div>
            <Button color="primary" size="small" onClick={handleClickOpen}>Edit</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit car</DialogTitle>
                <DialogContent>
                    <input type="text" placeholder="Name" name="carName"
                           value={car.carName} onChange={handleChange}/><br/>
                    <input type="text" placeholder="Engine" name="carEngine"
                           value={car.carEngine} onChange={handleChange}/><br/>
                    <input type="text" placeholder="Fuel" name="carFuelType"
                           value={car.carFuelType} onChange={handleChange}/><br/>
                    <input type="text" placeholder="Model" name="carModel"
                           value={car.carModel} onChange={handleChange}/><br/>
                    <input type="text" placeholder="Price" name="carChargesPerMin"
                           value={car.carChargesPerMin} onChange={handleChange}/><br/>
                    <input type="text" placeholder="Status" name="carBookingStatus"
                           value={car.carBookingStatus} onChange={handleChange}/><br/>
                    <input type="text" placeholder="Code" name="carCode"
                           value={car.carCode} onChange={handleChange}/><br/>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={handleClose}>Cancel</Button>
                    <Button color="primary" onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default EditCar;
