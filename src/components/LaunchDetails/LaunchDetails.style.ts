import { makeStyles, Theme } from '@material-ui/core/styles';

export const launchlist_container_error_message = makeStyles((theme: Theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
    video_container: {
      minWidth:200,
      height:200
    }
}));

export const launchlist_video_container = makeStyles((theme: Theme) => ({
      root: {
        minWidth: 600,
        maxWidth:600,
        marginBottom:20,
        marginTop:20,
        marginLeft:20
      },
      video_container: {
        height:400,
        // width:600
      },
      image_container: {
        marginTop:20,
        height:400,
        width:600
      }
}))

export const launch_rocket_information_container = makeStyles((theme: Theme) => ({
    root: {
      minWidth: 275,
      minHeight:300,
      marginTop: 20,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
}))