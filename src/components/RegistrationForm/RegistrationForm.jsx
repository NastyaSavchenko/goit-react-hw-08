import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => navigate("/contacts"));
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          p: 4,
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form style={{ width: "100%", marginTop: "24px" }}>
              <Field
                as={TextField}
                margin="normal"
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />

              <Field
                as={TextField}
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              <Field
                as={TextField}
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing Up..." : "Sign Up"}
              </Button>
            </Form>
          )}
        </Formik>

        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Link href="/login" variant="body2">
            Already have an account? Sign In
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
