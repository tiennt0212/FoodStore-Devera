import React from 'react'
import OrderItem from './orderitem'

export default {
    title: 'Components/OrderItem',
    component: 'OrderItem',
}

const template = (args) => <OrderItem {...args}></OrderItem>

export const myItem = template.bind();
myItem.args={
    // imgPath:
    // name:
    // price:
    // number:
    // note:
}