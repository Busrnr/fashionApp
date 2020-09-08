import React from "react";
import {View, StyleSheet, Dimensions, Animated,Text} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Slide , {SLIDE_HEIGHT} from "./Slide";
import {useValue, onScrollEvent, interpolateColor} from "react-native-redash";
import Subslide from "./Subslide";

const BORDER_RADIUS = 75;
const {width}  = Dimensions.get("window");
const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"white",
    },
    slider : {
        height :SLIDE_HEIGHT,
        borderBottomRightRadius: BORDER_RADIUS,
    },
    footer : {
        flex: 1,
    },
    footerContent: {
        flex:1 , 
        backgroundColor: "white" , 
        borderTopLeftRadius: BORDER_RADIUS}
})

const Onboarding = () => {
  return (
    <View style={styles.container}>
        <View style={styles.slider}>
            <ScrollView horizontal snapToInterval={width}  decelerationRate="fast" 
            showsHorizontalScrollIndicator={false} 
            bounces={false}
            scrollEventThrottle={1}>
                <Slide label= "Relaxed"/>
                <Slide label= "Playful"/>
                <Slide label= "Excentri"/>
                <Slide label= "Punky"/>
            </ScrollView>
        </View>
        <View style={styles.footer} >

        </View>
    </View>
  );

};


/*interface ComponentNameProps {};
const BORDER_RADIUS = 75;
const {width}  = Dimensions.get("window");
const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"white",
    },
    slider : {
        height :SLIDE_HEIGHT,
        borderBottomRightRadius: BORDER_RADIUS,
    },
    footer : {
        flex: 1,
    },
    footerContent: {
        flex:1 , 
        backgroundColor: "white" , 
        borderTopLeftRadius: BORDER_RADIUS}
})
const slides = [
    {label: "Relaxed", subtitle:"Find Your Outfits", description: "Confused about your outfit? Don't worry Find that", color : "#BFEAF5"},
    {label: "Playful", subtitle:"Hear it first! Wear it first!", description: "Explore hundereds of outfits ideas",color : "BEECC4"},
    {label: "Excentric", subtitle:"Your Style, your Way", description: "Creat your individual & unique style ", color : "FFE4D9"},
    {label: "Punky", subtitle:"Look Good", description: "Discover the latest trends", color : "FFDDDD"}
];

const Onboarding = () => {
    const x =useValue(0);
    const onScroll = onScrollEvent({x});
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_,i)  => i*width),
        outputRange: slides.map(slide => slide.color),
    });
    return (
    <View style= {styles.container}>
        <Animated.View style= {[styles.slider,{backgroundColor}]}>
            <ScrollView 
            horizontal snapToInterval={width} 
            decelerationRate="fast" 
            showsHorizontalScrollIndicator={false} 
            bounces={false}
            scrollEventThrottle={1}
            {...{onScroll}}
            >  
            {slides.map(({label},index) => (
                <Slide key={index} right={!!(index % 2 )} {...{label}} />
            ))}    
            </ScrollView>
        </Animated.View>
        <View style={styles.footer}>
            <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor}}/>
            <View style={styles.footerContent}>
            {slides.map(({subtitle, description},index) => (
                <Subslide key={index} 
                          //last={index === slides.length-1}
                           {...{subtitle, description , x}} />
            ))}
            </View>
       </View>
       
    </View>
    );
};
*/
export default Onboarding;
