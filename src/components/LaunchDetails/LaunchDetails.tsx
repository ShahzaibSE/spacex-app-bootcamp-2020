import React, {useState} from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Grid from "@material-ui/core/Grid";
import  {CardMedia, Card, CardActionArea, Typography} from '@material-ui/core';
// GraphQL Query.
import {LaunchInfoQuery} from "../../generated/graphql";
// Assets.
import {launchlist_container_error_message, launchlist_video_container} from "./LaunchDetails.style";
import rocket from "../../static/images/rocket.jpg";
// Utils helper functions.
import {create_video_link} from "../launch.utils";


function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

type LaunchDetailsProps = {
    data: any
}

const LaunchDetails: React.FC<LaunchDetailsProps> = ({data}) => {
    const classes = launchlist_container_error_message()
    const launch_video_container_classes = launchlist_video_container()
    const [open, setOpen] = useState(true)
    let launch_video_link: string = data.links.video_link
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
    //
    if (launch_video_link == null){
        launch_video_link = rocket
      } else {
        launch_video_link = create_video_link(launch_video_link.split(/[\s/v=]+/)
                                              [launch_video_link.split(/[\s/v=]+/).length-1])
    }

    return (
        <div>
          <Grid container>  
            <Grid item sm={12} md={12} lg={12}>
                <Grid container direction="column" justify="center" alignContent="center" alignItems="center">
                        {
                            data.links.video_link !== null 
                                ? 
                                <Grid item sm={12} md={12} lg={12}>
                                    <Card className={launch_video_container_classes.root}>
                                        <CardActionArea>
                                            <CardMedia  className={launch_video_container_classes.video_container}
                                                        component="iframe" 
                                                        src={launch_video_link}/>
                                        </CardActionArea>
                                    </Card>
                                </Grid>    
                                :
                                <Card className={launch_video_container_classes.root}> 
                                    <img src={rocket} alt="SpaceX Rocket" />
                                </Card>
                        } 
                </Grid>        
            </Grid>
           </Grid>
        </div>
    )
}

export default LaunchDetails
