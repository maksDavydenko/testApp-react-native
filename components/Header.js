import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.header__title}>Gallery</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
     backgroundColor: '#4ddeff',
        height: 80
    },
    header__title: {
        marginTop: 'auto',
        marginBottom: 'auto',
        textAlign:'center',
        fontSize: 40,
        color: '#fff'
    }
});

export default Header
