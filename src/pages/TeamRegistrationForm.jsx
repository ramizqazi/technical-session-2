import { useForm, useFieldArray, Controller } from "react-hook-form";
import { TextField, Button, Box, IconButton, Typography } from "@mui/material";
import { Plus, Trash } from "feather-icons-react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Yup validation schema
const validationSchema = yup.object().shape({
  members: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Name is required"),
      email: yup.string().email("Invalid email").required("Email is required"),
      role: yup.string().required("Role is required"),
    })
  ),
});

const TeamRegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      members: [{ name: "", email: "", role: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "members",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" fontWeight={600}>
        Team Registration Form
      </Typography>

      {fields.map((field, index) => (
        <Box key={field.id} sx={{ display: "flex", alignItems: "center", my: 2 }}>
          <Controller
            name={`members[${index}].name`}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                sx={{ mr: 2 }}
                error={!!errors?.members?.[index]?.name}
                helperText={errors?.members?.[index]?.name?.message}
              />
            )}
          />
          <Controller
            name={`members[${index}].email`}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                sx={{ mr: 2 }}
                error={!!errors?.members?.[index]?.email}
                helperText={errors?.members?.[index]?.email?.message}
              />
            )}
          />
          <Controller
            name={`members[${index}].role`}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Role"
                variant="outlined"
                sx={{ mr: 2 }}
                error={!!errors?.members?.[index]?.role}
                helperText={errors?.members?.[index]?.role?.message}
              />
            )}
          />
          <IconButton onClick={() => remove(index)}>
            <Trash />
          </IconButton>
        </Box>
      ))}

      <Button variant="contained" startIcon={<Plus />} onClick={() => append({ name: "", email: "", role: "" })} sx={{ mr: 2 }}>
        Add Member
      </Button>

      <Button type="submit" variant="contained" color="primary">
        Submit Team
      </Button>

      <Box mt={5}>
        <Typography variant="h6">Validation Requirements:</Typography>

        <ul>
          <li>
            <Typography>All fields are required.</Typography>
          </li>
        </ul>
      </Box>
    </form>
  );
};

export default TeamRegistrationForm;
