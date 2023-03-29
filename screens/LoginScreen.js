import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Title from "../componens/Title";
import Colors from "../constants/Colors";

export default function LoginScreen({navigation}) {
    const [userEmail, setUserEmail] = useState('');
    const [checkEmail, setCheckEmail] = useState(false)

    const [userPassword, setUserPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState(false)

    const [errorUserEmailText, setUserEmailError] = useState('');
    const [errorUserPasswordText, setUserPasswordError] = useState('')


    const handleSubmitPress = () => {
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if (userEmail.trim() == "") {
            setUserEmailError('Email Field canot be empty')
            setCheckEmail(true)
            return false
        } else if (!emailRegex.test(userEmail.trim())) {
            setUserEmailError('Please enter valid email id.')
            setCheckEmail(true)
            return false
        } else if (userPassword.trim() == "") {
            setUserPasswordError('Password field cannot be empty')
            setCheckPassword(true)
            return false
        } else {
            //success login
            navigation.navigate("DrawerNavigationRoutes")
            // navigation.navigate('RegistrationScreen')

            //let dataToSend = {email: userEmail.trim(), password: userPassword.trim()};

        }
    }

    return (
        <View style={styles.rootContainer}>
            <Title children={"Driver's \nLogin"} />

            <View style={styles.subContainer}>
                <TextInput
                    style={checkEmail == true ? styles.errorTextInput : styles.textInput}//Add boarder color for error
                    placeholder='Email/ Mobile'
                    placeholderTextColor={Colors.suvaGray}
                    selectionColor={'white'}
                    keyboardType='email-address'
                    returnKeyType="next"
                    onChangeText={(actualData) => { setUserEmail(actualData), setCheckEmail(false) }}
                />

                {checkEmail == true ? <Text>{errorUserEmailText}</Text> : null}

                <TextInput
                    style={checkPassword == true ? styles.errorTextInput : styles.textInput}
                    placeholder='Password'
                    placeholderTextColor={Colors.suvaGray}
                    selectionColor={'white'}
                    keyboardType='visible-password'
                    //  blurOnSubmit={false}
                    // onEndEditing
                    secureTextEntry={true}
                    returnKeyType="next"
                    onChangeText={(actualData) => { setUserPassword(actualData), setCheckPassword(false) }}
                />
                {checkPassword == true ? <Text>{errorUserPasswordText}</Text> : null}

                <Text style={styles.forgotPassText}>Forgot Password?</Text>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={handleSubmitPress}>
                    <Text style={styles.buttonTextStyle}>Login</Text>
                </TouchableOpacity>

                <View style={styles.viewContainer}>
                    <Text>Don't have an account? </Text>
                    <Text 
                    onPress={() => navigation.navigate('RegistrationScreen')}
                    style={styles.regText}>Register here</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        marginLeft: 30,
        marginRight: 30

        // alignItems:'center'
    },
    subContainer: {
        marginTop: 40
    },
    viewContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    textInput: {
        backgroundColor: Colors.whisper,
        padding: 8,
        borderRadius: 10,
        marginTop: 20
    },
    errorTextInput: {
        borderWidth: 1,
        backgroundColor: Colors.whisper,
        borderColor: Colors.red,
        padding: 8,
        borderRadius: 10,
        marginTop: 20
    },
    buttonStyle: {
        backgroundColor: Colors.lochmara,
        borderWidth: 0,
        color: Colors.white,
        borderColor: Colors.lochmara,
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
    },
    buttonTextStyle: {
        color: Colors.white,
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    forgotPassText: {
        color: Colors.lochmara,
        alignSelf: 'flex-end',
        fontSize: 15,
        fontWeight: '700',
        marginTop: 5
    },
    regText: {
        color: Colors.lochmara,
        fontWeight: '600'
    }
})