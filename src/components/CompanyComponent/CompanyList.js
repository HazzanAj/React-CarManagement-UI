import React, {Component} from "react";
import {SERVER_URL} from "../CONST/constants";
import "react-table-6/react-table.css"
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditCompany from "../CompanyComponent/EditCompany";
import Button from "@material-ui/core/Button";
import AddCompany from "../CompanyComponent/AddCompany";
import {CSVLink} from "react-csv";
import ReactTable from "react-table-6";
import Grid from '@material-ui/core/Grid';

class CompanyList extends Component {
    /*constructor*/
    constructor(props) {
        super(props);
        this.state = {company: []};
    }

    /* Fetch .then .then this.setState*/
    componentDidMount() {
        this.fetchCompany();
    }

    fetchCompany = () => {
        //Read Token from session storage and include it to authorization header
       // const token = sessionStorage.getItem("jwt");
        //console.log("FETCH")
        /* fetching the url and the api*/
        fetch(SERVER_URL + 'company/all',
            {
               // headers:{'Authorization': token}
            })
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    company: responseData
                });
            })
            .catch(err => console.error(err));
    }

    // Delete company
    onDelClick = (link) => {
        if (window.confirm('Are you sure to delete?')) {
            fetch(link, {method: 'DELETE'})
                .then(res => {
                    toast.success("CompanyList deleted", {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                    this.fetchCompany();
                })
                .catch(err => {
                    toast.error("Error when deleting", {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                    console.error(err)
                })
        }
    }

    // Add new company
    addCompany(company) {
        fetch(SERVER_URL + 'company/add',
            { method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(company)
            })
            .then(res => this.fetchCompany())
            .catch(err => console.error(err))
    }
    // Update company
    updateCompany(company, link) {
        fetch(link,
            { method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(company)
            })
            .then(res => {
                toast.success("Changes saved", {
                    position: toast.POSITION.BOTTOM_LEFT
                });
                this.fetchCompany();
            })
            .catch(err =>
                toast.error("Error when saving", {
                    position: toast.POSITION.BOTTOM_LEFT
                })
            )
    }
    render() {
        const columns = [ {
            Header: 'NAME',
            accessor: 'name'
        },{
            Header: 'BRANCH',
            accessor: 'branch'
        },
            {
                Header: 'LOCATION',
                accessor: 'location'
            },
            {
                Header: 'PHONE',
                accessor: 'phone'
            },
            {
                Header: 'ESTABLISHED DATE',
                accessor: 'establishedDate'
            },
            {
                Header: 'NUMBER OF EMPLOYEES',
                accessor: 'numberOfEmployees'
            },

            {
                Header: 'NUMBER OF CARS',
                accessor: 'numberOfCars'
            },
            {
                Header: 'COMPANY CODE',
                accessor: 'companyCode'
            },

            {
                sortable: false,
                filterable: false,
                width: 100,
                accessor: '_links.self.href',
                Cell: ({value, row}) => (<EditCompany company={row} link={value} updateCompany={this.updateCompany} fetchCompany={this.fetchCompany} />),
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
                <Grid container>

                <Grid item>
                <AddCompany addCompany={this.addCompany} fetchCars={this.fetchCompany}/>
                </Grid>
                    <Grid item style={{ padding:15}}>
                <CSVLink data={this.state.company} separator=";">Export CSV</CSVLink>
                    </Grid>
                </Grid>
                <ReactTable data={this.state.company} columns={columns} filterable={true} pageSize={20}/>
                <ToastContainer autoClose={1500} />
            </div>
        );
    }
}

export default  CompanyList;
