

import React from 'react';
import {
    SafeAreaView,
    Dimensions,
    ScrollView,
    View,
    Text,
    } from 'react-native';
import { Card, Badge, Avatar, Image, Button, withTheme } from 'react-native-elements'
export default class TuneIn extends React.Component {
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
       alert("Please fill your Facebook Details");
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
                    <View style={{ height: 411, flex: 1, backgroundColor: '#313131' }} >
                       <Text style={{ color: '#FFFFFF', fontSize: 18, lineHeight: 23, marginLeft: 170, marginTop: 24 }}>Badumtsh</Text>
                              </View>
                                   <View style={{ flex: 1, justifyContent: 'flex-end', marginTop: 10, alignItems: 'center', }}>
                                       <Text style={{ color: '#70FF00', fontSize: 36, lineHeight: 45, }}>TUNE IN</Text>
                                        <View style={{
                                            backgroundColor: 'black',
                                            flexDirection: 'row',
                                            width: Dimensions.get('window').width, height: 100,
                                            paddingLeft: 90,
                                             }}>
                                            <Button title='G'  //User can sign via the gmail login
                                                onPress={this.tuneIn}
                                                containerStyle={{ paddingRight: 30, }}
                                                titleStyle={{ fontSize: 18, lineHeight: 16, color: 'black' }}
                                                buttonStyle={{
                                                    backgroundColor: '#FFFFFF',
                                                    borderWidth: 1,
                                                    borderRadius: 5,
                                                    height: 38,
                                                    width: 96,
                                                    borderColor: '#000000', borderRadius: 5
                                                }}
                                             />
                                            <Button title='Fss'  //User can login via facebook id
                                                onPress={this.signFacebook}
                                                containerStyle={{}}
                                                titleStyle={{ fontSize: 18, lineHeight: 16, color: 'black' }}
                                                buttonStyle={{
                                                    backgroundColor: '#FFFFFF',
                                                    borderWidth: 1,
                                                    borderRadius: 5,
                                                    height: 38,
                                                    width: 96,
                                                    borderColor: '#000000', borderRadius: 5
                                                }}
                                             />
                                            </View>
                                            <Button title='USE EMAIL ADDRESS'  //User can create their account
                                                onPress={this.account}
                                                containerStyle={{ marginTop: -55 }}
                                                titleStyle={{ fontSize: 18, lineHeight: 16, color: 'rgba(255, 255, 255, 0.51)' }}
                                                buttonStyle={{ backgroundColor: 'black',
                                                    borderWidth: 1,
                                                    borderRadius: 5,
                                                    height: 32,
                                                    width: 500, 
                                                    borderColor: 'black', 
                                                    borderRadius: 5 }}
                                             />
                                        </View>
                </ScrollView>
            </SafeAreaView>
        );
    };
}
