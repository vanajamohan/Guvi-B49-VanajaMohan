// src/components/BookForm.js

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BookForm = ({ initialValues, onSubmit, onCancel }) => {
  const validate = values => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Title is required';
    }
    if (!values.author) {
      errors.author = 'Author is required';
    }
    if (!values.isbn) {
      errors.isbn = 'ISBN is required';
    }
    if (!values.publicationDate) {
      errors.publicationDate = 'Publication Date is required';
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
            <label>Title:</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>
          <div>
            <label>Author:</label>
            <Field type="text" name="author" />
            <ErrorMessage name="author" component="div" className="error" />
          </div>
          <div>
            <label>ISBN:</label>
            <Field type="text" name="isbn" />
            <ErrorMessage name="isbn" component="div" className="error" />
          </div>
          <div>
            <label>Publication Date:</label>
            <Field type="date" name="publicationDate" />
            <ErrorMessage name="publicationDate" component="div" className="error" />
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

export default BookForm;
