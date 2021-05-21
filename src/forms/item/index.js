import * as Yup from 'yup'

export const itemTextInputs = [{
  name: 'contractId',
  label: 'Contract',
  picker: true,
  options: [{
    value: 1,
    label: 'FU20-2012'
  }, {
    value: 2,
    label: 'QALF-2021'
  }, {
    value: 3,
    label: 'UMLA-2018'
  }, {
    value: 4,
    label: 'LEVE-2019'
  }]
}, {
  name: 'name',
  label: 'Name'
}, {
  name: 'price',
  label: 'Purchase Price',
  keyboardType: 'numeric'
}, {
  name: 'category',
  label: 'Category',
  picker: true,
  options: [{
    value: 1,
    label: 'Art'
  }, {
    value: 2,
    label: 'Electronics'
  }, {
    value: 3,
    label: 'Jewelry'
  }, {
    value: 4,
    label: 'Musical Instruments'
  }]
}, {
  name: 'description',
  label: 'Description'
}, {
  name: 'purchaseDate',
  label: 'Purchase date',
  date: true
}]

export const documentInputs = [{
  name: 'invoice',
  icon: 'ios-receipt',
  text: 'Add Invoice'
}]

export const itemSchema = Yup.object().shape({
  contractId: Yup.number()
    .min(1, 'Required')
    .required('Required'),
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  price: Yup.number()
    .min(1000, 'Price must be over 500!')
    .max(40000, 'Price should not exceed 40000!')
    .required('Required'),
  image: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
  purchaseDate: Yup.string().required('Required'),
  invoice: Yup.string().required('Required')
})
