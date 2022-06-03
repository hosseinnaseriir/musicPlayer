import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

function Auth() {

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("E eshtebahe").required(" E elzamiye"),
    password: Yup.string().required("pass is reuired !").min(3),
  });

  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies("token");
  console.log(cookie);

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

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleLoginUser}
      validationSchema={loginSchema}
    >
      {(handler) => (
        <Box
          component="form"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          height="50vh"
        >
          {console.log(handler)}
          <TextField
            error={handler.errors.email}
            helperText={handler.errors.email}
            type="email"
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            name="email"
            value={handler.values.email}
            onChange={handler.handleChange}
            onBlur={handler.handleBlur}
          />
          {handler.errors.password}
          <TextField
            type="password"
            name="password"
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={handler.values.password}
            onChange={handler.handleChange}
            onBlur={handler.handleBlur}
          />
          <Button type="submit" onClick={handler.handleSubmit}>
            Sign In
          </Button>
        </Box>
      )}
    </Formik>
  );
}

export default Auth;
