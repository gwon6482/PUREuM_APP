import { StatusBar } from 'expo-status-bar';
import { Platform,StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { React,useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import   Constants  from 'expo-constants';
import { SafeAreaView } from 'react-navigation'
import Alarmsvgimport from "./assets/svgs/bellicon_svg";
import Homesvgimport from "./assets/svgs/home_icon_svg"
import Calendarsvgimport from "./assets/svgs/calendericon_svg"
import Filessvgimport from "./assets/svgs/filesicon_svg"
import Settingsvgimport from "./assets/svgs/settingicon_svg"


const SCREEM_WIDTH = Dimensions.get("window").width
const SCREEM_HEIGHT = Dimensions.get("window").height
console.log("세로: ",SCREEM_HEIGHT," 가로: ",SCREEM_WIDTH)

function R_SIZE(x){
  return (SCREEM_WIDTH / 428) * x
}


export default function App() {

  const [fontsLoaded] = useFonts({
    'Tumbly': require('./assets/fonts/Tumbly.otf'),
    'Nokio': require('./assets/fonts/NokioMedium.ttf'),
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
 
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style = {[styles.screen, {backgroundColor:"#fbfbfb"}]}>
      <View style = {styles.container}>
        
        <View style = {styles.header_area_style}>
          {/** Header area */}
          <View style = {{flex:1}} ></View>
          <View style = {styles.header_bannerbox_area_style} >
            {/** banner textbox */}
            <Text style = {styles.header_mainbanner_font_style}>PUREuM</Text>
            <Text style = {styles.header_subbanner_font_style}>we worship god</Text>
          </View>
          <View style = {{flex:18.6}} ></View>
          <View style = {styles.header_bellbox_style} >
            {/** alarm bell icon */}
            <Alarmsvgimport />
          </View>
          <View style = {{flex:1}} ></View>

        </View>

        <View style = {styles.contents_area_style}>
          {/** Contents area */}

        </View>

        <View style = {{flex:2, backgroundColor:"#fbfbfb"}}>

        </View>


        <View style = {styles.Tabber_area_style} > 
          {/** Tabbar area */}

          <View style={styles.Tabber_button_area_style}>
            {/** home button area */}
            <View style ={styles.Tabber_button_icon_style}>
              <Homesvgimport/>
            </View>
            <View style = {styles.Tabber_font_box_style}>
              <Text style = {styles.Tabber_font_style}>Home</Text>
            </View>
            
            
          </View>

          <View style={styles.Tabber_button_area_style}>
            {/** calender button area*/}
            <View style = {styles.Tabber_button_icon_style}>
              <Calendarsvgimport />
            </View>
            <View style = {styles.Tabber_font_box_style}>
              <Text style = {styles.Tabber_font_style}>
                Calendar
              </Text>
            </View>

          </View>

          <View style={styles.Tabber_button_area_style}>
            {/** files button area */}
            <View style ={styles.Tabber_button_icon_style}>
              <Filessvgimport/>
            </View>

            <View style = {styles.Tabber_font_box_style}>
              <Text style = {styles.Tabber_font_style}>
                Files
              </Text>
            </View>
          </View>

          <View style={styles.Tabber_button_area_style}>
            {/** setting button area */}
            <View style ={styles.Tabber_button_icon_style}>
              <Settingsvgimport/>
            </View>

            <View style = {styles.Tabber_font_box_style}>
              <Text style = {styles.Tabber_font_style}>
                Setting
              </Text>
            </View>
          </View>
          
        </View>





        <View style = {styles.Floating_button_style} >
          {/** Floating button */}
          

        </View>


      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  screen:{
    flex:1,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 34,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },


  header_area_style: {
    backgroundColor: '#fff',
    flex:13,
    flexDirection: "row"
  },
  header_bannerbox_area_style: {
    //borderWidth:1,
    flex:18,
    justifyContent:"center",
    alignItems:"center"
  },
  header_mainbanner_font_style: {
    fontSize: R_SIZE(33),
    fontFamily: 'Tumbly',
    color: '#59ADB2',
  },
  header_subbanner_font_style: {
    fontSize: R_SIZE(18),
    fontFamily: 'Nokio',
    color: '#000',
  },
  header_bellbox_style : {
    //borderWidth:1,
    flex:4.4,
    justifyContent: "center",
    alignItems:"center"
  }

  ,
  contents_area_style: {
    flex:100,
    backgroundColor: "#fff"
  },





  Tabber_area_style: {
    flex:8,
    backgroundColor: "#fbfbfb",
    flexDirection:"row",
    //marginTop:10
  },
  Tabber_button_area_style:{
    //borderWidth:1,
    flex:1,
    justifyContent: "center",
  },

  Tabber_button_icon_style: {
    alignItems:"center",
    //marginBottom: R_SIZE(6)
  },
  Tabber_font_box_style: {
    justifyContent: "center",
    alignItems:"center",
    
  },
  Tabber_font_style: {
    fontFamily: 'Nokio',
    fontSize: R_SIZE(11),
    color: '#646464',
    
  }


});


/**
 * pt
 *              
 *            11promax / 14promax / ratio
 * status bar : 44  / 54 / 6
 * 
 * header : 94  / 114 / 13
 * 
 * contents : 677 / 830 / 100
 * 
 * tabbar : 50 /  60 / 7.3
 * 
 */