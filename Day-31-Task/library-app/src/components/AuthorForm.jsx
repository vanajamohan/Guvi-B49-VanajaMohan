// src/components/AuthorForm.js

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const AuthorForm = ({ initialValues, onSubmit, onCancel }) => {
  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.birthDate) {
      errors.birthDate = 'Birth Date is required';
    }
    if (!values.biography) {
      errors.biography = 'Biography is required';
    }
    return errors;
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
      validate={validate}
    >
      {({ isSubmitting, resetForm }) => (
        <Form>
          <div>
            <label>Name:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label>Birth Date:</label>
            <Field type="date" name="birthDate" />
            <ErrorMessage name="birthDate" component="div" className="error" />
          </div>
          <div>
            <label>Biography:</label>
            <Field as="textarea" name="biography" />
            <ErrorMessage name="biography" component="div" className="error" />
          </div>
          <button type="submit" disabled={isSubmitting}>Submit</button>
          <button
            type="button"
            onClick={() => {
              resetForm();
              onCancel();
            }}
          >
            Clear
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthorForm;
