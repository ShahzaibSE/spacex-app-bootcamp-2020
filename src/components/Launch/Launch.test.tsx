import React from "react";
import {shallow, mount} from "enzyme";
// Component.
import Launch from "./Launch";

describe("<Launch/> tests", ()=>{
    let container:any;
    let dummy_data:any = {flight_number:1, mission_name:"Falcon", links:{video_link:""}}

    beforeEach(()=>{
        container = shallow(<Launch data={dummy_data}/>)
    })

    it("check if <Launch/> card has rendered",()=>{
        expect(container).toMatchSnapshot()
    })
})