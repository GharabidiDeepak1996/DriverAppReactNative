import React, { useState } from "react";
import {
    View, StyleSheet, Text,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import Colors from "../../constants/Colors";
import Icon from 'react-native-vector-icons/Ionicons';
import Collapsible from 'react-native-collapsible';
import Dash from 'react-native-dash';

let {height, width} = Dimensions.get('window');


const CharterTrips = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };

    const data = [
        { title: 'Stop 1', letter: 'A', icon: 'chevron-down-outline', isCurrent: false },
        { title: 'Stop 2', letter: 'B', icon: 'chevron-down-outline', isCurrent: false },
        { title: 'Stop 3', letter: 'C', icon: 'chevron-down-outline', isCurrent: false },
        { title: 'Stop 4', letter: 'D', icon: 'chevron-down-outline', isCurrent: true },
        { title: 'Stop 5', letter: 'E', icon: 'chevron-down-outline', isCurrent: false },
        // { title: 'Stop 6', letter: 'F', icon: 'chevron-down-outline', isCurrent: false },
        // { title: 'Stop 7', letter: 'G', icon: 'chevron-down-outline', isCurrent: false },
    ];

    return (
        <View>
            {/* lable for date and time */}
            <View style={styles.conatiner}>
                <Text  style = {{color: "#163E63",fontSize: 16, fontWeight:'bold' }}>Today,</Text>
                <Text style = {{color: "#163E63",fontSize: 16, fontWeight:'bold' }}>4:15 PM</Text>
            </View>
            
            {/* Container */}
            <View style={styles.cardContainer}>

              <View style={{ paddingStart: 15,paddingTop: 20,}}>
                  {/* source text */}
                  <View style={styles.lableConatiner}>
                    <Icon name={"location"} size={24} color={Colors.lochmara} />
                    <Text style = {{color: "#424242",fontSize: 16, fontWeight:'600',paddingLeft:10 }}>Orient house(Source)</Text>
                </View>

                {/* expandable view */}
                <Dash dashGap={4} style={{width:2, height:collapsed ? 40 : (4*30), flexDirection:'column',paddingLeft:10}}/>


                {/* destination view */}
                <View style={styles.lableConatiner}>
                    <Icon name={"map"} size={24} color={Colors.lochmara} />
                    <Text style = {{color: "#424242",fontSize: 16, fontWeight:'600',paddingLeft:10 }}>Gurunanak school(destination)</Text>
                </View>

                {/* information layout */}
                <View style={styles.lableConatiner}>
                    <Text style = {{color: "#406D97",fontSize: 16, fontWeight:'400',paddingLeft:10 }}>See Direction</Text>
                    <Icon name={"location"} size={22} color={Colors.lochmara} />
                   </View>
              </View>
                 
                  {/* Button */}
                  <View style={styles.buttonContainer}>
                
                <TouchableOpacity
                    //style={styles.buttonStyle}
                    activeOpacity={0.5}>
                    <Text 
                    style={styles.buttonTextStyle
                    }>Reject</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}>
                    <Text 
                    style={styles.buttonTextStyle
                    }>Accept</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CharterTrips;

const styles = StyleSheet.create({
    conatiner: {
        flexDirection: 'row',
        paddingLeft:20,
        paddingVertical:8
    },
    lableConatiner: {
        flexDirection: 'row',
        
    },
    cardContainer: {
        width: '90%',
        height: width*-2,
        backgroundColor: Colors.white,
        borderWidth: 0,
        color: Colors.white,
        borderRadius: 30,
        alignSelf: 'center',
        //paddingStart: 15,
        //paddingTop: 20,
        //flexWrap:'wrap',
        //flex: 1,
        //justifyContent: 'space-between'
       // alignItems: 'stretch'
    },
    icons: {
        //flexDirection: 'row',
        paddingTop: 7,
        paddingLeft: 5,
    },
    container: {
        flex: 1,
        // backgroundColor: '#F5FCFF',
        //paddingTop: 10,
    },
    header: {
        alignItems: "center",
        flexDirection: "row",
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 30,
       // backgroundColor:Colors.red
    },
    content: {
        paddingHorizontal:10,
        alignSelf:'center',
      //  backgroundColor: Colors.red,
    },
    expandContainer:{
        alignItems:'center',
        paddingLeft:10,
        flexDirection:'row'
    },
    buttonContainer:{
        backgroundColor:'#83b6fc',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingVertical:10,
    },
    buttonStyle: {
        backgroundColor: Colors.lochmara,
        borderWidth: 0,
        color: Colors.white,
        borderColor: Colors.lochmara,
        height: 40,
        width:'35%',
        alignItems: 'center',
        borderRadius: 20,

    },
    buttonTextStyle: {
        color: Colors.white,
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
})