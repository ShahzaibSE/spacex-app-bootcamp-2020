import React,{FC} from 'react'
import Proptypes from "prop-types"
import Grid from "@material-ui/core/Grid"
// Component.
import Launch from "../Launch/Launch"
// graphql.
import {LaunchesQuery} from "../../generated/graphql"

type LaunchListProps = {
    data: LaunchesQuery
}

const LaunchList: FC<LaunchListProps> = ({data}:any) => {
    console.log("Launches list sent as props")
    console.log(data)
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
