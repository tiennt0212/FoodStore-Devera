import React from 'react'
import DynamicIcon from './dynamicicon';

export default{
    title: 'Components/DynamicIcon',
    component: 'DynamicIcon',
};

const Template = (args) => <DynamicIcon {...args}/>;

export const SmallHome = Template.bind({});
SmallHome.args={
    iconName: 'home',
    size: 'small',
}

export const MediumHome = Template.bind({});
MediumHome.args={
    iconName: 'home',
    size: 'medium',
}

export const LargeHome = Template.bind({});
LargeHome.args={
    iconName: 'home',
    size: 'large',
}