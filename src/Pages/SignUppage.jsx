import Navbar from "../Components/Navbar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//Yup validation
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().required("Email or College ID is required"),
  userRole: Yup.string().required("Role is required"),
  mobile: Yup.string().required("Password is required"),
  userPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUpPage = () => {
  //initial values
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    userRole: "",
    mobile: "",
    userPassword: "",
  };

  //handlesubmit function
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-auto">
        <div className="w-full h-auto flex flex-col justify-center items-center">
          <p className="text-center py-2 font-medium text-base text-[#2F2F2F]">
            Create an Account
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div>
                  <label
                    htmlFor="firstName"
                    className="font-normal text-sm text-[#2F2F2F]"
                  >
                    First Name:
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    className="block border border-[#929292] md:w-96 w-80  p-2 my-2 rounded-md"
                    placeholder="John"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="font-normal text-sm text-[#2F2F2F]"
                  >
                    Last Name:
                  </label>
                  <Field
                    type="text"
                    name="lastName"
                    className="block border border-[#929292]  md:w-96 w-80  p-2 my-2 rounded-md"
                    placeholder="Warner"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="font-normal text-sm text-[#2F2F2F]"
                  >
                    Email or College ID:
                  </label>
                  <Field
                    type="text"
                    name="email"
                    className="block border border-[#929292]  md:w-96 w-80  p-2 my-2 rounded-md"
                    placeholder="johnwarner@abc.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
                <div>
                  <label
                    htmlFor="userRole"
                    className="font-normal text-sm text-[#2F2F2F]"
                  >
                    Role:
                  </label>
                  <Field
                    as="select"
                    name="userRole"
                    className="block border border-[#929292]  md:w-96 w-80  p-2 my-2 rounded-md"
                  >
                    <option value="" style={{ color: "#2F2F2F" }}>
                      Select a role
                    </option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                  </Field>
                  <ErrorMessage
                    name="userRole"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="font-normal text-sm text-[#2F2F2F]"
                  >
                    Password:
                  </label>
                  <Field
                    type="password"
                    name="mobile"
                    className="block border border-[#929292]  md:w-96 w-80  p-2 my-2 rounded-md"
                    placeholder="********"
                  />
                  <ErrorMessage
                    name="mobile"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
                <div>
                  <label
                    htmlFor="userPassword"
                    className="font-normal text-sm text-[#2F2F2F] "
                  >
                    Confirm Password:
                  </label>
                  <Field
                    type="password"
                    name="userPassword"
                    className="block border border-[#929292]  md:w-96 w-80  p-2 my-2 rounded-md"
                    placeholder="********"
                  />
                  <ErrorMessage
                    name="userPassword"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
                <div className="my-2">
                  <label className="flex gap-2">
                    <Field
                      type="checkbox"
                      name="agreeToTerms"
                      className="border border-[#929292]  p-2 rounded-md"
                    />
                    <p className="font-normal text-sm text-[#2F2F2F]">
                      I agree to the{" "}
                      <span className="text-[#000000] font-bold">terms</span>{" "}
                      and{" "}
                      <span className="text-black font-bold">
                        privacy policy
                      </span>
                    </p>
                  </label>
                </div>
                <div className="text-center py-2">
                  <button
                    type="submit"
                    className="bg-primary lg:text-base  my-2 text-sm  font-normal text-white lg:p-2.5 p-1.5 rounded"
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
