import { useNavigation } from '@react-navigation/native'
import { useAppSelector } from '@redux/store'
import { format, parseISO } from 'date-fns'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Appbar, List } from 'react-native-paper'

export const Home = () => {
  const navigation = useNavigation()

  const notes = useAppSelector((state) => state.note.notes)
  const renderItem = ({ item, index }) => {
    return (
      <List.Item
        key={index}
        title={`${item.category} - ${item.client} - ${format(parseISO(item.createdAt), 'HH:mm')}`}
        description={item.text}
        titleNumberOfLines={2}
        onPress={() => navigation.navigate('EditNote', { item, key: index })}
      />
    )
  }
  const renderListEmpty = () => {
    return <Text style={{ alignSelf: 'center', marginTop: 30, fontSize: 20 }}>No notes</Text>
  }

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title='Note' />
        <Appbar.Action
          icon='plus'
          onPress={() => {
            navigation.navigate('AddNote')
          }}
        />
      </Appbar.Header>
      <FlatList
        ListEmptyComponent={renderListEmpty()}
        data={notes}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}
