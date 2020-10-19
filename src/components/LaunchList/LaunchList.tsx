import React from 'react'
import Grid from "@material-ui/core/Grid"
// Component.
import Launch from "../Launch/Launch"

const LaunchList = () => {
    return (
        <div>
            <Grid container>
                <Grid item sm={4} md={4} lg={4}>
                    <Launch/>
                </Grid>
            </Grid>
        </div>
    )
}

export default LaunchList
