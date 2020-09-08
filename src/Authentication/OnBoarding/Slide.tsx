import React from       "react";
import {View,Dimensions} from "react-native";
import { Text, StyleSheet } from 'react-native';
import { transform } from "@babel/core";

interface SlideProps{
    label: string;
    right?: boolean;
}
const {width,height}  = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;
const style = StyleSheet.create({
    container: {
        flex:1,
        width,
    },
    title: {
        fontSize: 80,
        lineHeight: 80,
        fontFamily: "SFProText-Bold",
        color : "white",
        textAlign: "center",
    },
    titleContainer: {
        height: 100,
        justifyContent:"center",
       
    }
})
const Slide = ({label,right}: SlideProps) => {
    const  transform = [
        {translateY: (SLIDE_HEIGHT - 100)/2 },
        {translateX: right ? width/ 2 -50 : -width /2 +50},
        {rotate : right ? "-90deg" : "90deg"},
    ]
    return (
        <View style={style.container}>
            <View style={[style.titleContainer,{ transform}]}>
            <Text style={style.title} >{label}</Text>
            </View>         
        </View>
    );
};

export default Slide;