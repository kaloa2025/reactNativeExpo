//Rendering a list with FlatList
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import books from '../data/books.json'

const BookList = () => {
  return (
    <View>
        <FlatList
            data={books}
            renderItem={({item})=>{
                return <Text>{item.title}</Text>
            }}
            keyExtractor={(book)=>{book.title}}
        />
        {/* Given a key prop */}
        
    </View>
  )
}

export default BookList

const styles = StyleSheet.create({})