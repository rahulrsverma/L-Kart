


/*    ----------------------------------------------------DC Check-in-------------------------------------- */


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
        this.props.navigation.navigate('Home')
    }
    forgotPass = () => {
        alert("Contact Admin for Password");
    }
    signGoogle = () => {
       alert(" Please fill your Google Details");
    }
    signFacebook = () => {
        this.props.navigation.navigate('Cart');
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





/*

import React from 'react';
import {
    SafeAreaView,
    Dimensions,
    ScrollView,
    View,
    Text,

} from 'react-native';

import { Card, Badge, Avatar, Image, Button, withTheme, Input } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileNumber: '',
            isError: false,
            mobileNumberErrorMessage: null,
            enteredPassword:'',
            confirmPassword:'',
            mobile: '',
            mobilenoError:'',
            email: '',
            emailError: null,
            password: '',
            passwordError: null,
            
            newpassword: '',
            newpasswordError:null
        };
        // this._onPress = this._onPress.bind(this);
    }
   /* Validate()
    {
        var x = document.form1.txtPhone.value;
        var y = document.form1.txtMobile.value;
       if(isNaN(x)||x.indexOf(" ")!=-1)
       {
          alert("Enter numeric value")
          return false; 
       }
       if (x.length>8)
       {
            alert("enter 8 characters");
            return false;
       }
       if (x.charAt(0)!="2")
       {
            alert("it should start with 2 ");
            return false
       }

       if(isNaN(y)||y.indexOf(" ")!=-1)
       {
          alert("Enter numeric value")
          return false; 
       }
       if (y.length>10)
       {
            alert("enter 10 characters");
            return false;
       }
       if (y.charAt(0)!="9")
       {
            alert("it should start with 9 ");
            return false
       }
    } */ /*
    validate = () => {
        let isValidated = true;
        let { email, password,number,oldpassword, newpassword } = this.state;

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

        if (newpassword == '') {
            isValidated = false
            window.alert("Fill all the details.");
            
        }

       

        if (newpassword!== password) {
            isValidated = false
           this.setState({
              newpasswordError: ' Mismatch in password field'
            })
       }
        return isValidated;

       
      

    }
       
    
  
   
    handleMobileNumberChange = (mobile) => {
        const reg = /^[0]?[789]\d{9}$/;
        if (reg.test(mobile) === false) {
            this.setState({
                mobileNumberErrorMessage: 'Invalid Mobile Number',
                mobileNumber: mobile,
            });
            return false;
        } else {
            this.setState({
                mobileNumberErrorMessage: null,
                mobileNumber: mobile,

            });
            return true;
        }
    }

    
    handleMobileNumberChange = (mobileNumber) => {
        //   alert(userId);
        const mobileValidateReg = /^[0]?[789]\d{9}$/;
        if (/^[\d.]+$/.test(mobileNumber) || mobileNumber ===" ") {
            this.setState({
                mobileNumber,
                mobileNumberErrorMessage: '',
            })
        }
        else (this.setState({mobileNumberErrorMessage: 'Valid 10 digits only'}))
    }
    

/*
     number = ()  => {
    if(number.value == "") {
        window.alert("Error: Cell number must not be null.");
        number.focus();
        return true;
    }
    
  
    }
    */ /*
    tuneIn = () => {
        if (this.validate())  // Comment this to disable Email & password Verification
            this.props.navigation.navigate('LogOut')
  
    }
  
    logIn = () => {
        if (this.validate())
        this.props.navigation.navigate('LogOut')
       
    }
  
   
    handleNumberChange = (text) => {
        this.setState({
            mobile: text,
           mobileError: null,

        })
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
    handlenewPasswordChange = (text) => {
        this.setState({
            newpassword: text,
            newpasswordError: null,
        })
    }
    render() {
        let { passwordError, emailError, email,mobileNumberErrorMessage,mobileNumber,mobileErrorMessage, password ,mobile,newpassword ,mobileError,newpasswordError} = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ backgroundColor: 'black', }} showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, justifyContent: 'flex-end', marginTop: 100, alignItems: 'center', }}>
                        <Text style={{ color: 'white', fontSize: 26, lineHeight: 45 }}>REGISTER</Text>
                        <Text style={{ color: 'rgba(255, 255, 255, 0.51)', marginTop: 10,fontSize: 16, lineHeight: 16 }}>PLEASE ENTER VALID DATA</Text>

                        <View style={{
                            backgroundColor: 'white',
                            // borderRadius: 5,
                            width: 350,
                            // height: 48,
                            marginTop: 20
                        }}>

                            <Input
                                placeholder="Enter First Name"
                                onChangeText={(text) => { this.setState({ name: text }) }}
                                style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20 }}
                            />
                            <Input
                                placeholder="Enter Last Name"
                                onChangeText={(text) => { this.setState({ name: text }) }}
                                style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20 }}
                                
                           />
                             <Input
                                placeholder="Enter Email"
                                onChangeText={(text) => { this.handleEmailChange(text) }}
                                value={email}
                                errorMessage={emailError}
                            />
                           
                            <Input
                                    containerStyle={{ height: 60, marginTop: 10 }}
                                    placeholder=' Mobile Number '
                                   
                                   leftIconContainerStyle={{ marginLeft: -1 }}
                                    value={mobileNumber}
                                    onChangeText={text => this.handleMobileNumberChange(text)}
                                    errorMessage={mobileNumberErrorMessage}
                                    keyboardType='phone-pad'
                                />
                         
                            <Input
                                placeholder="Enter  State PENDING"
                                onChangeText={(text) => { this.setState({ name: text }) }}
                                style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20 }}
                            />
                            <Input
                                placeholder="Enter City"
                                onChangeText={(text) => { this.setState({ name: text }) }}
                                style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20 }}
                            />
                             <Input
                                // style={{ color: '#D2D2D2', borderBottomColor: 'rgba(255, 255, 255, 0.27);', borderBottomWidth: 1 }} value="  Enter password"
                                placeholder="Enter Password"
                                onChangeText={(text) => { this.handlePasswordChange(text) }}
                                value={this.state.password}
                                secureTextEntry={true}
                                errorMessage={passwordError}
                            />
                            <Input
                                placeholder="Confirm Password"
                                onChangeText={(text) => { this.setState({ name: text }) }}
                                style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20 }}
                                onChangeText={(text) => { this.handlenewPasswordChange(text) }}
                                value={this.state.newpassword}
                                secureTextEntry={true}
                                errorMessage={newpasswordError}
                            />
                           

                        </View>
                        <View style={{
                            backgroundColor: 'white',
                            // borderRadius: 5,
                            width: 350,
                            //height: 48,
                            //marginTop: 10
                        }}>
                           

                        </View>
                        <View style={{
                            backgroundColor: 'black',
                            flexDirection: 'row',
                            width: Dimensions.get('window').width, height: 10,
                            paddingLeft: 30, paddingRight: 30
                        }}>
                            
                        </View>
                        
                        <Button title='Register'//'CREATE ACCOUNT'  //User can create their account
                            onPress={this.logIn}
                            containerStyle={{ marginTop: 15 }}
                            titleStyle={{ fontSize: 18, lineHeight: 16, color: 'rgba(255, 255, 255, 0.51)' }}
                            buttonStyle={{ backgroundColor: 'black', borderWidth: 1, borderRadius: 5, height: 32, width: 500, borderColor: 'black', borderRadius: 5 }}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    };
}


*/


