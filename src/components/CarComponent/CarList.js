import React, {Component} from 'react';
import {SERVER_URL} from '../CONST/constants'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCar from "./AddCar";
import EditCar from "./EditCar";
import {CSVLink} from "react-csv";
import Button from "@material-ui/core/Button";


class CarList extends Component {
    /*Create constructor first*/
    constructor(props) {
        super(props);
        this.state = { cars:[]};
    }

    /* Fetch .then .then this.setState*/
    componentDidMount() {
        this.fetchCars();
    }

    fetchCars = () => {
        console.log("FETCH")
        /* fetching the url and the api*/
        fetch(SERVER_URL + 'car/all')
            .then((response)=> response.json())
            .then((responseData) =>{
                this.setState({
                car:responseData
            });

        })
            .catch(err => console.error(err));
    }

    // Delete car
    onDelClick = (link) => {
        if (window.confirm('Are you sure to delete?')) {
            fetch(link, {method: 'DELETE'})
                .then(res => {
                    toast.success("Car deleted", {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                    this.fetchCars();
                })
                .catch(err => {
                    toast.error("Error when deleting", {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                    console.error(err)
                })
        }
    }

    // Add new car
    addCar(car) {
        fetch(SERVER_URL + 'car/add',
            { method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(car)
            })
            .then(res => this.fetchCars())
            .catch(err => console.error(err))
    }
    // Update car
    updateCar(car, link) {
        fetch(link,
            { method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(car)
            })
            .then(res => {
                toast.success("Changes saved", {
                    position: toast.POSITION.BOTTOM_LEFT
                });
                this.fetchCars();
            })
            .catch(err =>
                toast.error("Error when saving", {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            )
    }






    render() {
        const columns = [ {
            Header: 'CAR NAME ',
            accessor: 'carName'
        },{
            Header: 'CAR ENGINE ',
            accessor: 'carEngine'
        },
            {
                Header: 'CAR FUEL ',
                accessor: 'carFuelType'
            },
            {
                Header: 'CAR MODEL ',
                accessor: 'carModel'
            },
            {
                Header: 'CAR CHARGES ',
                accessor: 'carChargesPerMin'
            },
            {
                Header: 'CAR STATUS ',
                accessor: 'carBookingStatus'
            },

            {
                Header: 'CAR CODE ',
                accessor: 'carCode'
            },
            {
                sortable: false,
                filterable: false,
                width: 100,
                accessor: '_links.self.href',
                Cell: ({value, row}) => (<EditCar car={row} link={value} updateCar={this.updateCar} fetchCars={this.fetchCars} />),
            },
            {
                sortable: false,
                filterable: false,
                width: 100,
                accessor: '_links.self.href',
                Cell: ({value}) => (<Button size="small" color="secondary" onClick={()=>{this.onDelClick(value)}}>Delete</Button>)
            }


        ]

        return(
            <div className="App" style={{ backgroundColor:"lightyellow"}}>
                <AddCar addCar={this.addCar} fetchCars={this.fetchCars} />
                <CSVLink data={this.state.cars} separator=";">Export CSV</CSVLink>
           <ReactTable data={this.state.cars} columns={columns} filterable={true} pageSize={20}/>
                <ToastContainer autoClose={1500} />
            </div>
            );
}
}
export default CarList;



/*Not needed*/
/* const tableRows = this.state.cars.map (( car, index) =>
      <tr> key={index}
          <td>{car.carName}</td>
          <td>{car.carEngine}</td>
          <td>{car.carFuelType}</td>
          <td>{car.carModel}</td>
          <td>{car.carChargesPerMin}</td>
          <td>{car.carBookingStatus}</td>
          <td>{car.carCode}</td>
      </tr>);*/
