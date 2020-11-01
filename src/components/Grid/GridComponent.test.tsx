import React from "react";
import {shallow, mount} from "enzyme";
// Component.
import GridComponent from "./GridComponent";
import Header from "../Header/Header";

describe("<GridComponent/> component", ()=>{
    let container: any;

    beforeEach(()=>(
        container = mount(<GridComponent/>)
    ))

    it("check if <Header/> component renders", ()=>{
        expect(container.containsMatchingElement(<Header/>)).toMatchSnapshot()
    })
})