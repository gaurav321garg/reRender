import React, {Component} from 'react';
import ReactNative, {Dimensions, Platform,Text, StyleSheet, View} from 'react-native';
import ProgressBar from "./re-render/src/ProgressBar";
import LinearGradient from "./re-render/src/LinearGradient";
import Label from "./re-render/src/Label";
import RadioGroup from "./re-render/src/Radio/RadioGroup";
import RadioButton from "./re-render/src/Radio/RadioButton";
import RecyclerView from "./re-render/src/RecyclerView";
import Spinner from "./re-render/src/Spinner";
import TextArea from "./re-render/src/TextArea";
import TextInputWeb from "./re-render/src/TextInput";
import TimePicker from "./re-render/src/TimePicker";
import AutoComplete from "./re-render/src/AutoComplete";
import CButton from "./re-render/src/Button";
import CarouselComponent from "./re-render/src/Carousel";

const {height, width} = Dimensions.get('window')

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
    web: 'You are good to go.'
});

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*<Label value={'dsda'}/>*/}
                {/*<LinearGradient start={{x:1,y:54}} end={{x:50,y:90}} colors={['steelblue','blue']}><Text>sadsa</Text></LinearGradient>*/}
                {/*<ProgressBar   color='red'*/}
                               {/*indeterminate={true}*/}
                               {/*progress={5000}*/}
                               {/*trackColor={'blue'}/>*/}
                {/*<RadioGroup title={'dsada'}/>*/}
                {/*<RadioButton  title={'ddd'} checked={''}/>*/}
                {/*<RecyclerView dataSource={['a','b']}/>*/}
                {/*<Spinner/>*/}
                <TextArea/>
                {/*<TextInputWeb/>*/}
                {/*<TimePicker/>*/}
                {/*<AutoComplete list={['a','b']}/>*/}
                {/*<CButton title={'gagfa'} onPress={()=>console.log('button pressed')}/>*/}
                {/*<CarouselComponent>*/}
                {/*<View style={{height:400,width:400,backgroundColor:'red'}}><Text>asda</Text></View>*/}
                {/*<View style={{height:400,width:400,backgroundColor:'red'}}><Text>adsf</Text></View>*/}
                {/*<View style={{height:400,width:400,backgroundColor:'red'}}><Text>5645</Text></View>*/}
                {/*<View style={{height:400,width:400,backgroundColor:'red'}}><Text>2434</Text></View>*/}
                {/*<View style={{height:400,width:400,backgroundColor:'red'}}><Text>r42</Text></View>*/}
                {/*<View style={{height:400,width:400,backgroundColor:'red'}}><Text>7etrg</Text></View>*/}
                {/*</CarouselComponent>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

});


ReactNative.render(<App/>, document.getElementById('root'));