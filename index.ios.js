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
    ListView,
    TextInput,
    TouchableWithoutFeedback
} from 'react-native';

//import Slide from './comp/Slide.js';
import Swiper from 'react-native-swiper2';

class ReactSample extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var ds1 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


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
            ],
            recommendData: ds.cloneWithRows([
                {
                    name: '妙洁 点断式平底垃圾袋3040(45cm*50cm*30只*3卷',
                    uri: 'http://m.360buyimg.com/mobilecms/s276x276_jfs/t2119/3/2712471485/492933/442b9d76/56e7f09dN604ef84a.jpg',
                    pirce: '19.90'
                },
                {
                    name: '曼秀雷敦（Mentholatum）男士唇膏天然型3.5g（又名：男士润唇膏-天然型）补水 保湿',
                    uri: 'http://m.360buyimg.com/mobilecms/s276x276_jfs/t397/64/326747545/153396/5c4b6c57/5417acb4Nf1f85c89.jpg',
                    pirce: '9.90'
                },
                {
                    name: '铠甲勇士溜冰鞋儿童套装轮滑鞋女童旱冰鞋男童 直排轮滑轮鞋可调伸缩加全套装护具 蓝色 M码实际鞋码32-35',
                    uri: 'http://m.360buyimg.com/mobilecms/s276x276_jfs/t1951/169/1421951073/254846/31790f91/569aeba7N4518d539.jpg',
                    pirce: '109.90'
                },
                {
                    name: '极美滋 葡式蛋挞皮160g/盒 (20g*8个)',
                    uri: 'http://m.360buyimg.com/mobilecms/s276x276_jfs/t2152/142/623898679/151049/6df0a741/561df2aaN0cdaa7b2.jpg',
                    pirce: '29.90'
                }
            ])
        };
    }

    renderBrandCol(item) {
        return (
            <Image style={styles.brandimg} source={{uri: item.uri}}/>
        );
    }

    renderRecommendRow(item) {
        return (
            //<View style={{width:100,height:100,backgroundColor:'#00ff00',flex:1}}></View>
            <Image style={styles.recommend_block} source={{uri:item.uri}}/>
        );
    }

    render() {
        return (
            <View style={styles.page}>
                <ScrollView
                    style={styles.pageContent}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    decelerationRate={2}
                    >
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
                            showsHorizontalScrollIndicator={false}
                            >
                            {
                                this.state.superData.map(function (el, index) {
                                    return <View key={index}
                                                 style={{width:116,height:146,paddingLeft:10,paddingRight:10}}>
                                        <Image style={{width:95,height:95}} source={{uri: el.uri}}/>
                                        <Text style={{marginTop:0,textAlign:'center',color:'#ed5657'}}>¥39.9</Text>
                                        <Text
                                            style={{marginTop:3,textAlign:'center',color:'#888888',textDecorationColor:'#888888',textDecorationLine:'line-through'}}>¥45.9</Text>
                                    </View>
                                })
                            }
                        </ScrollView>
                    </View>
                    <View style={styles.s_img_floor}>
                        <Image
                            style={styles.s_img_image}
                            source={{uri:'http://m.360buyimg.com/mobilecms/jfs/t2347/326/2992898079/50254/d334f594/571f3b11N86470658.jpg!q70.jpg'}}/>
                    </View>
                    <ListView
                        style={styles.brand}
                        horizontal={true}
                        dataSource={this.state.brandFloorData}
                        renderRow={this.renderBrandCol}
                        />
                    <ListView
                        contentContainerStyle ={styles.recommend}
                        //style={styles.recommend}
                        dataSource={this.state.recommendData}
                        renderRow={this.renderRecommendRow}
                        />
                    <View style={{backgroundColor:'#ff0000',width:Dimensions.get('window').width,height:600}}>
                    </View>
                </ScrollView>
                <View style={styles.page_header}>
                    <View style={styles.page_header_bg}>
                        <TextInput style={styles.page_header_input} defaultValue={'搜索商品／店铺'}/>
                        <TouchableWithoutFeedback onPressIn={this.onloginHandler}>
                            <Text style={styles.header_login_btn}>登陆</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        );
    }

    onloginHandler() {
        alert('点击登陆按钮');
    }
}


//
////<Image style={styles.image} source={{uri:"http://m.360buyimg.com/mobilecms/s720x350_jfs/t2383/53/2605014741/115820/c63bee61/57110ad3N1b6060dc.jpg"}}/>
var screenWidth = Dimensions.get('window').width;

var styles = StyleSheet.create({
    page: {
        flex: 1,
        marginTop: 0
    },
    pageContent: {
        flex: 1
    },
    float: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ee6e73',
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    page_header: {
        position: 'absolute',
        opacity: 0.8,
        top: 0,
        left: 0,
        width: screenWidth,
        height: 40
    },
    page_header_bg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ff0000'
    },
    page_header_input: {
        marginTop: 7,
        marginLeft: 40,
        marginRight: 40,
        paddingLeft: 10,
        paddingRight: 10,
        color: '#888888',
        width: screenWidth - 80,
        height: 26,
        backgroundColor: '#ffffff',
        borderRadius: 9
    },
    header_login_btn: {
        position: 'absolute',
        width: 30,
        height: 30,
        top: 12,
        right: 4,
        color: '#ffffff',
        fontSize: 15
    },
    slideFloor: {
        height: 160
    },
    slide: {
        height: 160,
        width: screenWidth
    },
    brand: {
        marginTop: 8,
        borderTopWidth: 1,
        borderTopColor: '#f5f5f5'
    },
    brandimg: {
        width: screenWidth / 3,
        height: screenWidth / 3 * 1.21
    },
    s_img_floor: {
        marginTop: 0
    },
    s_img_image: {
        height: screenWidth * 0.375,
        width: screenWidth
    },
    superdeal: {
        marginTop: 0
    },
    superdeal_header: {
        height: 26,
        backgroundColor: '#ffffff'
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
        fontSize: 15,
        color: '#ca1327'
    },
    superdeal_time: {
        position: 'absolute',
        top: 8,
        color: '#4F4F4F',
        borderRadius: 4,
        borderColor: '#4F4F4F',
        borderWidth: 1,
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 1,
        width: 23,
        height: 20,
        fontSize: 12
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
    superdeal_time_span1: {
        left: 144
    },
    superdeal_time_span2: {
        left: 174
    },
    superdeal_scrolllist: {
        backgroundColor: '#ffffff',
        marginTop: 2,
        width: screenWidth
    },
    recommend: {
        //flexDirection: 'row'
        //flexWrap: 'nowrap'
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    recommend_block: {
        width: screenWidth / 2,
        height: screenWidth / 2
    }
});

AppRegistry.registerComponent('reactsample', () => ReactSample);