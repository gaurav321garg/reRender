import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native'
//import { CheckBox as RB } from 'react-native-elements';


export default class RadioButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            checked: nextProps.checked
        })
    }

    render() {
        return (<View/>

        )
    }

    onClick = () => {
        this.setState({
            checked: !this.state.checked
        }, this.afterSetStateCallback);
    };

    afterSetStateCallback = () => {
        if (this.props.onCheckedChange)
            this.props.onCheckedChange(this.props.id, this.state.checked)
    }
}

RadioButton.propTypes = {
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onCheckedChange: PropTypes.func,
    color: PropTypes.string,
};