import Enzyme from "enzyme";
import ReactSixteenAdaptor from "enzyme-adapter-react-16"

Enzyme.configure({adapter: new ReactSixteenAdaptor()})