import { useState } from 'react';
import { Button, Box, Typography, Container } from '@mui/material';

import LoginForm from './pages/LoginForm';
import RegistrationForm from './pages/RegistrationForm';
import BookingForm from './pages/BookingForm';

const HomePage = () => {
  const [selectedForm, setSelectedForm] = useState(null);

  const renderForm = () => {
    switch (selectedForm) {
      case 'contact':
        return <LoginForm />;
      case 'registration':
        return <RegistrationForm />;
      case 'booking':
        return <BookingForm />;
      default:
        return null;
    }
  };

  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Select a Form to Validate
      </Typography>

      <Button
        variant="contained"
        onClick={() => setSelectedForm('contact')}
        sx={{ margin: 1, fontFamily: 'Montserrat', textTransform: 'none' }}
      >
        Login Form
      </Button>

      <Button
        variant="contained"
        onClick={() => setSelectedForm('registration')}
        sx={{ margin: 1, fontFamily: 'Montserrat', textTransform: 'none' }}
      >
        Registration Form
      </Button>

      <Button
        variant="contained"
        onClick={() => setSelectedForm('booking')}
        sx={{ margin: 1, fontFamily: 'Montserrat', textTransform: 'none' }}
      >
        Booking Form
      </Button>

      <Container maxWidth='sm' sx={{ mt: 5 }}>
        {renderForm()}
      </Container>
    </Box>
  );
};

export default HomePage;
