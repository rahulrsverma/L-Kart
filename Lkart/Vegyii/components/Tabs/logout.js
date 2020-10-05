

import React from 'react';
import {
    SafeAreaView,
    Dimensions,
    ScrollView,
    View,
    Text,
    } from 'react-native';
import { Card, Badge, Avatar,Input, Image, Button, withTheme } from 'react-native-elements'
export default class LogOut extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        // this._onPress = this._onPress.bind(this);
    }




    
    tuneIn = () => {
        this.props.navigation.navigate('Tunein')
    }
    forgotPass = () => {
        alert("Contact Admin for Password");
    }
    signGoogle = () => {
       alert(" Please fill your Google Details");
    }
    signFacebook = () => {
        this.props.navigation.navigate('Login');
       //alert("Please fill your Facebook Details");
    }
    account = () => {
      alert("This will create your account");
    }
    handleEmailChange = (text) => {
        this.setState({
            email: text
        })
    }
    handlePasswordChange = (text) => {
        this.setState({
            password: text
        })
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ backgroundColor: 'black', }} showsVerticalScrollIndicator={false}>
                    <View style={{ height: 411, flex: 1, backgroundColor: 'white' }} >
                    <Text style={{ color: 'black', fontSize: 36,marginLeft: 100, lineHeight: 45 }}>DC Check-in</Text>
                       <Text style={{ color: '#FFFFFF', fontSize: 18, lineHeight: 23, marginLeft: 170, marginTop: 24 }}></Text>
                             
                       
        <Input
                                style={{ width: 350, height: 48, backgroundColor: 'yellow', borderColor: 'white', borderRadius: 5, borderWidth: 1, marginTop: 60 }}
                                placeholder=""
                                placeholderTextColor='#D2D2D2'
                                //onChangeText={(text) => { this.handleEmailChange(text) }}
                                //value={email}
                               // errorMessage={emailError}
                            />
                            <Text>DC Name</Text>
                              <Input
                                style={{ width: 350, height: 48, backgroundColor: 'yellow', borderColor: 'white', borderRadius: 5, borderWidth: 1, marginTop: 60 }}
                                placeholder="DC ShivajiPeth"
                                placeholderTextColor='#D2D2D2'
                                //onChangeText={(text) => { this.handleEmailChange(text) }}
                                //value={email}
                               // errorMessage={emailError}
                            />
                            
                             <Text>DC Contact Person</Text>
                              <Input
                                style={{ width: 350, height: 48, backgroundColor: 'yellow', borderColor: 'white', borderRadius: 5, borderWidth: 1, marginTop: 60 }}
                                placeholder="Yash"
                                placeholderTextColor='#D2D2D2'
                                //onChangeText={(text) => { this.handleEmailChange(text) }}
                                //value={email}
                               // errorMessage={emailError}
                            />
                            <Text>DC Contact Number</Text>
       
                              <Input
                                style={{ width: 350, height: 48, backgroundColor: 'yellow', borderColor: 'white', borderRadius: 5, borderWidth: 1, marginTop: 60 }}
                                placeholder="8087005752"
                                placeholderTextColor='#D2D2D2'
                                //onChangeText={(text) => { this.handleEmailChange(text) }}
                                //value={email}
                               // errorMessage={emailError}
                            /> 
                            <Text>Message</Text>
                            
                              <Input
                                style={{ width: 350, height: 48, backgroundColor: 'yellow', borderColor: 'white', borderRadius: 5, borderWidth: 1, marginTop: 60 }}
                                placeholder="You will be shortly allocated a trip"
                                placeholderTextColor='#D2D2D2'
                                //onChangeText={(text) => { this.handleEmailChange(text) }}
                                //value={email}
                               // errorMessage={emailError}
                            />
                          
                             
                            
                             
                             
                             
                             
                             
                             
                              </View>
                                   <View style={{ flex: 1, justifyContent: 'flex-end', marginTop: 10, alignItems: 'center', }}>
                       
                                        <View style={{
                                            backgroundColor: 'black',
                                            flexDirection: 'row',
                                            width: Dimensions.get('window').width, height: 100,
                                            paddingLeft: 90,
                                             }}>
                                            <Button title='NO'  //User can sign via the gmail login
                                                onPress={this.tuneIn}
                                                containerStyle={{ paddingRight: 30, }}
                                                titleStyle={{ fontSize: 18, lineHeight: 16, color: 'black' }}
                                                buttonStyle={{
                                                    backgroundColor: 'yellow',
                                                    borderWidth: 1,
                                                    borderRadius: 5,
                                                    height: 38,
                                                    width: 96,
                                                    borderColor: '#000000', borderRadius: 5
                                                }}
                                             />
                                            <Button title='YES'  //User can login via facebook id
                                                onPress={this. signFacebook}
                                                containerStyle={{}}
                                                titleStyle={{ fontSize: 18, lineHeight: 16, color: 'black' }}
                                                buttonStyle={{
                                                    backgroundColor: 'yellow',
                                                    borderWidth: 1,
                                                    borderRadius: 5,
                                                    height: 38,
                                                    width: 96,
                                                    borderColor: '#000000', borderRadius: 5
                                                }}
                                             />
                                            </View>
                                         
                                        </View>
                </ScrollView>
            </SafeAreaView>
        );
    };
}




