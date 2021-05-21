import { renderHook } from '@testing-library/react-hooks'
import { useValidation } from './useValidation'
import { DateTime } from 'luxon'

describe('useValidation', () => {
  describe('compareItems', () => {
    it('should throw an exception on empty parameters', () => {
      const { result } = renderHook(() => useValidation({
        valueLimit: 40000
      }))

      expect(result.current.compareItems).toThrowError()
    })
    it('should throw an exception when no values or items are provided', () => {
      const { result } = renderHook(() => useValidation({
        valueLimit: 40000
      }))

      const func = () => result.current.compareItems({
        items: [],
        values: {}
      })

      expect(func).toThrowError()
    })
    it('should return true if the tested item is the same', () => {
      const { result } = renderHook(() => useValidation({
        valueLimit: 40000
      }))

      const mockValues = {
        name: 'test',
        category: 1,
        price: 1000,
        purchaseDate: DateTime.now().toISODate()
      }

      const mockItems = [mockValues]

      const value = result.current.compareItems({
        items: mockItems,
        values: mockValues
      })

      expect(value).toBeTruthy()
    })
    it('should return true if the number is a string with leading zeros', () => {
      const { result } = renderHook(() => useValidation({
        valueLimit: 40000
      }))

      const mockValues = {
        name: 'test',
        category: 1,
        price: '0001000',
        purchaseDate: DateTime.now().toISODate()
      }

      const mockItems = [{
        name: 'test',
        category: 1,
        price: 1000,
        purchaseDate: DateTime.now().toISODate()
      }]

      const value = result.current.compareItems({
        items: mockItems,
        values: mockValues
      })

      expect(value).toBeTruthy()
    })
    it('should return true if the name has whitespaces', () => {
      const { result } = renderHook(() => useValidation({
        valueLimit: 40000
      }))

      const mockValues = {
        name: '      test      ',
        category: 1,
        price: 1000,
        purchaseDate: DateTime.now().toISODate()
      }

      const mockItems = [{
        name: 'test',
        category: 1,
        price: 1000,
        purchaseDate: DateTime.now().toISODate()
      }]

      const value = result.current.compareItems({
        items: mockItems,
        values: mockValues
      })

      expect(value).toBeTruthy()
    })
    it('should return true on different category but same name', () => {
      const { result } = renderHook(() => useValidation({
        valueLimit: 40000
      }))

      const mockItems = [{
        name: 'test',
        category: 2,
        price: 1000,
        purchaseDate: DateTime.now().toISODate()
      }]

      const mockValues = {
        name: 'test',
        category: 1,
        price: 1000,
        purchaseDate: DateTime.now().toISODate()
      }

      const value = result.current.compareItems({
        items: mockItems,
        values: mockValues
      })

      expect(value).toBeTruthy()
    })
    it('should return false on different name', () => {
      const { result } = renderHook(() => useValidation({
        valueLimit: 40000
      }))

      const mockItems = [{
        name: 'test toto',
        category: 1,
        price: 1000,
        purchaseDate: DateTime.now().toISODate()
      }]

      const mockValues = {
        name: 'test',
        category: 1,
        price: 1000,
        purchaseDate: DateTime.now().toISODate()
      }

      const value = result.current.compareItems({
        items: mockItems,
        values: mockValues
      })

      expect(value).toBeFalsy()
    })
    it('should return false on different purchase date', () => {
      const { result } = renderHook(() => useValidation({
        valueLimit: 40000
      }))

      const mockItems = [{
        name: 'test',
        category: 1,
        price: 1000,
        purchaseDate: DateTime.now().minus({ weeks: 1 }).toISODate()
      }]

      const mockValues = {
        name: 'test',
        category: 1,
        price: 1000,
        purchaseDate: DateTime.now().toISODate()
      }

      const value = result.current.compareItems({
        items: mockItems,
        values: mockValues
      })

      expect(value).toBeFalsy()
    })
    it('should return false on different price', () => {
      const { result } = renderHook(() => useValidation({
        valueLimit: 40000
      }))

      const mockItems = [{
        name: 'test',
        category: 1,
        price: 100,
        purchaseDate: DateTime.now().toISODate()
      }]

      const mockValues = {
        name: 'test',
        category: 1,
        price: 1000,
        purchaseDate: DateTime.now().toISODate()
      }

      const value = result.current.compareItems({
        items: mockItems,
        values: mockValues
      })

      expect(value).toBeFalsy()
    })
  })

  describe('checkValueExceeded', () => {
    it('should throw error on empty parameters', () => {
      const { result } = renderHook(() => useValidation({
        valueLimit: 40000
      }))

      expect(result.current.checkValueExceed).toThrowError()
    })
    it('should throw error if no value or items are provided', () => {
      const { result } = renderHook(() => useValidation({
        valueLimit: 40000
      }))

      const func = () => result.current.checkValueExceed({
        items: []
      })

      expect(func).toThrowError()
    })
    it('should return false if not exceeding', () => {
      const { result } = renderHook(() => useValidation({
        valueLimit: 40000
      }))

      const mockItems = new Array(10).fill({
        name: 'test',
        category: 1,
        price: 1000,
        purchaseDate: DateTime.now().toISODate()
      })

      const value = result.current.checkValueExceed({
        items: mockItems,
        value: 2000
      })

      expect(value).toBeFalsy()
    })
    it('should return true if not exceeding', () => {
      const { result } = renderHook(() => useValidation({
        valueLimit: 40000
      }))

      const mockItems = new Array(10).fill({
        name: 'test',
        category: 1,
        price: 1000,
        purchaseDate: DateTime.now().toISODate()
      })

      const value = result.current.checkValueExceed({
        items: mockItems,
        value: 30001
      })

      expect(value).toBeTruthy()
    })
    it('should return false if not exceeding while value is a string', () => {
      const { result } = renderHook(() => useValidation({
        valueLimit: 40000
      }))

      const mockItems = new Array(10).fill({
        name: 'test',
        category: 1,
        price: '001000',
        purchaseDate: DateTime.now().toISODate()
      })

      const value = result.current.checkValueExceed({
        items: mockItems,
        value: '002000'
      })

      expect(value).toBeFalsy()
    })
  })
})
