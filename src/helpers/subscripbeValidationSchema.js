import * as Yup from 'yup';

export const subscripbeValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email(
      'Is not valid email.',
      /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
    ),
});