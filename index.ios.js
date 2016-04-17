/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import Slide from './comp/Slide.js'

class ReactSample extends Component {
    render() {
        return (
            <View style={styles.View}>
                <Slide/>
            </View>
        );
    }
}
//<Image style={styles.image} source={{uri:"http://m.360buyimg.com/mobilecms/s720x350_jfs/t2383/53/2605014741/115820/c63bee61/57110ad3N1b6060dc.jpg"}}/>

var styles = StyleSheet.create({
    view: {
        marginTop: 30,
        width: 200,
        height: 200
    },
    image: {
        width: 200,
        height: 120
    }
});

AppRegistry.registerComponent('reactsample', () => ReactSample);
