import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationFormik = () => {
  // Validation Schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Too short").required("Required"),
  });

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Register (Formik)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Formik Form Submitted:", values);
        }}
      >
        <Form>
          <div className="mb-3">
            <label className="block">Username</label>
            <Field name="username" className="border p-2 w-full rounded" />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-3">
            <label className="block">Email</label>
            <Field
              name="email"
              type="email"
              className="border p-2 w-full rounded"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-3">
            <label className="block">Password</label>
            <Field
              name="password"
              type="password"
              className="border p-2 w-full rounded"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationFormik;
