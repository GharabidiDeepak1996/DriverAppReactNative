import React, { useState } from "react";
import { View, ScrollView, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Title from "../componens/Title";
import Colors from "../constants/Colors";
import ConstText from "../constants/ConstText";


export default function RegistrationScreen() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [password, setPassword] = useState('')

    const [checkFirstName, setCheckFirstName] = useState(false)
    const [checkLastName, setCheckLastName] = useState(false)
    const [checkEmail, setCheckEmail] = useState(false)
    const [checkMobileNo, setCheckMobileNo] = useState(false)
    const [checkPassword, setCheckPassword] = useState(false)

    const [errorUserFirstNameText, setUserFirstNameError] = useState('');
    const [errorUserLastNameText, setUserLastNameError] = useState('')
    const [errorUserEmailText, setUserEmailError] = useState('');
    const [errorUserMobileNoText, setUserMobileNoError] = useState('');
    const [errorUserPasswordText, setUserPasswordError] = useState('')

    const handleSubmitPress = () => {
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if (firstName.trim() == "") {
            setUserFirstNameError(ConstText.errorFirstName)
            setCheckFirstName(true)
        } else if (lastName.trim() == "") {
            setUserLastNameError(ConstText.errorLastName)
            setCheckLastName(true)
        } else if (emailId.trim() == "") {
            setUserEmailError(ConstText.errorEmailId)
            setCheckEmail(true)
            return false
        } else if (!emailRegex.test(userEmail.trim())) {
            setUserEmailError(ConstText.errorEmailCorrectFormat)
            setCheckEmail(true)
            return false
        } else if (mobileNo.trim() == "") {
            setUserMobileNoError(ConstText.errorMobileNo)
            setCheckMobileNo(true)
        } else if (password.trim() == "") {
            setUserPasswordError(ConstText.errorPassword)
            setCheckPassword(true)
            return false
        } else {
            //success login

        }
    }
    return (
        <ScrollView
            style={styles.rootContainer}>
            <Title children={ConstText.titleRegistration} />
            <View
                style={styles.subContainer}>
                <TextInput
                    style={checkFirstName == true ? styles.errorTextInput : styles.textInput}
                    placeholder={ConstText.firstName}
                    placeholderTextColor={Colors.suvaGray}
                    selectionColor={'black'}
                    keyboardType='default'
                    returnKeyType="next"
                    underlineColorAndroid="transparent"
                    spellCheck={false}
                    autoCorrect={false}
                    onChangeText={(actualData) => { setFirstName(actualData), setCheckFirstName(false) }} />

                {checkFirstName == true ? <Text>{errorUserFirstNameText}</Text> : null}

                <TextInput
                    style={checkLastName == true ? styles.errorTextInput : styles.textInput}
                    placeholder={ConstText.lastName}
                    placeholderTextColor={Colors.suvaGray}
                    selectionColor={'white'}
                    keyboardType='default'
                    returnKeyType="next"
                    underlineColorAndroid="transparent"
                    spellCheck={false}
                    autoCorrect={false}
                    onChangeText={(actualData) => { setLastName(actualData), setCheckLastName(false) }} />

                {checkLastName == true ? <Text>{errorUserLastNameText}</Text> : null}

                <TextInput
                    style={checkEmail == true ? styles.errorTextInput : styles.textInput}
                    placeholder={ConstText.emailId}
                    placeholderTextColor={Colors.suvaGray}
                    selectionColor={'white'}
                    keyboardType='default'
                    returnKeyType="next"
                    underlineColorAndroid="transparent"
                    spellCheck={false}
                    autoCorrect={false}
                    onChangeText={(actualData) => { setEmailId(actualData), setCheckEmail(false) }} />

                {checkEmail == true ? <Text>{errorUserEmailText}</Text> : null}

                <TextInput
                    style={checkMobileNo == true ? styles.errorTextInput : styles.textInput}
                    placeholder={ConstText.mobileNo}
                    placeholderTextColor={Colors.suvaGray}
                    selectionColor={'white'}
                    keyboardType='default'
                    returnKeyType="next"
                    underlineColorAndroid="transparent"
                    spellCheck={false}
                    autoCorrect={false}
                    onChangeText={(actualData) => { setMobileNo(actualData), setCheckMobileNo(false) }} />

                {checkMobileNo == true ? <Text>{errorUserMobileNoText}</Text> : null}

                <TextInput
                    style={checkPassword == true ? styles.errorTextInput : styles.textInput}
                    placeholder={ConstText.password}
                    placeholderTextColor={Colors.suvaGray}
                    selectionColor={'white'}
                    keyboardType='default'
                    returnKeyType="go"
                    underlineColorAndroid="transparent"
                    spellCheck={false}
                    autoCorrect={false}
                    onChangeText={(actualData) => { setPassword(actualData), setCheckPassword(false) }} />

                {checkPassword == true ? <Text>{errorUserPasswordText}</Text> : null}

                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={handleSubmitPress}>
                    <Text style={styles.buttonTextStyle}>{ConstText.btnTxtRegister}</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        marginLeft: 30,
        marginRight: 30
    },
    subContainer: {
        marginTop: 40
    },
    textInput: {
        backgroundColor: Colors.whisper,
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
    errorTextInput: {
        borderWidth: 1,
        backgroundColor: Colors.whisper,
        borderColor: Colors.red,
        padding: 8,
        borderRadius: 10,
        marginTop: 20
    },
})