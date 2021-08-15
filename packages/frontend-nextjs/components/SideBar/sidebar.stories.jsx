import React from 'react';
import SideBar from './sidebar';

export default {
    title: 'BigComponents/SideBar',
    component: 'SideBar',
}

const Template = (args) => <SideBar {...args}></SideBar>

export const defaultSideBar = Template.bind();
defaultSideBar.args={
    items: new Array(7).fill('home')
}