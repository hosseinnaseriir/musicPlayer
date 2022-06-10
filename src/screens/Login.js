import React, { useEffect, useState } from "react";
import Auth from "./../components/Auth/index";
import { useForm } from "react-hook-form";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

function LoginScreen() {
  const data = useFetch("https://reqres.in/api/users?page=2");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", { required: true })} />
        {errors.email && <span> email ham lotajsdjfhas</span>}
        <input {...register("password", { required: true })} />
        {errors.password && <span>This field is required !!</span>}
        <input type="submit" />
      </form>
      <Auth />
    </>
  );
}

export default LoginScreen;
