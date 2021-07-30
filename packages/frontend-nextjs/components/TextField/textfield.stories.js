import React from 'react';
import { TextField } from './textfield';

export default {
    title: 'Components/TextField',
    component: TextField,
}

const template = (args) => <TextField {...args}/>;

export const defaultTextField = template.bind({});
defaultTextField.args={
}

export const filled = template.bind({});
filled.args={
    text: "This box has been filled",
}

export const has_icon = template.bind({});
has_icon.args={
    icon: 'search',
    placeholder: "This is Placeholder",
}