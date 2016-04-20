/**
 * Created by tangchao on 16/4/12.
 */
import React ,{
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    Animated
} from 'react-native';

var mokeData = [
    {imgUrl: '../image/s1.jpg'},
    {imgUrl: '../image/s2.jpg'},
    {imgUrl: '../image/s3.jpg'},
    {imgUrl: '../image/s4.jpg'}
];

export default class Slide extends React.Component {

    constructor(props:any) {
        super(props);

        this.screenWidth = Dimensions.get('window').width;

        this.state = {
            left: new Animated.Value(-this.screenWidth),
            center: new Animated.Value(0),
            right: new Animated.Value(this.screenWidth),
            startX: 0,
            startY: 0
        };

        this.selectData = [
            {imgUrl: 'http://m.360buyimg.com/mobilecms/s720x350_jfs/t2152/204/2759161051/78977/515dddd4/5715fd92N5dfeb274.jpg'},
            {imgUrl: 'http://m.360buyimg.com/mobilecms/s720x350_jfs/t2644/79/468187930/126340/ec7e15c3/57160775Nf976d99a.jpg'},
            {imgUrl: 'http://m.360buyimg.com/mobilecms/s720x350_jfs/t2623/25/492723299/127340/65e7c090/571606f1Nb78f4b2f.jpg'}
        ];
    }

    componentDidMount() {
        var ani = Animated.parallel([
            Animated.timing(
                this.state.left,
                {
                    duration: 500,
                    toValue: 0
                }
            ),
            Animated.timing(
                this.state.center,
                {
                    duration: 500,
                    toValue: this.screenWidth
                }
            ),
            Animated.timing(
                this.state.right,
                {
                    duration: 500,
                    toValue: this.screenWidth * 2
                }
            )
        ]);

        var _this = this;

        ani.start(function () {
            _this.selectData = [
                {imgUrl: 'http://m.360buyimg.com/mobilecms/s720x350_jfs/t2623/25/492723299/127340/65e7c090/571606f1Nb78f4b2f.jpg'},
                {imgUrl: 'http://m.360buyimg.com/mobilecms/s720x350_jfs/t2152/204/2759161051/78977/515dddd4/5715fd92N5dfeb274.jpg'},
                {imgUrl: 'http://m.360buyimg.com/mobilecms/s720x350_jfs/t2644/79/468187930/126340/ec7e15c3/57160775Nf976d99a.jpg'}
            ];

            _this.setState({
                left: new Animated.Value(-this.screenWidth),
                center: new Animated.Value(0),
                right: new Animated.Value(this.screenWidth),
            });
        });
    }

    render() {
        return (
            <View style={{marginTop:20}} onTouchStart={e=>{this.touchStart(e)}} onTouchEnd={e=>{this.touchEnd(e)}}>
                <Animated.Image style={[styles.image,{top:0,left:this.state.left}]}
                                source={{uri:this.selectData[0].imgUrl}}/>
                <Animated.Image style={[styles.image,{top:0,left:this.state.center}]}
                                source={{uri:this.selectData[1].imgUrl}}/>
                <Animated.Image style={[styles.image,{top:0,left:this.state.right}]}
                                source={{uri:this.selectData[2].imgUrl}}/>
            </View>
        )
    }

    touchStart(e) {
        this.setState({
            startX: e.nativeEvent.pageX,
            startY: e.nativeEvent.pageY
        });
    }

    touchEnd(e) {
        var direction = this.GetSlideDirection(this.state.startX, this.state.startY, e.nativeEvent.pageX, e.nativeEvent.pageY);
        switch (direction) {
            case 0:
                console.log("没滑动");
                break;
            case 1:
                console.log("向上");
                break;
            case 2:
                console.log("向下");
                break;
            case 3:
                console.log("向左");
                break;
            case 4:
                console.log("向右");
                break;
            default:
        }
    }

    GetSlideAngle(dx, dy) {
        return Math.atan2(dy, dx) * 180 / Math.PI;
    }

    GetSlideDirection(startX, startY, endX, endY) {
        var dy = startY - endY;
        var dx = endX - startX;
        var result = 0;
        //如果滑动距离太短
        if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
            return result;
        }

        var angle = this.GetSlideAngle(dx, dy);
        if (angle >= -45 && angle < 45) {
            result = 4;
        } else if (angle >= 45 && angle < 135) {
            result = 1;
        } else if (angle >= -135 && angle < -45) {
            result = 2;
        }
        else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        }
        return result;
    }
}

//export default Slideq
var styles = StyleSheet.create({
    image: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * .48
    }
});
