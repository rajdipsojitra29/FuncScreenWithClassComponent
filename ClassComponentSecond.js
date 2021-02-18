// import * as React from 'react';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { render } from 'react-dom';


export class ClassComponentSecond extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         dataObj:[],
    //     }
    //     this.state.dataObj = props.dataObj
    // }


    onPressMainCard() {
		alert("Main Card Pressed");
        console.log("FunctionComponent.js","Main Card Pressed");
    }


    render(){
		return (
			<View style={[Styles.mainCard,Styles.mainCardShodow]}>
                <TouchableOpacity
                onPress={this.onPressMainCard}
                >
                    <View style={Styles.underLineContainer}>
                        <View style={Styles.nameDateTime}>
                            <Text style={Styles.textBold}>Name :- </Text>
                            <Text>{this.props.dataObj[0]}</Text>
                        </View>
                    </View>
                    <View style={Styles.dateTime}>
                        <View style={Styles.nameDateTime}>
                            <Text style={Styles.textBold}>Date :- </Text>
                            <Text>{this.props.dataObj[1]}</Text>
                        </View>
                        <View style={Styles.nameDateTime}>
                            <Text style={Styles.textBold}>Time :- </Text>
                            <Text>{this.props.dataObj[2]}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            )
        }
}










const Styles = StyleSheet.create({
    mainCard:{
		backgroundColor:'#FFFFFF',
		borderRadius:5,
        marginTop:5,
        marginBottom:5,
        padding:10,
        width:'95%',
	},
	mainCardShodow: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 5,  
		elevation: 5
	},
    underLineContainer: {
        borderBottomWidth:2,
        borderColor:'#E6E9EB',
        paddingBottom:5,
    },
    nameDateTime: {
        flex:1,
        flexDirection:'row',
		alignItems:'center'
    },
    dateTime: {
        flex:2,
        flexDirection: 'row',
        alignItems:'flex-end'
    },
    textBold: {
        fontSize:14,
        fontWeight:'bold'
    }
});