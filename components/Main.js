import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, Text, FlatList, TouchableWithoutFeedback} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from "./Header"
import Form from './Form';
import ItemList from "./ItemList"




export default function Main(navigation) {
    const [listOfItem, setListOfItem] = useState([
    ])
    const addHandler = (text) => {
        setListOfItem((list) => {
           return [
                { text: text, key: Math.random().toString(36).substring(7)},
                ...list
            ]
        })
    }
    const deleteHandler = (key) => {
        setListOfItem((list) => {
            return list.filter(listOfItem => listOfItem.key != key)
        })
    }
    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
          // saving error
        }
    }
    return <SafeAreaView>
        <Header />
        <Form addHandler={addHandler}/>
        <FlatList data={listOfItem} renderItem={({ item }) => ((<ItemList el={item} deleteHandler={deleteHandler}/>))} />
    </SafeAreaView>
}