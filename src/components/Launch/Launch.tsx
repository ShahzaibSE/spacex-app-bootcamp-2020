import React, {FC} from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {LaunchesQuery} from "./../../generated/graphql"
// Assets.
import {launchCardStyles} from "./Launch.style"
import rocket from "../../static/images/rocket.jpg"

type LaunchProps = {
  data: LaunchesQuery
}

const Launch: FC<LaunchProps> = ({data}: any) => {
    let launch = data
    let launch_video_link:string = data.links.video_link
    const classes = launchCardStyles();
    console.log("Single Launch Information")
    console.log(data)

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

    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia component="iframe"
            className={classes.media}
            // src={"https://www.youtube.com/watch?v=JuZBOUMsYws".replace("watch?v=", "embed/")}
            src={launch_video_link}
            title="SpaceX Launch Mission"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Mission: Falcon
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
}

export default Launch
