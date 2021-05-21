import { get, isEqual, isString, reduce, toNumber } from 'lodash'
import { DateTime } from 'luxon'

const defaultOptions = {
  valueLimit: 40000
}

export const useValidation = ({ options = defaultOptions }) => {
  const compareItems = ({ items = [], values = {} }) => {
    const name = get(values, 'name')
    const category = get(values, 'category')
    const price = get(values, 'price')
    const purchaseDate = get(values, 'purchaseDate')

    return reduce(items, (acc, item) => {
      const start = DateTime.fromISO(purchaseDate)
      const end = DateTime.fromISO(item.purchaseDate)
      const sameDate = end.hasSame(start, 'day')

      const sameName = isEqual(name, item.name)
      const samePrice = isEqual(price, item.price)
      const samePriceDate = (samePrice && isEqual(sameDate, true))
      const sameCategoryBuy = (samePriceDate && isEqual(category, item.category))

      const isSame = (sameName && samePriceDate) || (sameName && sameCategoryBuy)

      if (isEqual(isSame, false)) {
        return acc
      }

      return true
    }, false)
  }

  const checkValueExceed = ({ items = {}, value }) => {
    const valueLimit = get(options, 'valueLimit', get(defaultOptions, 'valueLimit'))
    const price = isString(value) ? toNumber(value) : value

    const totalPrice = reduce(items, (accumulator, { price: itemPrice }) => {
      const accPrice = isString(itemPrice) ? toNumber(itemPrice) : itemPrice
      return accumulator + toNumber(accPrice)
    }, 0)

    return price + totalPrice > valueLimit
  }

  return { compareItems, checkValueExceed }
}
