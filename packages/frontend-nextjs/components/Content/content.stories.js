import React from 'react';
import { Content } from './content';

export default {
    title: 'Components/Content',
    component: 'Content'
}

const template = (args) => <Content {...args}></Content>;

export const creditCard = template.bind({});
creditCard.args = {
    icon: 'creditcard',
    text: 'Credit Card',
}

export const directPayment = template.bind({});
directPayment.args = {
    icon: 'wallet',
    text: 'Direct Payment',
}