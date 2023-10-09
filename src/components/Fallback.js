import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Fallback = () => {
  return (
    <View style={{ alignItems: 'center' }}>
        <Image 
            source={require("../../assets/todo.png")} 
            style={{ width: 300, height: 300 }}
        />
        <Text>Start adding your task</Text>
    </View>
  )
}

export default Fallback

const styles = StyleSheet.create({})