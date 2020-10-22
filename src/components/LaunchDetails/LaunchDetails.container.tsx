import React, {useState} from 'react'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Grid from "@material-ui/core/Grid"
import LinearProgress from '@material-ui/core/LinearProgress'
// Assets.
import {launchlist_container_error_message} from "./LaunchDetails.style"
// GraphQL.
import {useLaunchInfoQuery} from "../../generated/graphql"

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LaunchDetailsContainerComponent = () => {
    const {data, loading, error} = useLaunchInfoQuery({variables:{id:"13"}})
    const classes = launchlist_container_error_message()
    const [open, setOpen] = useState(true)


    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };


    if (loading) {
        return (
            <Grid container>
               <Grid item sm={12} md={12} lg={12}>
                    <div style={{width:"100%"}}>
                        <LinearProgress/>
                    </div>
                </Grid> 
            </Grid>
        )
    }

    if (error || !data) {
        // setOpen(true)
        return(
            <Snackbar open={open}>
                <Alert onClose={handleClose} severity="error">
                  Couldn't launch details, please check your connection!
                </Alert>
            </Snackbar>
        )
    }

    return (
        <div>
            
        </div>
    )
}

export default LaunchDetailsContainerComponent
