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
    Image,
    Dimensions,
    ScrollView,
    ListView
} from 'react-native';

//import Slide from './comp/Slide.js';
import Swiper from 'react-native-swiper2';

class ReactSample extends Component {
    //<Swiper style={styles.slide}
    //        dot={<View style={{backgroundColor:'rgba(255,255,255,.3)', width: 213, height: 13,borderRadius: 7, marginLeft: 7, marginRight: 7,}} />}
    //        activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
    //        paginationStyle={{bottom: 70}}
    //        loop={false}>
    //    <View style={styles.slide}>
    //        <Image style={styles.image}
    //               source={{uri: 'http://m.360buyimg.com/mobilecms/s720x350_jfs/t2152/204/2759161051/78977/515dddd4/5715fd92N5dfeb274.jpg'}}/>
    //    </View>
    //    <View style={styles.slide}>
    //        <Image style={styles.image}
    //               source={{uri: 'http://m.360buyimg.com/mobilecms/s720x350_jfs/t2644/79/468187930/126340/ec7e15c3/57160775Nf976d99a.jpg'}}/>
    //    </View>
    //    <View style={styles.slide}>
    //        <Image style={styles.image}
    //               source={{uri: 'http://m.360buyimg.com/mobilecms/s720x350_jfs/t2623/25/492723299/127340/65e7c090/571606f1Nb78f4b2f.jpg'}}/>
    //    </View>
    //</Swiper>
//<View style={{flexDirection:'row',justifyContent:'center'}}>
//<Text>1</Text>
//<Text>2</Text>
//<Text>3</Text>
//</View>
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            brandFloorData: ds.cloneWithRows([
                {uri: 'http://m.360buyimg.com/mobilecms/jfs/t2584/185/670822363/19304/9e0b798a/571f4430N148a4a83.jpg!q70.jpg'},
                {uri: 'http://m.360buyimg.com/mobilecms/jfs/t2263/110/2211025439/24655/707cbdf8/56a74a5eNd17f2c54.jpg!q70.jpg'},
                {uri: 'http://m.360buyimg.com/mobilecms/jfs/t2809/188/508327652/19319/9b3f48ef/571623d3Neb555ad0.jpg!q70.jpg'}
            ]),
            superData: [
                {uri: 'http://m.360buyimg.com/mobilecms/s220x220_jfs/t2278/291/2062683949/133843/b1a25345/56a04947N16c78740.jpg!q70.jpg'},
                {uri: 'http://m.360buyimg.com/mobilecms/s220x220_jfs/t2278/291/2062683949/133843/b1a25345/56a04947N16c78740.jpg!q70.jpg'},
                {uri: 'http://m.360buyimg.com/mobilecms/s220x220_jfs/t2278/291/2062683949/133843/b1a25345/56a04947N16c78740.jpg!q70.jpg'},
                {uri: 'http://m.360buyimg.com/mobilecms/s220x220_jfs/t2278/291/2062683949/133843/b1a25345/56a04947N16c78740.jpg!q70.jpg'},
                {uri: 'http://m.360buyimg.com/mobilecms/s220x220_jfs/t2278/291/2062683949/133843/b1a25345/56a04947N16c78740.jpg!q70.jpg'},
                {uri: 'http://m.360buyimg.com/mobilecms/s220x220_jfs/t2278/291/2062683949/133843/b1a25345/56a04947N16c78740.jpg!q70.jpg'},
                {uri: 'http://m.360buyimg.com/mobilecms/s220x220_jfs/t2278/291/2062683949/133843/b1a25345/56a04947N16c78740.jpg!q70.jpg'},
                {uri: 'http://m.360buyimg.com/mobilecms/s220x220_jfs/t2278/291/2062683949/133843/b1a25345/56a04947N16c78740.jpg!q70.jpg'}
            ]
        };
    }

    renderBrandCol(item) {
        return (
            <Image style={styles.brandimg} source={{uri: item.uri}}/>
        );
    }

    render() {
        return (
            <View style={{backgroundColor:'#f5f5f5'}}>
                <View style={styles.slideFloor}>
                    <Swiper showsButtons={false} autoPlay={true} height={160} showsPagination={true}
                            paginationStyle={{bottom:5}}>
                        <Image style={[styles.slide]}
                               source={{uri: 'http://m.360buyimg.com/mobilecms/s720x350_jfs/t2152/204/2759161051/78977/515dddd4/5715fd92N5dfeb274.jpg'}}></Image>
                        <Image style={[styles.slide]}
                               source={{uri: 'http://m.360buyimg.com/mobilecms/s720x350_jfs/t2644/79/468187930/126340/ec7e15c3/57160775Nf976d99a.jpg'}}></Image>
                        <Image style={[styles.slide]}
                               source={{uri: 'http://m.360buyimg.com/mobilecms/s720x350_jfs/t2623/25/492723299/127340/65e7c090/571606f1Nb78f4b2f.jpg'}}></Image>
                    </Swiper>
                </View>
                <ListView
                    style={styles.brand}
                    horizontal={true}
                    dataSource={this.state.brandFloorData}
                    renderRow={this.renderBrandCol}
                    />
                <View style={styles.s_img_floor}>
                    <Image
                        style={styles.s_img_image}
                        source={{uri:'http://m.360buyimg.com/mobilecms/jfs/t2347/326/2992898079/50254/d334f594/571f3b11N86470658.jpg!q70.jpg'}}/>
                </View>
                <View style={styles.superdeal}>
                    <View style={styles.superdeal_header}>
                        <Image style={styles.superdeal_clock} source={require('./image/i-clock.png')}/>
                        <Text style={styles.superdeal_text}>移动秒杀</Text>
                        <Text style={[styles.superdeal_time,styles.superdeal_time1]}>00</Text>
                        <Text style={[styles.superdeal_time_span,styles.superdeal_time_span1]}>:</Text>
                        <Text style={[styles.superdeal_time,styles.superdeal_time2]}>00</Text>
                        <Text style={[styles.superdeal_time_span,styles.superdeal_time_span2]}>:</Text>
                        <Text style={[styles.superdeal_time,styles.superdeal_time3]}>00</Text>
                    </View>
                    <ScrollView
                        style={styles.superdeal_scrolllist}
                        horizontal={true}
                        >
                        {
                            this.state.superData.map(function (el, index) {
                                return <View key={index}>
                                    <Image style={} source={{uri: el.uri}}/>
                                </View>
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }
}


//
////<Image style={styles.image} source={{uri:"http://m.360buyimg.com/mobilecms/s720x350_jfs/t2383/53/2605014741/115820/c63bee61/57110ad3N1b6060dc.jpg"}}/>

var styles = StyleSheet.create({
    slideFloor: {
        marginTop: 20,
        height: 160
    },
    slide: {
        height: 160,
        width: Dimensions.get('window').width
    },
    brand: {
        marginTop: 8,
        borderTopWidth: 1,
        borderTopColor: '#f5f5f5'
    },
    brandimg: {
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').width / 3 * 1.21
    },
    s_img_floor: {
        marginTop: 0
    },
    s_img_image: {
        height: Dimensions.get('window').width * 0.375,
        width: Dimensions.get('window').width
    },
    superdeal: {
        marginTop: 0
    },
    superdeal_header: {
        height: 26,
        backgroundColor:'#ffffff'
    },
    superdeal_clock: {
        position: 'absolute',
        top: 7,
        left: 10,
        width: 18,
        height: 18
    },
    superdeal_text: {
        position: 'absolute',
        top: 8,
        left: 32,
        fontSize: 16,
        color: '#ca1327'
    },
    superdeal_time: {
        position: 'absolute',
        top: 6,
        backgroundColor: '#000000',
        color: '#ffffff',
        borderRadius: 4,
        padding: 1,
        width: 20,
        height: 20
    },
    superdeal_time1: {
        left: 120
    },
    superdeal_time2: {
        left: 150
    },
    superdeal_time3: {
        left: 180
    },
    superdeal_time_span: {
        position: 'absolute',
        top: 6,
        color: '#000000'
    },
    superdeal_time_span1:{
        left: 143
    },
    superdeal_time_span2:{
        left: 173
    },
    superdeal_scrolllist: {
        marginTop: 0,
        width: Dimensions.get('window').width
    }
});

AppRegistry.registerComponent('reactsample', () => ReactSample);
