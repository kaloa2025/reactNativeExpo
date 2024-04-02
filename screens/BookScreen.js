//rnfes
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BookList from '../components/BookList'

const BookScreen = () => {
  return (
    <View>
      <Text>
        <BookList/>
        </Text>
    </View>
  )
}

export default BookScreen

const styles = StyleSheet.create({})