import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 38,
        backgroundColor: '#1982C4'
    },
    title: {
        padding: 20,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        color: "#fff"
    }
});