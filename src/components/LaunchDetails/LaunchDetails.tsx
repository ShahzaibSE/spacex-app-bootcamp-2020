import React, {useState} from 'react'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
// GraphQL Query.
import {LaunchInfoQuery} from "../../generated/graphql"
// Assets.
import {launchlist_container_error_message} from "./LaunchDetails.style"

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

type LaunchDetailsProps = {
    data: any
}

const LaunchDetails: React.FC<LaunchDetailsProps> = ({data}) => {
    const classes = launchlist_container_error_message()
    const [open, setOpen] = useState(true)
    //
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };
    //
    console.log("Single launch details")
    console.log(data)
    //
    if(!data){
        return(
            <Snackbar open={open}>
                <Alert onClose={handleClose} severity="error">
                  Launch Unavailable!
                </Alert>
            </Snackbar>
        )
    }
    return (
        <div>
            <h1>Launch Details</h1>
            <h2>{data.details}</h2>
        </div>
    )
}

export default LaunchDetails
