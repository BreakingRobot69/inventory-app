import * as React from 'react'
import { FlatList } from 'react-native'
import InventoryCard from '../../molecules/InventoryCard'

const renderItem = ({ item }) => {
  console.warn(item)
  const { image, name, price } = item

  return <InventoryCard image={image} title={name} subtitle={price} />
}

const InventoryList = ({ items }) => {
  console.warn(items)
  return (
    <FlatList
      data={items}
      numColumns={2}
      renderItem={renderItem}
      columnWrapperStyle={{ justifyContent: 'space-between', marginTop: 20, paddingRight: 10, paddingLeft: 10 }}
    />
  )
}

export default InventoryList
