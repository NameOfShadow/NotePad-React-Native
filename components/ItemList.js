import {Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function ItemList({el, deleteHandler}) {
  return (
    <TouchableWithoutFeedback onLongPress={() => deleteHandler(el.key)}>
      <Text style={{padding: 20, borderRadius:5, borderWidth: 1, marginTop: 7}}>{el.text}</Text>
    </TouchableWithoutFeedback>
  )
}