import React, { useEffect, useLayoutEffect } from 'react';
import {Redirect} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useRef } from 'react';
import { connect } from 'react-redux';
import { authenticate, handleReload } from '../../store/auth/operations';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        NaPOSTU
        {' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = (props) => {
  const { authenticate, auth, handleReload } = props;

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     handleReload(localStorage.getItem('token'));
  //   }
  // }, []);

  useLayoutEffect(() => {
    if (!auth.userActive && localStorage.getItem('token')) {
      handleReload(localStorage.getItem('token'));
    }
  })

  const password = useRef();
  const login = useRef();

  const classes = useStyles();

  const submitForm = (e) => {
    e.preventDefault();
    
    const userLogin = login.current.value;
    const userPassword = password.current.value;

    authenticate(userLogin, userPassword);
  }

  if (auth.userActive) {
    return <Redirect to='/main' />
  }

  return (
    <>
    {!localStorage.getItem('token') && <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} 
        onSubmit={submitForm}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={login}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: (email, password) => dispatch(authenticate(email, password)),
    handleReload: (token) => dispatch(handleReload(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);