import React from 'react';
import PropTypes from 'prop-types';
import { DishCard } from './dishcard';

export default {
    title: 'Components/DishCard',
    component: 'DishCard'
}

const template = (args) => <DishCard {...args}></DishCard>

export const CardSalad = template.bind();
