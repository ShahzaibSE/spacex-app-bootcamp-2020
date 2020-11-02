import React from "react";
import {shallow, mount} from "enzyme";
// Components.
import LaunchDetailsContainerComponent from "../LaunchDetails.container";
import {gql} from "@apollo/client";
import {MockedProvider} from "@apollo/client/testing";

const GET_LAUNCH_QUERY = gql`
query LaunchInfo($id: String){
    launch(id: $id) {
        flight_number
        mission_name
    }
}`;

describe("<LaunchDetailsContainerComponent/> tests", ()=>{
    let container: any;
    let dummy_data:any = [{flight_number:1, mission_name:"Falcon"}]
    // Mock for MockProvider.
    let launch_mock = [
        {
            request:{
                query: GET_LAUNCH_QUERY,
                variables: {
                   data: {flight_number:1,
                    mission_name:"Falcon"}
                }
            },
            result: {
                data: 
                    {
                        launch:dummy_data
                    }
            }
        }
    ]

    beforeEach(()=>{
        container = shallow(<MockedProvider mocks={launch_mock} addTypename={false}>
                                <LaunchDetailsContainerComponent launch={dummy_data}/>
                            </MockedProvider>)
    })

    // Test cases.
    it("check if <LaunchList> has rendered", ()=>{
        expect(container).toMatchSnapshot()
    })
    
})