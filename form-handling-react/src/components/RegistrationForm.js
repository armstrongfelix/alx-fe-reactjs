import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// 1. Define the Validation Schema
const RegistrationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
});

const RegistrationForm = () => {
  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>Create Account</h2>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={RegistrationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Simulate an API call
          setTimeout(() => {
            console.log("Form Submitted:", values);
            alert("Registration Successful!");
            resetForm();
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <div>
              <label htmlFor="username">Username</label>
              <Field
                name="username"
                className={
                  errors.username && touched.username ? "input-error" : ""
                }
              />
              <ErrorMessage
                name="username"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field name="confirmPassword" type="password" />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
