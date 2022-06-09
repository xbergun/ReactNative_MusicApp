import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import styles from './SearchBar.styles'
const SearcBar = ({onSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Ara..' onChangeText={onSearch} />
    </View>
  )
}

export default SearcBar

