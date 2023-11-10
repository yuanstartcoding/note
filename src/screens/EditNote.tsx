import { Spacer } from '@components/Spacer'
import { useNavigation } from '@react-navigation/native'
import { deleteNote, updateNote } from '@redux/slices/noteSlice'
import { useAppDispatch } from '@redux/store'
import React, { useState } from 'react'
import { View } from 'react-native'
import { Appbar, Button, TextInput } from 'react-native-paper'
import DropDown from 'react-native-paper-dropdown'

import data from '../data/data.json'

export const EditNote = (props) => {
  const item = props.route.params.item
  const key = props.route.params.key
  const navigation = useNavigation()
  const [category, setCategory] = useState<string>(item.category)
  const [showCategoryDropDown, setShowCategoryDropDown] = useState(false)
  const [client, setClient] = useState<string>(item.client)
  const [showClientDropDown, setShowClientDropDown] = useState(false)
  const [text, setText] = useState(item.text)

  const categoryList = () => {
    const categories = data.categories
    return categories.map((item) => {
      return {
        label: item,
        value: item,
      }
    })
  }

  const clientList = () => {
    const clients = data.clients
    return clients.map((item) => {
      return {
        label: item,
        value: item,
      }
    })
  }

  const dispatch = useAppDispatch()
  const onSubmit = () => {
    dispatch(
      updateNote({
        note: {
          category,
          client,
          text,
          createdAt: new Date().toISOString(),
        },
        key,
      }),
    )
    navigation.goBack()
  }
  return (
    <View>
      <Appbar.Header>
        <Appbar.Action
          icon='arrow-left'
          onPress={() => {
            navigation.goBack()
          }}
        />
        <Appbar.Content title='Edit Note' />
        <Appbar.Action
          icon='delete'
          onPress={() => {
            dispatch(
              deleteNote({
                key,
              }),
            )
            navigation.goBack()
          }}
        />
      </Appbar.Header>
      <View style={{ paddingHorizontal: 15 }}>
        <DropDown
          label={'Category'}
          mode={'outlined'}
          visible={showCategoryDropDown}
          showDropDown={() => setShowCategoryDropDown(true)}
          onDismiss={() => setShowCategoryDropDown(false)}
          value={category}
          setValue={setCategory}
          list={categoryList()}
        />
        <Spacer size={10} />
        <DropDown
          label={'Client'}
          mode={'outlined'}
          visible={showClientDropDown}
          showDropDown={() => setShowClientDropDown(true)}
          onDismiss={() => setShowClientDropDown(false)}
          value={client}
          setValue={setClient}
          list={clientList()}
        />
        <Spacer size={20} />
        <TextInput value={text} onChangeText={setText} multiline={true} mode='outlined' style={{ height: 200 }} />
        <Spacer size={20} />
        <Button mode='contained' onPress={onSubmit}>
          Submit
        </Button>
      </View>
    </View>
  )
}
