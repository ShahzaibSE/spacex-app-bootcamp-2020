import React,{FC} from 'react'
import Grid from "@material-ui/core/Grid"
import {AnimationWrapper} from "react-hover-animation"
// Component.
import Launch from "../Launch/Launch"
// graphql.
import {LaunchesQuery} from "../../generated/graphql"
// Assets.
import "./LaunchList.scss"

type LaunchListProps = {
    data: LaunchesQuery
}

const LaunchList: FC<LaunchListProps> = ({data}:any) => {
    console.log("Launches list sent as props")
    console.log(data)
    return (
        <div className="launch_list_container">
            <Grid container>
                    <Grid item sm={4} md={4} lg={4}>  
                        <AnimationWrapper config={{
                                                    transform:{initial:'scale(1)',onHover:'scale(1.1)'},
                                                    opacity: {initial:'1',onHover:'1'}
                                                }}>
                            <Launch/>   
                        </AnimationWrapper>    
                    </Grid>
            </Grid>
        </div>
    )
}

export default LaunchList
