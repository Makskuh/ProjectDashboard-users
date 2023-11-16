import React from 'react';
import { Form, Formik, Field } from 'formik';
import { addProject } from '../../redux/slices/projectSlice'
import { useDispatch } from 'react-redux';

const initialState = {
  title: '',
  text: '',
};

const ToDoForm = (props) => {
  const dispatch = useDispatch();
  const submitHandler = (values, formikBag) => {
    dispatch(addProject(values));
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialState} onSubmit={submitHandler}>
      <Form>
        <Field name='title' />
        <Field name='text' />
        <button type='submit'>Add Project</button>
      </Form>
    </Formik>
  );
};



export default ToDoForm;