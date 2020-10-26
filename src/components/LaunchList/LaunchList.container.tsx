import React, {useState} from 'react'
import {useLaunchesQuery} from "../../generated/graphql"
import Grid from "@material-ui/core/Grid"
import Backdrop from "@material-ui/core/Backdrop"
import CircularProgress from '@material-ui/core/CircularProgress'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
// Launch list component.
import LaunchList from "./LaunchList"
// Assets.
import {backdrop_loader_styles} from "./LaunchList.container.style"

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LaunchListContainerComponent = () => {
    const { data, error, loading } = useLaunchesQuery()
    const [open, setOpen] = useState(true)
    const classes = backdrop_loader_styles()

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
                    <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                            <CircularProgress color="inherit" />
                    </Backdrop>
                </Grid> 
            </Grid>
        )
    }

    if (error || !data) {
        // setOpen(true)
        return(
            <Snackbar open={open}>
                <Alert onClose={handleClose} severity="error">
                  Internet connection error!
                </Alert>
            </Snackbar>
        )
    }

    console.log("Launches list fetched from container component.")
    console.log(data)

    return (
        <div>
            <Grid container>
                <Grid item sm={12} md={12} lg={12}>
                    <LaunchList data={data} />
                </Grid>
            </Grid>
        </div>
    )
}

export default LaunchListContainerComponent
