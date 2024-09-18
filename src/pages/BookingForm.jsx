import { TextField, Button, MenuItem, Typography, Box } from '@mui/material';

const BookingForm = () => {
  return (
    <form>
      <Typography variant='h4' fontWeight={600}>Booking Form</Typography>

      <TextField
        label="Full Name"
        name="fullName"
        fullWidth
        margin="normal"
        variant="outlined"
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        fullWidth
        margin="normal"
        variant="outlined"
      />

      <TextField
        label="Phone Number"
        name="phone"
        type="tel"
        fullWidth
        margin="normal"
        variant="outlined"
      />

      <TextField
        label="Date of Booking"
        name="date"
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
      />

      <TextField
        label="Time Slot"
        name="timeSlot"
        select
        fullWidth
        margin="normal"
        variant="outlined"
      >
        <MenuItem value="morning">Morning</MenuItem>
        <MenuItem value="afternoon">Afternoon</MenuItem>
        <MenuItem value="evening">Evening</MenuItem>
      </TextField>

      <Button variant="contained" type="submit" fullWidth sx={{ mt: 2, fontFamily: 'Montserrat', textTransform: 'uppercase' }}>
        Book Now
      </Button>


      <Box mt={5}>
        <Typography variant='h6'>Validation Requirements:</Typography>

        <ul>
          <li><Typography>Full name must be string with maximum length of 25 characters and is required.</Typography></li>
          <li><Typography>Email must be string with email validation and is required.</Typography></li>
          <li><Typography>Phone number must atleast have 8 characters long and it can have 15 max characters and is required</Typography></li>
          <li><Typography>Date of booking must be string and is required</Typography></li>
          <li><Typography>Time slot must be string and is required</Typography></li>
        </ul>
      </Box>
    </form>
  );
};

export default BookingForm;