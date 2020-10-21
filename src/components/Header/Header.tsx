import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
// Assets.
import "./Header.scss"
import {headerStyles} from "./Header.style"

const Header = () => {
    const classes = headerStyles()
    return (
        <div>
                <AppBar position="static" className={classes.app_bar_container}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            {/* <MenuIcon /> */}
                        </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                            ＳｐａｃｅＸ
                    </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                            <SearchIcon />
                            </div>
                            <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
