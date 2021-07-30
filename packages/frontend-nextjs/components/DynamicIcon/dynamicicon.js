import PropTypes from 'prop-types'
import React from 'react'

import Home from "@material-ui/icons/Home"
import Alarm from "@material-ui/icons/Alarm"
import Face from "@material-ui/icons/Face"
import HelpOutline from "@material-ui/icons/HelpOutline"
import Settings from "@material-ui/icons/Settings"
import SearchIcon from '@material-ui/icons/Search'
/*

To import Icon, you can search your desired icon
at: https://material-ui.com/components/material-icons/

*/
const DynamicIcon = (props) => {
    const { iconName } = props
    let Icon = null
    switch (iconName) {
        case 'home':
            Icon = Home;
            break;
        case 'alarm':
            Icon = Alarm;
            break;
        case 'face':
            Icon = Face;
            break;
        case 'settings':
            Icon = Settings;
            break;
        case 'search':
            Icon = SearchIcon;
            break;
        default:
            Icon = HelpOutline;
            break;
    }
    return (
        <Icon></Icon>
    )
}

DynamicIcon.propTypes = {
    iconName: PropTypes.string,
};

DynamicIcon.defaultProps = {
    iconName: 'Home',
};

export default DynamicIcon;