import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export default function Header(navigation) {
    return <SafeAreaView style={{padding: 24, height: 70, backgroundColor: "yellow"}}>
        <Text style={{fontSize: 19, textAlign: "center"}}>Заметки</Text>
    </SafeAreaView>
}