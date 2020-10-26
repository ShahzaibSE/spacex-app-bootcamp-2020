import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const launchlist_container_error_message = makeStyles((theme: Theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
}));

export const backdrop_loader_styles = makeStyles((theme: Theme) =>
      createStyles({
        backdrop: {
          zIndex: theme.zIndex.drawer + 1,
          color: '#fff',
        },
      }),
);