import React from 'react';
import {SafeAreaView, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';
//import styles from "../style/style"

export default function Loader({ navigation }) {
    const LoadScene = () => {
      navigation.navigate("Main")
    };
      return <SafeAreaView style={styles.container}> 
        <TouchableWithoutFeedback onPress={LoadScene}>
          <Image source={{width: "100%", height: "100%", uri: "https://images.wallpaperscraft.ru/image/single/bloknot_ochki_skrepka_189645_225x300.jpg"}} />
        </TouchableWithoutFeedback>
       </SafeAreaView>
  }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'}});