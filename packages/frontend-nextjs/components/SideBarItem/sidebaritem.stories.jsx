import React from 'react'
import ItemSideBar from './sidebaritem';

export default {
    title: 'Doing/ItemSideBar',
    component: 'ItemSideBar',
}

const Template = (args) => <ItemSideBar {...args} />;

export const ItemSetting = Template.bind({});

ItemSetting.args = {
    name: 'settings',
}