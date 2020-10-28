import React, {useState, FC} from 'react'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Grid from "@material-ui/core/Grid"
import LinearProgress from '@material-ui/core/LinearProgress'
// Assets.
import {launchlist_container_error_message} from "./LaunchDetails.style"
// GraphQL.
import {useLaunchInfoQuery} from "../../generated/graphql"
// Launch Details Component.
import LaunchDetails from "./LaunchDetails"

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

type LaunchDetailsContainerProps = {
    launch: any
} 

const LaunchDetailsContainerComponent:FC<LaunchDetailsContainerProps> = ({launch}) => {
    const {data, loading, error} = useLaunchInfoQuery({variables:{id:String(launch.flight_number)}})
    const classes = launchlist_container_error_message()
    const [open, setOpen] = useState(true)

    console.log("Launch Details")
    console.log(data)

    console.log("Launch Details passed as prop to get flight number")
    console.log(launch.flight_number)

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
            Launch Details.
            {/* <LaunchDetails data={{launches}:data}/> */}
        </div>
    )
}

export default LaunchDetailsContainerComponent
