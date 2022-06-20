import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Platform, StatusBar, SafeAreaView, ImageBackgrounda, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component {
    constructor() {
        super()
        this.state = {
            longitude: '',
            latitude: ''
        }
    }
    render() {
        const { longitude, latitude } = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
        return (
            <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#1a0023" }} behavior="padding">
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={{ flex: 0.3, marginTop: 20, alignItems: 'center',height:80 }}>
                    <Text style={styles.titleText}>Star Map</Text>

                </View>
                <WebView
                    scalesPageToFit={true}
                    source={{ uri: path }}
                    style={{ marginTop: 10, marginBottom: 5, }}
                />
                <View style={{ flex: 0.3, marginTop: 20, alignItems: 'center' }}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter your longitude"
                        placeholderTextColor="white"
                        onChangeText={(text) => {
                            this.setState({
                                longitude: text
                            })
                        }}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Enter your latitude"
                        placeholderTextColor="white"
                        onChangeText={(text) => {
                            this.setState({
                                latitude: text
                            })
                        }}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        textAlign: 'center',
        color: 'white',
        width: 200
    }
})