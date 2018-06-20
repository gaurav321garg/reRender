import React from 'react';
import PropTypes from 'prop-types';
//import { CheckBox as CB } from 'react-native-elements';

import {View} from 'react-native'

export default class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        }
    }

    render() {
        return (<View/>        )
    }

    onClick = () => {
        this.setState({
            checked: !this.state.checked
        }, this.afterSetStateCallback);
    };

    afterSetStateCallback = () => {
        if (typeof this.props.onCheckedChange === 'function')
            this.props.onCheckedChange(this.state.checked)
    }
}

CheckBox.defaultProps = {
    checked: false,
    checkboxColor: 'black',
};

CheckBox.propTypes = {
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onCheckedChange: PropTypes.func,
    checkboxColor: PropTypes.string,
};