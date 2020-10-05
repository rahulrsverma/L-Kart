
/*    ----------------------------------------------------Trip Details-------------------------------------- */




import React, { Component } from 'react';
import { Text, View ,SafeAreaView,ScrollView} from 'react-native';
import { Card, Badge, Avatar, Image, Button, withTheme, Input } from 'react-native-elements'

export default class HelloWorldApp extends Component {

    tuneIn = () => {
        //if (this.validate())  // Comment this to disable Email & password Verification
             this.props.navigation.navigate('Home')
            
     }
  render() {


 
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ backgroundColor: 'white', }} showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        
        <Text style={{ color: 'black', fontSize: 36, lineHeight: 45 }}>Trip Details</Text>
        <Input
                                style={{ width: 350, height: 48, backgroundColor: 'yellow', borderColor: 'white', borderRadius: 5, borderWidth: 1, marginTop: 60 }}
                                placeholder=""
                                placeholderTextColor='#D2D2D2'
                                //onChangeText={(text) => { this.handleEmailChange(text) }}
                                //value={email}
                               // errorMessage={emailError}
                            />
                            <Text style={{ marginLeft: -240}}>Trip Kilometer</Text>
                              <Input
                                style={{ width: 350, height: 48, backgroundColor: 'yellow', borderColor: 'white', borderRadius: 5, borderWidth: 1, marginTop: 60 }}
                                placeholder="18"
                                placeholderTextColor='#D2D2D2'
                                //onChangeText={(text) => { this.handleEmailChange(text) }}
                                //value={email}
                               // errorMessage={emailError}
                            />
                             <Text style={{ marginLeft: -260}}>Start Time</Text>
                              <Input
                                style={{ width: 350, height: 48, backgroundColor: 'yellow', borderColor: 'white', borderRadius: 5, borderWidth: 1, marginTop: 60 }}
                                placeholder="03:55 PM"
                                placeholderTextColor='#D2D2D2'
                                //onChangeText={(text) => { this.handleEmailChange(text) }}
                                //value={email}
                               // errorMessage={emailError}
                            />
                            <Text style={{ marginLeft: -270}}>DC Name</Text>
       
                              <Input
                                style={{ width: 350, height: 48, backgroundColor: 'yellow', borderColor: 'white', borderRadius: 5, borderWidth: 1, marginTop: 60 }}
                                placeholder="DC-ShivajiPeth"
                                placeholderTextColor='#D2D2D2'
                                //onChangeText={(text) => { this.handleEmailChange(text) }}
                                //value={email}
                               // errorMessage={emailError}
                            /> 
                            <Text style={{ marginLeft: -210}}>DC Mobile Number</Text>
                            
                              <Input
                                style={{ width: 350, height: 48, backgroundColor: 'yellow', borderColor: 'white', borderRadius: 5, borderWidth: 1, marginTop: 60 }}
                                placeholder="8087005752"
                                placeholderTextColor='#D2D2D2'
                                //onChangeText={(text) => { this.handleEmailChange(text) }}
                                //value={email}
                               // errorMessage={emailError}
                            />
                            <Text style={{ marginLeft: -170}}>Number of Delivery Points</Text>
                           
                              <Input
                                style={{ width: 350, height: 48, backgroundColor: 'yellow', borderColor: 'white', borderRadius: 5, borderWidth: 1, marginTop: 60 }}
                                placeholder="3"
                                placeholderTextColor='#D2D2D2'
                                //onChangeText={(text) => { this.handleEmailChange(text) }}
                                //value={email}
                               // errorMessage={emailError}
                            />
                             
                              <Button title='START LOADING'
                                style={{ width: 350, height: 48, backgroundColor: 'yellow', borderColor: 'white', borderRadius: 5, borderWidth: 1, marginTop: 200 }}
                                
                                 onPress={this.tuneIn}
                                placeholder="Enter email"
                                placeholderTextColor='#D2D2D2'
                                //onChangeText={(text) => { this.handleEmailChange(text) }}
                                //value={email}
                               // errorMessage={emailError}
                            />

      </View>
      </ScrollView>
            </SafeAreaView>
    );
  }
}


