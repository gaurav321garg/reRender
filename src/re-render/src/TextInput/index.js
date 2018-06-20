import {Text, TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';



class TextInputWeb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasFocus: false};
    }

    render() {
        let focusStyle = {
            height: 30,
            borderColor: this.props.underlineColor || '#1976d2',
            borderBottomWidth: 2,
            fontSize: 22,
            borderWidth: 0,
        }
        let blurStyle = {
            height: 35,
            borderColor: this.props.underlineColor || '#dcdcdc',
            borderBottomWidth: this.state.mouseOn?2.5:1,
            fontSize: 22,
            borderWidth: 0,
        }
        let style = this.state.hasFocus ? focusStyle : blurStyle

        return (
            <View>
                {this.state.hasFocus ? <Text style={{color:'#1976d2',fontSize:18,paddingVertical:5}}>{this.props.label || 'Name'}</Text> :  <Text></Text>}
                <TextInput {...this.props}
                           placeHolder={this.state.hasFocus?'':this.props.label || 'Name'}
                           onFocus={() => {
                               this.setState({hasFocus: true})
                           }}
                           onMouseEnter={() => {
                               this.setState({mouseOn: true})
                           }}
                           onMouseLeave={() => {
                               this.setState({mouseOn: false})
                           }}
                           onBlur={() => {
                               this.setState({hasFocus: false})
                           }}
                           style={[style, this.props.style]}/>
            </View>
        );
    }
}

export default TextInputWeb;

TextInputWeb.propTypes = {
    underlineColor: PropTypes.string,
};
