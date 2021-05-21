import React from 'react'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { Image, View } from 'react-native'
import { isEmpty } from 'lodash'

import Card from '../../atoms/Card'
import Text from '../../atoms/Text'

const ItemWrapper = styled(View)`
  flex: 0.5;
  padding-horizontal: 10px;
`

const CardImage = styled(Image)`
  flex: 1;
  height: 158px;
  overflow: hidden;
  resizeMode: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

const CardContent = styled(View)`
  justify-content: space-between;
  height: 100px;
  padding-horizontal: 20px;
  padding-top: 15px;
  padding-bottom: 16px;
`

const CardItem = ({ image, title, subtitle, ...props }) => {
  return (
    <ItemWrapper>
      <Card {...props}>
        {!isEmpty(image) && (
          <CardImage
            source={{ uri: image }}
          />
        )}
        <CardContent>
          <Text type='content' numberOfLines={2}>
            {title}
          </Text>
          <Text type='content' size='small' color='blueyGrey'>
            {subtitle}
          </Text>
        </CardContent>
      </Card>
    </ItemWrapper>
  )
}

CardItem.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default CardItem
