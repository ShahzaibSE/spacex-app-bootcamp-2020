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
// import rocket from "./rocket.jpg"

type LaunchProps = {
  data: LaunchesQuery
}

const Launch: FC<LaunchProps> = ({data}: any) => {
    const classes = launchCardStyles();
    console.log("Single Launch Information")
    console.log(data)
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia component="iframe"
            className={classes.media}
            src={"https://www.youtube.com/embed/0a_00nJ_Y88".replace("watch?v=", "embed/")}
            title="Batman by Jim Lee"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Mission: Falcon
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
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
