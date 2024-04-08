// ForgotPasswordForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ForgotPassword = () => {
  const initialValues = {
    email: ''
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required')
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.post('/api/forgot-password', values);
      alert('Password reset link sent to your email!');
    } catch (error) {
      console.error('Forgot password error:', error);
      alert('An error occurred. Please try again later.');
    }
    setSubmitting(false);
  };

  return (
    
    <div className="w-full h-96">
      <div className="w-full h-96 flex flex-col justify-center items-center">
        <p className='text-lg font-semibold text-[#2F2F2F] pb-8'>Forgot Password</p>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="email"  className="font-normal text-sm text-[#2F2F2F]">Email:</label>
            <Field type="email" name="email"  className="block border border-[#929292] md:w-96 w-80 p-2 my-2 rounded-md"/>
            <ErrorMessage name="email" component="div" className='text-xs text-red-500'/>
          </div>
          <button type="submit" disabled={isSubmitting} className='text-xs text-primary w-full text-right'>
            {isSubmitting ? 'Sending...' : 'Send Password Reset Link'}
          </button>
        </Form>
      )}
    </Formik>
    </div>
    </div>
  );
};

export default ForgotPassword;
