import React from 'react'
import Grid from "@material-ui/core/Grid"
// Components.
import LaunchList from "../LaunchList/LaunchList"

const GridComponent = () => {
    return (
        <div>
            <Grid container>
                <Grid item sm={12} md={12} lg={12}>
                    {/* <LaunchList/> */}
                </Grid>
            </Grid>
        </div>
    )
}

export default GridComponent
