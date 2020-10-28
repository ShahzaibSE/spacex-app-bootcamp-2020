import React, {FC, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import { TransitionProps } from '@material-ui/core/transitions';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
// GraphQL Launch Schema
import {LaunchesQuery} from "./../../generated/graphql";
// Assets.
import {launchCardStyles, dialogStyles} from "./Launch.style"
import rocket from "../../static/images/rocket.jpg"
import "./Launch.scss"
//Components.
import LaunchDetailsContainerComponent from "../LaunchDetails/LaunchDetails.container"

type LaunchProps = {
  data: LaunchesQuery
}


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Launch: FC<LaunchProps> = ({data}: any) => {
    let launch = data
    let launch_video_link:string = data.links.video_link
    // Styles Instances
    const classes = launchCardStyles();
    const dialog_classes = dialogStyles();
    const [isDialogOpen, setDialogOpen] = useState(false)

    console.log("Single Launch Info")
    console.log(launch)

    // Launch flags: Success, Failed or Unknown.
    const check_launch_status = (launch:any) => {
      if (launch.launch_success === true){
        return (
          <Button className="successFlag" variant="contained" size="small" disabled={true}>
            Success
          </Button>
        )
      } else if (launch.launch_success === false) {
        return (
          <Button className="failedFlag" variant="contained" size="small" disabled={true}>
            Fail
          </Button>
        )
      }else {
        return (
          <Button variant="contained" size="small" disabled={true}>
            N/A
          </Button>
        )
      }
    }

    // Creating Video link.
    const create_video_link = (video_id:string) => {
      let hostname = "youtube"
      let video_link = `https://www.${hostname}.com/embed/${video_id}`
      return video_link
    }

    if (launch_video_link == null){
      launch_video_link = rocket
    } else {
      launch_video_link = create_video_link(launch_video_link.split(/[\s/v=]+/)
                                            [launch_video_link.split(/[\s/v=]+/).length-1])
    }

    // Dialog handlers.
    const get_launch_detail = () => {
      console.log("Getting launch details")
      setDialogOpen(true)
    }
  
    const handleClose = () => {
      setDialogOpen(false);
    };

    return (
      <div>
        <Card className={classes.root} onClick={get_launch_detail}>
        <CardActionArea>
          <CardMedia component="iframe"
            className={classes.media}
            // src={"https://www.youtube.com/watch?v=JuZBOUMsYws".replace("watch?v=", "embed/")}
            src={launch_video_link}
            title="SpaceX Launch Mission"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Mission: {launch.mission_name} ({launch.launch_year})
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="h2" style={{color:"#9e9e9e"}}>
              {launch.launch_date_local}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.action_container}>
          {/* <Button size="small" color="primary">
            Learn More
          </Button> */}
          {
            check_launch_status(launch)
          }
          {/* <Button className="successFlag" variant="contained" size="small" disabled={true}>
            Success
          </Button> */}

        </CardActions>
      </Card>
      <Dialog fullScreen open={isDialogOpen} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={dialog_classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={dialog_classes.title}>
              Sound
            </Typography>
          </Toolbar>
        </AppBar>
        {/* <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List> */}
        <LaunchDetailsContainerComponent launch={launch}/>
      </Dialog>
      </div>
    )
}

export default Launch
