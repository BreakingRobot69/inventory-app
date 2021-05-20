import * as React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import InventoryCard from '../../molecules/InventoryCard'

const renderItem = ({ item }) => {
  const { image, name, price } = item

  return <InventoryCard image={image} title={name} subtitle={price} />
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
