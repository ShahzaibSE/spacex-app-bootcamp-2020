import React from "react";
import {shallow, mount} from "enzyme";
// Component.
import LaunchList from "../LaunchList";
import LaunchListContainerComponent from "../LaunchList.container";
// GraphQL query.
import {LaunchesQuery, LaunchInfoQuery} from "../../../generated/graphql";
import {query_launch_list} from "../LaunchList.query";
import {MockedProvider} from "@apollo/client/testing";
import {gql} from "@apollo/client";

export const GET_LAUNCH_LIST_QUERY = gql`
query launches {
    launches {
        flight_number
        mission_name
    }
} 
`;

describe("<LaunchListContainerComponent> tests", ()=>{
    let container: any;
    // const {data, loading, error} = useLaunchesQuery()
    let dummy_data:any = [{flight_number:1, mission_name:"Falcon"}]

    const launchlist_mocks = [
        {
            request:{
                query: GET_LAUNCH_LIST_QUERY,
                variables: {
                    flight_number:1,
                    mission_name:"Falcon"
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
        container = shallow(<MockedProvider mocks={[]} addTypename={false}>
                                <LaunchListContainerComponent/>
                            </MockedProvider>)
    ))

    it("check if <LaunchListContainerComponent> has rendered", ()=>{
        expect(container).toMatchSnapshot()
    })
}) 