import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";

const AddCompany = (props) => {
    const [open, setOpen] = useState(false);
    const [company, setCompany] = useState({name: '', branch: '', location: '', phone: '',
        establishedDate: '',numberOfEmployees:'',numberOfCars:'',companyCode:''});

    // For opening modal form
    const handleClickOpen = () => {
        setOpen(true);
    };
    // For closing modal form
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setCompany({...company, [event.target.name]: event.target.value});
    }

    // Save car and close modal form
    const handleSave = () => {
        props.addCompany(company);
        handleClose();
    }

    return (
        <div>
            <Button variant="outlined" color="primary" style={{margin: 10}} onClick={handleClickOpen} style={{ backgroundColor:"green",margin:"10px", color:"white"}}>New Company</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New company</DialogTitle>
                <DialogContent>
                    <TextField autoFocus fullWidth   label="Name" name="name"
                               value={company.name} onChange={handleChange}/><br/>
                    <TextField fullWidth  label="Branch" name="branch"
                               value={company.branch} onChange={handleChange}/><br/>
                    <TextField fullWidth  label="Location" name="location"
                               value={company.location} onChange={handleChange}/><br/>
                    <TextField fullWidth  label="Phone" name="phone"
                               value={company.phone} onChange={handleChange}/><br/>
                    <TextField fullWidth  label="EstablishedDate" name="establishedDate"
                               value={company.establishedDate} onChange={handleChange}/><br/>
                    <TextField fullWidth  label="NumberOfEmployees" name="numberOfEmployees"
                               value={company.numberOfEmployees} onChange={handleChange}/><br/>
                    <TextField fullWidth  label="NumberOfCars" name="numberOfCars"
                               value={company.numberOfCars} onChange={handleChange}/><br/>
                    <TextField fullWidth  label="CompanyCode" name="companyCode"
                               value={company.companyCode} onChange={handleChange}/><br/>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={handleClose}>Cancel</Button>
                    <Button color="primary"   onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddCompany;
