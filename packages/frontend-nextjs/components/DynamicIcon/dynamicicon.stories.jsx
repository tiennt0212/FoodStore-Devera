import React from 'react'
import DynamicIcon from './dynamicicon';

export default{
    title: 'Components/DynamicIcon',
    component: 'DynamicIcon',
};

const Template = (args) => <DynamicIcon {...args}/>;

export const IconHome = Template.bind({});
IconHome.args={
    iconName: 'home',
}