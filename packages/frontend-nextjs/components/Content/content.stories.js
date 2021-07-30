import React from 'react';
import { Content } from './content';

export default {
    title: 'Doing/Content',
    component: 'Content'
}

const template = (args) => <Content {...args}></Content>;

export const creditcard = template.bind({});
creditcard.args = {
    icon: 'creditcard',
    text: 'Credit Card',
}

export const directPayment = template.bind({});
directPayment.args = {
    icon: 'wallet',
    text: 'Direct Payment',
}