import React from 'react';
import { shallow } from "enzyme";
import Starts from "./Starts";
import {describe, it} from "@jest/globals";

describe('check etoile render', function () {
    it('1 etoile', function () {
        const wrapper = shallow(<Starts number={1}/>);
        expect(wrapper.find("p").text()).toEqual("*");
    });
    it('5 étoiles', function () {
        const wrapper = shallow(<Starts number={5}/>);
        expect(wrapper.find("p").text()).toEqual("*****");
    });
    it('0 étoile', function () {
        const wrapper = shallow(<Starts number={0}/>);
        expect(wrapper.find("p").text()).toEqual("pas d'etoile");
    });
});