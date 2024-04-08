
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {  Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import postData from "../CommonAPI/CommonAPI";
import { LoginAPI } from "../CommonAPI/CommonAPI";



//Yup validation
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required (or) College Id is required"),
  userPassword: Yup.string().required("Password is required"),
});

//Toastify success message
const handleSuccess = () => {
  toast.success("Successfully Login");
};

//Toastify error message
const handleError = (message) => {
  toast.error(message);
};

const Login = () => {
  const navigate = useNavigate();



  //handle submit function

  const handleSubmit = async (values, { setSubmitting }) => {
    const serverData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      serverData.append(key, value);
    });

    try {
      const response = await postData(LoginAPI, serverData);

      if (response.data && response.data.error) {
        handleError(response.data.message);
      } else {
        handleSuccess();

        localStorage.setItem("userData", JSON.stringify(response.data));
        navigate("/dashboard");
      }
    } catch (error) {
      handleError("Login failed:", error);
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <div className="w-full h-96">
      <div className="w-full h-96 flex flex-col justify-center items-center">
        <p className="font-medium font-base py-5 text-[#2F2F2F]">
          Welcome to Certiverse{" "}
        </p>
        <Formik
          initialValues={{ email: "", userPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label
                  htmlFor="email"
                  className="font-normal text-sm text-[#2F2F2F]"
                >
                  College Id/ Email Id
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="SRMCE101"
                  className="block border border-[#929292] md:w-96 w-80 p-2 my-2 rounded-md"
                />
                <ErrorMessage
                  name="email"
                  className="text-red-500 text-xs"
                  component="div"
                />
              </div>
              <div>
                <label
                  htmlFor="userPassword"
                  className="font-normal text-sm text-[#2F2F2F]"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="userPassword"
                  placeholder="***********"
                  className="block border border-[#929292] md:w-96 w-80 p-2 my-2 rounded-md"
                />
                <ErrorMessage
                  name="userPassword"
                  className="text-red-500 text-xs"
                  component="div"
                />
              </div>
              <div className="my-3 flex justify-between">
                <label className="flex gap-2">
                  <Field
                    type="checkbox"
                    name="agreeToTerms"
                    className="border border-[#929292] p-2 rounded-md"
                  />
                  <p className="font-normal text-sm text-[#2F2F2F]">
                    Remember me
                  </p>
                </label>
                <Link to="/forgotpassword" className="font-normal text-sm text-[#2F2F2F]">
                  Forgot Password ?
                </Link>
              </div>
              <div className="my-3">
                <p className="font-normal text-sm text-[#2F2F2F]">
                  Don’t have an account ?{" "}
                  <Link to="/signup" className="text-primary">
                    Sign Up
                  </Link>
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-primary lg:text-base my-2 text-sm font-normal text-white lg:p-2.5 p-1.5 rounded"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
