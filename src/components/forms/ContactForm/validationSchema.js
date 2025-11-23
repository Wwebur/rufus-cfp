import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is Required!'),
  email: Yup.string()
    .email('Enter a Valid Email!')
    .required('Email is Required!'),
  phone: Yup.string()
    .min(8, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Phone Number is Required!'),
  businessname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Business Name is Required!'),
  message: Yup.string()
    .required('Message is Required!'),
  agree: Yup.string()
    .required('Required!'),
})

export default validationSchema
