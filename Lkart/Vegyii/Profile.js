


/* ------------------------    PROFILE     ------------------------ */

import React from 'react';
import {
    SafeAreaView,
    Dimensions,
    ScrollView,
    View,
    Text,
   
} from 'react-native';

import { Card, Badge, Avatar, Image, Button, withTheme, Input } from 'react-native-elements'

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: null,
            password: '',
            passwordError: null,
        };
        // this._onPress = this._onPress.bind(this);
    }
    validate = () => {
        let isValidated = true;
        let { email, password } = this.state;

        if (email == '') {
            isValidated = false;
            this.setState({
                emailError: 'Empty email field'
            })
        }
        //console.log(email)
        if (email != '' && (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))) {
            isValidated = false;
            this.setState({
                emailError: 'Email InValid'
            })
        }
            //Password validation
            //uppercase
            //lowercase
            //Alphanumeric
            //Same letters
            //No. of alphabets.
            //First letter capital.
            //Hash &  all new character.
        if (password == '') {
            isValidated = false
            this.setState({
                passwordError: 'Empty password field'
            })
        }
        return isValidated;
    }
    tuneIn = () => {
       if (this.validate())  // Comment this to disable Email & password Verification
           this.props.navigation.navigate('Tunein')
       
    }
    forgotPass = () => {
        //this.props.navigation.navigate('Reset Password')
        alert("Reset Password");
        //this.props.navigation.navigate('ForgetPassword')
     
       //this.props.navigation.navigate('Home')

    }
    signGoogle = () => {
        alert(" Please fill your Google Details");
      
    }
    signFacebook = () => {
        alert("Please fill your Facebook Details");
        
    }
    account = () => {
        alert("This will create your account");
    
    }
    handleEmailChange = (text) => {
        this.setState({
            email: text,
            emailError: null,

        })
    }
    handlePasswordChange = (text) => {
        this.setState({
            password: text,
            passwordError: null,
        })
    }
    render() {
        let { passwordError, emailError, email, password } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ backgroundColor: 'grey', }} showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, justifyContent: 'flex-end', marginTop: 200, alignItems: 'center', }}>
                        <Text style={{ color: 'white', fontSize: 36, lineHeight: 45 }}>Profile</Text>
                        <Text style={{ color: 'rgba(255, 255, 255, 0.51)', fontSize: 16, lineHeight: 16 }}>Virtual syatem</Text>

                        <View style={{
                            backgroundColor: 'white',
                            // borderRadius: 5,
                            width: 350,
                            // height: 48,
                            //marginTop: 10
                        }}>


                            <Input
                                style={{ width: 350, height: 48, backgroundColor: 'yellow', borderColor: 'white', borderRadius: 5, borderWidth: 1, marginTop: 60 }}
                                placeholder="Enter email"
                                placeholderTextColor='#D2D2D2'
                                onChangeText={(text) => { this.handleEmailChange(text) }}
                                value={email}
                                errorMessage={emailError}
                            />

                        </View>
                        <View style={{
                            backgroundColor: 'white',
                            // borderRadius: 5,
                            width: 350,
                            //height: 48,
                            //marginTop: 10
                        }}>
                            <Input
                                style={{ width: 350, height: 48, color: 'white', borderColor: 'white', borderRadius: 5, borderWidth: 1, marginTop: 20 }}
                                placeholder='Enter password'
                                placeholderTextColor='#D2D2D2'
                                onChangeText={(text) => { this.handlePasswordChange(text) }}
                                value={password}
                                secureTextEntry={true}
                                errorMessage={passwordError}
                                InputStyle={{
                                    backgroundColor: 'red',
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    height: 32,
                                    width: 250,
                                    borderColor: 'black', borderRadius: 5

                                }}

                            /></View>
                        <View style={{
                            backgroundColor: 'grey',
                            flexDirection: 'row',
                            width: Dimensions.get('window').width, height: 100,
                            paddingLeft: 30, paddingRight: 30
                        }}>
                            <Button title='LOG IN'  
                                onPress={this.tuneIn}
                                containerStyle={{ marginTop: 20 }}
                                titleStyle={{ fontSize: 15, padding: 5, lineHeight: 12, color: '#898989' }}
                                buttonStyle={{
                                    backgroundColor: 'black',
                                    borderWidth: 1,
                                    height: 32,
                                    width: 100,
                                    borderRadius: 5
                                }}
                            />
                            <Button title='REGISTER'
                                onPress={this.forgotPass}
                                containerStyle={{ paddingLeft: 30, paddingRight: 30, marginTop: 20 }}
                                titleStyle={{ fontSize: 18, lineHeight: 16, color: '#898989' }}
                                buttonStyle={{
                                    backgroundColor: 'black',
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    height: 32,
                                    width: 250,
                                    borderColor: 'black', borderRadius: 5
                                }}
                            />
                        </View>
                        <Button title='SIGN IN VIA GOOGLE'  //User can sign via the gmail login
                            onPress={this.signGoogle}
                            containerStyle={{ paddingLeft: 30, paddingRight: 30, marginTop: 15 }}
                            titleStyle={{ fontSize: 18, lineHeight: 16, color: 'black' }}
                            buttonStyle={{
                                backgroundColor: '#FFFFFF',
                                borderWidth: 1,
                                borderRadius: 5,
                                height: 38,
                                width: 350,
                                borderColor: '#000000', borderRadius: 5
                            }}
                        />
                        <Button title='SIGN IN VIA FACEBOOK'  //User can login via facebook id
                            onPress={this.signFacebook}
                            containerStyle={{ paddingLeft: 30, paddingRight: 30, marginTop: 20 }}
                            titleStyle={{ fontSize: 18, lineHeight: 16, color: 'black' }}
                            buttonStyle={{
                                backgroundColor: '#FFFFFF',
                                borderWidth: 1,
                                borderRadius: 5,
                                height: 38,
                                width: 350,
                                borderColor: '#000000', borderRadius: 5
                            }}
                        />
                        <Button title='CREATE ACCOUNT'  //User can create their account
                            onPress={this.account}
                            containerStyle={{ marginTop: 15 }}
                            titleStyle={{ fontSize: 18, lineHeight: 16, color: 'black' }}
                            buttonStyle={{ backgroundColor: 'black', borderWidth: 1, borderRadius: 5, height: 32, width: 500, borderColor: 'black', borderRadius: 5 }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    };
}


