import React from "react";
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

export default function Button({ buttonName }) {
    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}>
            <Text style={styles.buttonTextStyle}>{buttonName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#406D97',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#406D97',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
})