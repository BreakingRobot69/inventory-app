import * as React from 'react'
import { FlatList } from 'react-native'
import InventoryCard from '../../molecules/InventoryCard'

const data = new Array(10).fill({
  image: 'http://placeimg.com/640/360/any',
  title: 'test',
  subtitle: '200 000€'
})

const renderItem = ({ item }) => {
  const { image, title, subtitle } = item

  return <InventoryCard image={image} title={title} subtitle={subtitle} />
}

const InventoryList = () => {
  const [images, setImages] = React.useState(data)
  return (
    <FlatList
      data={images}
      numColumns={2}
      renderItem={renderItem}
      columnWrapperStyle={{ justifyContent: 'space-between', marginTop: 20, paddingRight: 10, paddingLeft: 10 }}
    />
  )
}

export default InventoryList
