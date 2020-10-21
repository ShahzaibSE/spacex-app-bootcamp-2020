import { makeStyles, Theme } from '@material-ui/core/styles';

export const launchlist_container_error_message = makeStyles((theme: Theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
}));