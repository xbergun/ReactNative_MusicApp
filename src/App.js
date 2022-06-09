import React from 'react'
import { StyleSheet, Text, View,FlatList ,SafeAreaView} from 'react-native'
import music_data from './music-data.json'
import SongCard from './components/SongCard'
import SearchBar from './components/SearchBar'


const App = () => {
  const [list, setList] = React.useState(music_data)


  const renderSong = ({ item }) => (
    <SongCard song={item} />
  )

  const renderSeperator = () => <View style={styles.seperator} />

  const handleSearch = (text) => {
    const newList = music_data.filter(song => song.title.toLowerCase().includes(text.toLowerCase()))
    setList(newList)
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
     <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderSong}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSeperator}
      />
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  seperator:{
  borderWidth:1,
  borderColor:'#e0e0e0',
  }
})