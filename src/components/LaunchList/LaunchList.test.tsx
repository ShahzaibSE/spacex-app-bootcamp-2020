import React from "react";
import {shallow, mount} from "enzyme";
// Component.
import LaunchList from "./LaunchList";
import LaunchListContainerComponent from "./LaunchList.container";
// GraphQL query.
import {LaunchesQuery, useLaunchesQuery} from "../../generated/graphql";
import {ApolloProvider} from "@apollo/client";
import {client} from "../../index";

describe("<LaunchListContainerComponent> tests", ()=>{
    let container: any;
    // const {data, loading, error} = useLaunchesQuery()
    let dummy_data:any = [{flight_number:1, mission_name:"Falcon"}]

    beforeEach(()=>(
        container = shallow(<ApolloProvider client={client}><LaunchListContainerComponent/></ApolloProvider>)
    ))

    it("check if <LaunchListContainerComponent> has rendered", ()=>{
        expect(container).toEqual(true)
    })

    it("has to be at least one <div>", ()=>{
        expect(container.find("div").length).toBeGreaterThanOrEqual(1)
    })

    it("check <LaunchList> component within <LaunchListContainerComponent>",()=>{
        expect(container.containsMatchingElement(<LaunchList data={dummy_data} />)).toEqual(true)
    })
})