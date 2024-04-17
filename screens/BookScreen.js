//rnfes
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BookScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={()=>{navigation.navigate('BookDetail')}}>
        <Text>GO TO BDS</Text>
      </TouchableOpacity>
      {/* <BookList navigation={navigation}/> */}
    </View>
  )
}

export default BookScreen

const styles = StyleSheet.create({})