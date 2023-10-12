import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
  return re.test(email);
}

function validatePassword(password) {
  return password !== '';
}

function validateName(name) {
  return name !== '';
}

function validateForm(firstName, lastName, email, password) {
  return (
    validateName(firstName) &&
    validateName(lastName) &&
    validateEmail(email) &&
    validatePassword(password)
  );
}

function validateField(value, validator) {
  return validator(value);
}

function getErrorMessage(value, validator) {
  if (!value) {
    return 'This field is required';
  }
  if (!validateField(value, validator)) {
    return 'Invalid input';
  }
  return '';
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstNameError, setFirstNameError] = React.useState('');
  const [lastNameError, setLastNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      setFirstNameError(firstName ? '' : 'This field is required');
      setLastNameError(lastName ? '' : 'This field is required');
      setEmailError(email ? '' : 'This field is required');
      setPasswordError(password ? '' : 'This field is required');
      return;
    }
    if (validateForm(firstName, lastName, email, password)) {
      console.log({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        
      });
      window.location.href = "/";
    }
    else {
      alert("Please enter valid details");
    }
  };

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
    setFirstNameError(getErrorMessage(value, validateName));
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
    setLastNameError(getErrorMessage(value, validateName));
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailError(getErrorMessage(value, validateEmail));
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordError(getErrorMessage(value, validatePassword));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={handleFirstNameChange}
                  error={!!firstNameError}
                  helperText={firstNameError}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  error={!!lastNameError}
                  helperText={lastNameError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmailChange}
                  error={!!emailError}
                  helperText={emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={handlePasswordChange}
                  error={!!passwordError}
                  helperText={passwordError}
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}>
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
