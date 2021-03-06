import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import {grey} from "@material-ui/core/colors"

export const headerStyles = makeStyles((theme: Theme) => createStyles({
        root: {
            flexGrow: 1
        },
        app_bar_container: {
            backgroundColor: grey[900]
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
                flexGrow: 1,
                display: 'none',
                [theme.breakpoints.up('sm')]: {
                display: 'block',
                fontWeight:"bolder",
                fontSize:"2rem"
            },
        },
        search: {
                position: 'relative',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: fade(theme.palette.common.white, 0.15),
                '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
                },
                marginLeft: 0,
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
                padding: theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
                transition: theme.transitions.create('width'),
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
        }),
);