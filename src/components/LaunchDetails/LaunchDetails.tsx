import React, {useState} from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Grid from "@material-ui/core/Grid";
import  {CardMedia, Card, CardContent, CardActionArea, Typography} from '@material-ui/core';
import {Bounce} from "react-awesome-reveal"
// GraphQL Query.
import {LaunchInfoQuery} from "../../generated/graphql";
// Assets.
import {launchlist_container_error_message, launchlist_video_container, 
        launch_rocket_information_container} from "./LaunchDetails.style";
import rocket from "../../static/images/rocket.jpg";
import "./LaunchDetails.scss"
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
    const rocket_information_container_classes = launch_rocket_information_container()
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
                <Grid item sm={6} md={6} lg={6} spacing={2}>
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
                                            <CardContent>
                                                <Typography style={{fontWeight:"bold"}} 
                                                            variant="body1" color="textSecondary" component="p">
                                                {data.details != null ? data.details + "." : ''}
                                                </Typography>
                                            </CardContent> 
                                        </Card>
                                    </Grid>    
                                    :
                                    <Grid item sm={12} md={12} lg={12}>
                                     <Bounce>   
                                    <Card className={launch_video_container_classes.image_container}>
                                       <CardActionArea>  
                                        <img src={rocket} alt="SpaceX Rocket" />
                                        </CardActionArea>
                                        <CardContent>
                                            <Typography style={{fontWeight:"bold"}}  
                                                        variant="body1" color="textSecondary" component="p">
                                            {data.details != null ? data.details + "." : ''}
                                            </Typography>
                                        </CardContent>        
                                    </Card>
                                    </Bounce>
                                    </Grid>
                            } 
                    </Grid>        
                </Grid>
                <Grid item sm={12} md={2} lg={2}>
                   <Grid container direction="column" alignItems="center" justify="center" alignContent="center">
                    <Grid item sm={12} md={2} lg={2}>   
                    <Bounce>
                    <Card variant="outlined" className={rocket_information_container_classes.root}>
                            <CardContent>
                                <Typography
                                            color="textSecondary" gutterBottom>
                                    Launch Details
                                </Typography>
                                <br/>
                                <Typography color="textSecondary" 
                                            className={rocket_information_container_classes.title}>
                                    Flight Number:</Typography>
                                <Typography variant="h5" component="h2">
                                        {data.flight_number}
                                </Typography>

                                <Typography color="textSecondary" 
                                    className={rocket_information_container_classes.title} >
                                        Site Name:</Typography>
                                <Typography variant="h5" component="h2">
                                        {data.launch_site.site_name}
                                </Typography>

                                <Typography color="textSecondary" 
                                    className={rocket_information_container_classes.title} >
                                        Status:</Typography>
                                { data.launch_success === true ? 
                                        <Typography style={{color:"#4dd84d"}} variant="h5" component="h2">
                                                Success
                                        </Typography> : 
                                        <Typography style={{color:"#f1615a"}} variant="h5" component="h2">
                                            Fail
                                        </Typography>}

                                <Typography color="textSecondary" 
                                    className={rocket_information_container_classes.title} >
                                        Launch Year:</Typography>
                                <Typography variant="h5" component="h2">
                                        {data.launch_year}
                                </Typography>
                                
                            </CardContent>
                        </Card>
                        </Bounce>
                        </Grid>
                {/* </Grid>

                <Grid item sm={12} md={2} lg={2}> */}
                   <Grid item sm={12} md={2} lg={2}>
                     <Bounce>  
                    <Card variant="outlined" className={rocket_information_container_classes.root}>
                        <CardContent>
                            <Typography
                                        color="textSecondary" gutterBottom>
                                Rocket Details
                            </Typography>
                            <br/>
                            <Typography color="textSecondary" 
                                        className={rocket_information_container_classes.title}>
                                Rocket ID:</Typography>
                            <Typography variant="h5" component="h2">
                                    {data.rocket.rocket_id}
                            </Typography>

                            <Typography color="textSecondary" 
                                className={rocket_information_container_classes.title} >
                                    Rocket Name:</Typography>
                            <Typography variant="h5" component="h2">
                                    {data.rocket.rocket_name}
                            </Typography>

                            <Typography color="textSecondary" 
                                className={rocket_information_container_classes.title} >
                                    Rocket Type:</Typography>
                            <Typography variant="h5" component="h2">
                                    {data.rocket.rocket_type}
                            </Typography>
                            
                        </CardContent>
                     </Card>
                     </Bounce>
                     </Grid>
                    </Grid>
                </Grid>
           </Grid>
        </div>
    )
}

export default LaunchDetails
