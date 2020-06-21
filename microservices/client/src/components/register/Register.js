import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Form from './Form';

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    mx: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${
      theme.spacing.unit * 5
    }px`
  },
  container: {
    margin: 'auto',
    maxWidth: `${theme.spacing.unit * 100}px`
  }
});

const validationSchema = Yup.object({
  username: Yup.string('Enter a username')
    .min(3, 'Username must contain at least 3 characters')
    .required('Username is required'),
  password: Yup.string('')
    .min(8, 'Password must contain at least 8 characters')
    .required('Enter your password'),
  confirmPassword: Yup.string('Enter your password')
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Password does not match')
});

const Register = (props) => {
  const values = { username: '', confirmPassword: '', password: '' };
  return (
    <React.Fragment>
      <div className={`${props.classes.container}`}>
        <Paper elevation={1} className={`${props.classes.paper}`}>
          <h1>Register</h1>
          <Formik
            render={(props) => <Form {...props} />}
            initialValues={values}
            validationSchema={validationSchema}
            validateOnMount={true}
          />
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Register);
