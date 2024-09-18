import { TextField, Button, Typography, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email().required('Email is required !'),
  password: yup.string().min(8, 'Passowrd must be eight characters long !').required('Email is required !'),
});

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit = (formData) => {
    console.log('FormData', formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h4' fontWeight={600}>Login Form</Typography>

      <TextField
        fullWidth
        label="Email"
        margin="normal"
        variant="outlined"
        {...register('email')}
      />
      <Typography color='red' mt={1}>{errors?.email?.message}</Typography>

      <TextField
        fullWidth
        label="Password"
        type='password'
        variant="outlined"
        {...register('password')}
      />
      <Typography color='red' mt={1}>{errors?.password?.message}</Typography>

      <Button variant="contained" type="submit" fullWidth sx={{ mt: 2, fontFamily: 'Montserrat', textTransform: 'uppercase' }}>
        Submit
      </Button>


      <Box mt={5}>
        <Typography variant='h6'>Validation Requirements:</Typography>

        <ul>
          <li><Typography>Email must be string with email validation.</Typography></li>
          <li><Typography>Password must be atleast 8 characters long</Typography></li>
        </ul>
      </Box>
    </form>
  );
};

export default LoginForm;