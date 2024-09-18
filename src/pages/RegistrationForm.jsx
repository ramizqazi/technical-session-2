import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().max(15, 'Maximum length reached !').required('Name is required !'),
  email: yup.string().email().required('Email is required !'),
  password: yup.string().min(8, 'Passowrd must be eight characters long !').required('Email is required !'),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
});

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  });

  const onSubmit = (formData) => {
    console.log('FormData', formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h4' fontWeight={600}>Registration Form</Typography>

      <TextField
        label="Name"
        fullWidth
        margin="normal"
        variant="outlined"
        {...register('name')}
      />
      <Typography color='red' mt={1}>{errors?.name?.message}</Typography>

      <TextField
        label="Email"
        fullWidth
        margin="normal"
        variant="outlined"
        {...register('email')}
      />
      <Typography color='red' mt={1}>{errors?.email?.message}</Typography>


      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        variant="outlined"
        {...register('password')}
      />
      <Typography color='red' mt={1}>{errors?.password?.message}</Typography>

      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        margin="normal"
        variant="outlined"
        {...register('confirmPassword')}
      />
      <Typography color='red' mt={1}>{errors?.confirmPassword?.message}</Typography>

      <Button variant="contained" type="submit" fullWidth sx={{ mt: 2, fontFamily: 'Montserrat', textTransform: 'uppercase' }}>
        Register
      </Button>


      <Box mt={5}>
        <Typography variant='h6'>Validation Requirements:</Typography>

        <ul>
          <li><Typography>Name must be string with maximum length of 15 characters.</Typography></li>
          <li><Typography>Email must be string with email validation.</Typography></li>
          <li><Typography>Password must be atleast 8 characters long</Typography></li>
          <li><Typography>Confirm Password must match password field</Typography></li>
        </ul>
      </Box>
    </form>
  );
};

export default RegistrationForm;