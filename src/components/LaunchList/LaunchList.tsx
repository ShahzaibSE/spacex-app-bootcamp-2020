import React,{FC, useEffect} from 'react'
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
    let {launches} = data 
    console.log("Launches list sent as props")
    console.log(launches)
    return (
        <div className="launch_list_container">
            <Grid container justify="center" alignItems="center">
                    {launches.length > 0 && launches.map((launch:any)=>(
                        <Grid item sm={4} md={4} lg={4} key={launch}>  
                        <AnimationWrapper config={{
                                                    transform:{initial:'scale(1)',onHover:'scale(1.1)'},
                                                    opacity: {initial:'1',onHover:'1'}
                                                }}>   
                            <Launch key={launch} data={launch} />
                        </AnimationWrapper>
                        </Grid>
                    ))}                                       
                    {/* // <Launch data={data}/>    */}
            </Grid>
        </div>
    )
}

export default LaunchList
