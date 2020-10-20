import React from 'react'
import {useLaunchesQuery} from "../../generated/graphql"
// Launch list component.
import LaunchList from "./LaunchList"

const LaunchListContainerComponent = () => {
    const { data, error, loading } = useLaunchesQuery()
    if (loading) {
        return (
            <div>
                <h1>Data loading...</h1>
            </div>
        )
    }

    if (error || !data) {
        return(
            <div>
                <h1>Couldn't load data due to some error.</h1>
            </div>
        )
    }

    console.log("Launches list")
    console.log(data)

    return (
        <div>
            <LaunchList data={data} /> 
        </div>
    )
}

export default LaunchListContainerComponent
