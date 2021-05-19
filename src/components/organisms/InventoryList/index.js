import * as React from 'react'
import { FlatList, View, Platform } from 'react-native'
import InventoryCard from '../../molecules/InventoryCard'

const picsumImages = new Array(11).fill('http://placeimg.com/640/360/any')

const renderItem = ({ item }) => <InventoryCard />

const InventoryList = () => {
  const [images, setImages] = React.useState(picsumImages)
  return (
    <FlatList data={images} numColumns={2} renderItem={renderItem} columnWrapperStyle={{ justifyContent: 'space-between' }} />
  )
}

export default InventoryList
