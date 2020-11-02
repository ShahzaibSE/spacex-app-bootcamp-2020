import React from "react";
import {shallow, mount} from "enzyme";
// Component.
import LaunchList from "../LaunchList";
import {MockedProvider} from "@apollo/client/testing";
import {gql} from "@apollo/client";

export const GET_LAUNCHES_QUERY = gql`
query launches {
    launches {
        flight_number
        mission_name
    }
} 
`;

describe("<LaunchList/> tests", ()=>{
    let container: any;
    // const {data, loading, error} = useLaunchesQuery()
    let dummy_data:any = [{flight_number:1, mission_name:"Falcon"}]

    const launchlist_mock = [
        {
            request:{
                query: GET_LAUNCHES_QUERY,
                variables: {
                   data: [{flight_number:1,
                    mission_name:"Falcon"}]
                }
            },
            result: {
                data: 
                    {
                        launches:dummy_data
                    }
            }
        }
    ]

    beforeEach(()=>(
        container = shallow(<MockedProvider mocks={launchlist_mock} addTypename={false}>
                                <LaunchList data={dummy_data}/>
                            </MockedProvider>)
    ))

    // Test cases.
    it("check if <LaunchList> has rendered", ()=>{
        expect(container).toMatchSnapshot()
    })
})