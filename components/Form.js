import { StyleSheet, View, TouchableWithoutFeedback, Image, TextInput} from 'react-native'
import React, { Component, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { render } from 'react-dom';

export default function Form({addHandler}) {
    const [text, setValue] = useState("")
    const onChange = ( text ) => {
        setValue(text)
    }
    function update_key(key, key_value){
        key_value += 1
        key = key_value.toString()
        alert(key)
    }
    return (
    <View style={{padding: 40, borderRadius: 20, borderWidth: 1, borderBottomWidth: 10}}>
        <TouchableWithoutFeedback onPress={()=> addHandler(text)}>
            <Image source={{width: 30, height: 30, uri: "https://www.freepnglogos.com/uploads/plus-icon/plus-icon-download-png-and-vector-17.png"}} />
        </TouchableWithoutFeedback>
        <TextInput style={{position: "relative", left: 50, bottom: 25}} onChangeText={onChange} placeholder="..."/>
    </View>)}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'}});