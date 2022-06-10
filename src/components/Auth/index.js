import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

function Auth() {

  const schema = Yup.object().shape({
    email: Yup.string("please insert a string")
      .email("Please enter your email")
      .required("this field is re"),
    password: Yup.string("please insert a string")
      .min(3, "more than 3 please")
      .max(8, "less than 8 please"),
  });

  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies("token");
  const handleLoginUser = async (values) => {
    try {
      const res = await axios.post("https://reqres.in/api/login", {
        email: values.email,
        password: values.password,
      });
      setCookie("token", res.data.token, {
        maxAge: 60 * 60 * 24,
      });
      navigate("/", {
        state: {
          token: res.data.token,
        },
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      select: "",
    },
    onSubmit: handleLoginUser,
    validationSchema: schema,
  });

  return (
    <>
      {/* // <Formik
    //   initialValues={{
    //     email: "",
    //     password: "",
    //     select: "",
    //   }}
    //   validationSchema={schema}
    //   onSubmit={handleLoginUser}
    // > */}
      {/* {({ values, errors, handleChange, handleBlur, handleSubmit }) => ( */}

      <Box
        autocomplete="off"
        component="form"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        height="50vh"
      >
        <TextField
          error={formik.errors.email}
          helperText={formik.errors.email}
          type="email"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <TextField
          error={formik.errors.password}
          helperText={formik.errors.password}
          type="password"
          name="password"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Button type="submit" onClick={formik.handleSubmit}>
          Sign In
        </Button>
      </Box>
      {/* )} */}
      {/* </Formik> */}
    </>
  );
}

export default Auth;
