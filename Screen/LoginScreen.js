import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, StyleSheet,Dimensions } from 'react-native'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
export default class LoginScreen extends Component {
    constructor() {  
        super();  
        this.state = { screenWidth: "", screenHeight: "" }  
        }  
        getScreenSize = () => {  
            const screenWidth = Math.round(Dimensions.get('window').width);  
            const screenHeight = Math.round(Dimensions.get('window').height);  
            this.setState({ screenWidth: screenWidth, screenHeight: screenHeight })  
            }  
    render() {
        return (
            <View style={{ position: 'relative' }}>
                <Image
                    style={{ width: '100%', height: '100%' }}
                    source={require('../asset/background.png')}
                />
                <Image
                    style={{ width: '50%', height: '40%', position: 'absolute', top: 0, resizeMode: 'contain', alignSelf: 'center' }}
                    source={require('../asset/subeelogo.jpg')}
                />
                <View style={{ position: 'absolute', width: '100%', height: '60%', top: 190 }} >
                    <View style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image
                            style={{ width: '100%', height: '100%', position: 'absolute', resizeMode: 'contain', alignSelf: 'center' }}
                            source={require('../asset/box.png')}
                        />
                        <Text style={{ color: '#fff', fontSize: screenWidth <= 420 ? 22 : 30, fontWeight: 'bold', position: 'absolute', alignSelf: 'center', top:'13%' }}  >
                            ĐĂNG NHẬP
                </Text>
                        <Image
                            style={{ width: '40%', height: '40%', position: 'absolute', top: 10, resizeMode: 'contain', alignSelf: 'center' }}
                            source={require('../asset/line.png')}
                        />
                        <Text style={{ color: 'white',  fontSize: screenWidth <= 420 ? 16 : 20, position: 'absolute', top: '30%', left: '10%' }}>Tài khoản:</Text>
                        <Image
                            style={{ width: '50%', height: '40%', position: 'absolute', resizeMode: 'contain', alignSelf: 'center', top: '13%', left: '36%' }}
                            source={require('../asset/box2.png')}
                        />
                        <Text style={{ color: 'white',  fontSize: screenWidth <= 420 ? 16 : 20, position: 'absolute', top: '45%', left: '10%' }}>Mật khẩu:</Text>
                        <Image
                            style={{ width: '50%', height: '40%', position: 'absolute', resizeMode: 'contain', alignSelf: 'center', top: '28%', left: '36%' }}
                            source={require('../asset/box2.png')}
                        />
                        <Image
                            style={{ width: '5%', height: '5%', position: 'absolute', resizeMode: 'contain', alignSelf: 'center', top: '55%', left: '40%' }}
                            source={require('../asset/rememberbox.png')}
                        />
                        <Text style={{ color: 'white',  fontSize: screenWidth <= 420 ? 14 : 30, position: 'absolute', top: '55%', left: '48%' }}>Nhớ mật khẩu:</Text>
                        <Image
                            style={{ width: '60%', height: '40%', position: 'absolute', resizeMode: 'contain', alignSelf: 'center', bottom: '10%', alignSelf: 'center' }}
                            source={require('../asset/facebookshape.png')}
                        />
                        <Text style={{ color: 'white',  fontSize: screenWidth <= 420 ? 12 : 14, position: 'absolute', bottom: '28%', alignSelf: 'center', fontStyle: 'italic' }}>Đăng nhập với facebook</Text>
                        <Image
                            style={{ width: '8%', height: '8%', position: 'absolute', resizeMode: 'contain', alignSelf: 'center', bottom: '26%', left: '21%' }}
                            source={require('../asset/facebook.png')}
                        />
                        <Image
                            style={{ width: '60%', height: '40%', position: 'absolute', resizeMode: 'contain', alignSelf: 'center', bottom: '-2%', alignSelf: 'center' }}
                            source={require('../asset/googleshape.png')}
                        />
                        <Text style={{ color: 'black', fontSize: screenWidth <= 420 ? 12 : 14, position: 'absolute', bottom: '16%', alignSelf: 'center', fontStyle: 'italic' }}>Đăng nhập với Google</Text>
                        <Image
                            style={{ width: '8%', height: '8%', position: 'absolute', resizeMode: 'contain', alignSelf: 'center', bottom: '14%', left: '22%' }}
                            source={require('../asset/google.png')}
                        />
                    </View>
                </View>
                <Text style={{ color: 'white', fontStyle: 'italic', fontSize: 12, position: 'absolute', bottom: 5, left: 5 }}>Copyright by Ân Trần</Text>
            </View>
        )
    }
}
