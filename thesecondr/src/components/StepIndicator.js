import React,{Component} from 'react';
import {StyleSheet,View,Dimensions,Text,Image} from 'react-native';
import {Bar} from 'react-native-progress';

export default class StepIndicator extends Component{
  constructor(props){
    super(props);
    this.state = {
      width : null
    }
  }

  componentWillMount(){
    var window= Dimensions.get('window');
    this.setState({width:window.width*0.85});
  }

  render(){
    let personal = require('../res/images/personal.png');
    let finger = require('../res/images/id.png');
    let pass = require('../res/images/locked_grey.png');
    let camera = require('../res/images/camera.png');
    return(
        <View style={[this.props.style,{alignItems:'center',justifyContent :'center'}]}>
            <Bar borderWidth={2} progress={(this.props.current-1)*0.33} width={this.state.width} borderColor={'black'} color={'black'}/>
            <View style={[styles.stepStyle,{left :0,backgroundColor : (this.props.current>=1?'black':'white')}]}>
                <Image style={[styles.innerStyle,{tintColor :(this.props.current>=1?'white':'#878787') }]} source={personal}/>
            </View>

            <View style={[styles.stepStyle,{left :((this.state.width)/3.33),backgroundColor : (this.props.current>=2?'black':'white')}]}>
                <Image style={[styles.innerStyle,{tintColor :(this.props.current>=2?'white':'#878787') }]} source={finger}/>
            </View>

            <View style={[styles.stepStyle,{right :((this.state.width)/3.33),backgroundColor : (this.props.current>=3?'black':'white')}]}>
                <Image style={[styles.innerStyle,{tintColor :(this.props.current>=3?'white':'#878787') }]} source={pass}/>
            </View>

            <View style={[styles.stepStyle,{right :0,backgroundColor : (this.props.current>=4?'black':'white')}]}>
                <Image style={[styles.innerStyle,{tintColor :(this.props.current>=4?'white':'#878787') }]} source={camera}/>
            </View>
        </View>
    );
  }
}

const styles =  StyleSheet.create({
  stepStyle : {
    width :35,
    height : 35,
    borderWidth:2,
    borderStyle:'solid',
    borderRadius:100,
    borderColor:'black',
    position: 'absolute',
    justifyContent :'center',
    alignItems:'center'
  },
  innerStyle :{
    width : '60%',
    height : '60%',
  }
});