import React from 'react'
import {useLaunchesQuery} from "../../generated/graphql"
import Grid from "@material-ui/core/Grid"
// Launch list component.
import LaunchList from "./LaunchList"

const LaunchListContainerComponent = () => {
    const { data, error, loading } = useLaunchesQuery()
    if (loading) {
        return (
            <Grid container>
               <Grid item sm={12} md={12} lg={12}>
                    <div>
                        <h1>Data Loading...</h1>
                    </div>
                </Grid> 
            </Grid>
        )
    }

    if (error || !data) {
        return(
            <Grid container>
               <Grid item sm={12} md={12} lg={12}>
                    <div>
                        <h1>Couldn't load data due to some error.</h1>
                    </div>
                </Grid> 
            </Grid>
        )
    }

    console.log("Launches list")
    console.log(data)

    return (
        <div>
            <Grid container>
                <Grid item sm={12} md={12} lg={12}>
                    <LaunchList data={data} />
                </Grid>
            </Grid>
        </div>
    )
}

export default LaunchListContainerComponent
