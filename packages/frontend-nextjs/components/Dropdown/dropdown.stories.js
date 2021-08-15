import React from 'react';
import PropTypes from 'prop-types';
import DropDown from './dropdown';

export default {
    title: 'Components/DropDown',
    component: 'DropDown',
}

const Template = (args) => <DropDown {...args}></DropDown>

export const test = Template.bind();

// test.args={
//     text: 'Hello'
// }