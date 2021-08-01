import React from 'react'
import ItemSideBar from './sidebaritem';

export default {
    title: 'Components/ItemSideBar',
    component: 'ItemSideBar',
}

const Template = (args) => <ItemSideBar {...args} />;

export const defaultItem = Template.bind();
defaultItem.args ={
    //Component no arguments
    //So it return default with Home icon.
}

export const customSettingItem = Template.bind({});
customSettingItem.args = {
    iconName: 'settings',
    //Component return a Item with icon setting
}

export const unknownItem = Template.bind();
unknownItem.args={
    iconName: 'xyz', //not have this icon
    //Component return unknown icon
}