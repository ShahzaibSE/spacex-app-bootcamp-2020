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
        maxWidth: 1000,
        marginBottom:20,
        marginTop:20
      },
      video_container: {
        height:400,
        width:600
      }
}))