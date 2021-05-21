import * as React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import CardItem from '../../molecules/CardItem'

const renderItem = ({ item }) => {
  const { id, image, name, price } = item

  const formattedPrice = `${price} €`

  return <CardItem key={id} image={image} title={name} subtitle={formattedPrice} />
}

const InventoryList = ({ items }) => {
  return (
    <FlatList
      data={items}
      numColumns={2}
      renderItem={renderItem}
      columnWrapperStyle={{ justifyContent: 'space-between', marginTop: 20, paddingRight: 10, paddingLeft: 10 }}
    />
  )
}

InventoryList.propTypes = {
  items: PropTypes.array
}

InventoryList.defaultProps = {
  items: []
}

export default InventoryList
