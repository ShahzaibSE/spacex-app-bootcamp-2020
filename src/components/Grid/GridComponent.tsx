import React from 'react'
import Grid from "@material-ui/core/Grid"
// Components.
import LaunchListContainerComponent from "../LaunchList/LaunchList.container"
import Header from "../Header/Header"
// Assets.
import "./GridComponent.scss"

const GridComponent = () => {
    return (
        <div>
            <Grid container>
                <Grid item sm={12} md={12} lg={12}>
                    <Header/>
                </Grid>
            </Grid>
        </div>
    )
}

export default GridComponent
