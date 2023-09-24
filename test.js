import React from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#1F4287" />
            <View style={styles.nav} />
            <View style={styles.content}>
                <View style={styles.messageInput}>
                    <TextInput style={styles.textInput}
                        value={""}
                        placeholder="Messages" />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        //paddingTop: StatusBar.currentHeight,
    },
    nav: {
        width: "100%",
        height: "10%",
        marginTop: 50,
        backgroundColor: "#1F4287",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    content: {
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        marginTop: 5,
        backgroundColor: "#071E3D",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    messageInput: {
        backgroundColor: '#1F4287',
        width: "90%",
        height: 50,
        bottom: 10,
        position: "absolute",
        borderRadius: 50,
        paddingRight: 20,
    },
    textInput: {
        display: "flex",
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        width: "80%",
        height: 30,
        left: "5%",
        bottom: 10,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,

    },
});














container: {
    flex: 1,
        backgroundColor: '#142850',
            justifyContent: "center",
                alignItems: "center",

                    //<StatusBar barStyle="light-content" backgroundColor="#142850" />
                    //<Login />
                    paddingTop: StatusBar.currentHeight,