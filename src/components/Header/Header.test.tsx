import React from "react";
import {shallow} from "enzyme";
// Component.
import Header from "./Header";
import LaunchListContainerComponent from "../LaunchList/LaunchList.container";

describe("<Header/> component", ()=>{
    let container: any;

    beforeEach(()=>(
        container = shallow(<Header/>)
    ))

    it("check if appbar is rendering", ()=>{
        expect(container.find("div").length).toBeGreaterThanOrEqual(1)
    })

    it("checking if launch list is loading", ()=>{
        expect(container.containsMatchingElement(<LaunchListContainerComponent/>)).toEqual(true)
    })
})