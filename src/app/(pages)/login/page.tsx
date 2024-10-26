/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import { useLoginUserMutation } from "@/redux/features/auth/auth.api";
import { setToken, setUser } from "@/redux/features/auth/auth.slice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Cookies from "js-cookie";
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsGoogle } from "react-icons/bs";
import { GrUser, GrUserAdmin } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import * as Yup from "yup";
import {signIn} from "next-auth/react"
const initialValues = {
  email: "",
  password: "",
};
type TFormValues = typeof initialValues;

const validationSchema = Yup.object({
  email: Yup.string()
    .email("* Invalid email address")
    .required("* Email is required"),
  password: Yup.string().required("* Password is required"),
});

const adminCredentials = {
  email: "admin@gmail.com",
  password: "admin123",
};

const userCredentials = {
  email: "rahman@gmail.com",
  password: "rahman123",
};

const Login = () => {
  const [login] = useLoginUserMutation();
  const router = useRouter();
  const dispatch = useDispatch();

  const redirect = Cookies.get("redirect");

  const handleLogin = async (values: TFormValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      const { data, error: err } = await login(values);
      const error: any = err;
      if (error) {
        if (error.status === 401) {
          return toast.error("Password didn't match", {
            description: "Try to remember your password and try again",
          });
        }
        if (error.status === 404) {
          return toast.error("Invalid email address", {
            description: "Enter a valid email address.",
          });
        }
        return toast.error(error.data?.message || "Unknown error occurred");
      }
      if (!data) {
        return toast.error("Something went wrong");
      }
      if (!data.success) {
        return toast.error(data.message);
      }
      const authData = {
        user: data.data,
      };
      dispatch(setUser(authData));
      Cookies.set("refreshToken", data.refreshToken, { expires: 30 });
      dispatch(setToken(data.accessToken || ""));
      toast.success("Successfully logged in", {
        description: "Welcome back!",
      });
      redirect ? Cookies.remove("redirect") : "";
      router.replace(redirect || "/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        {/* Image Section */}
        <div className="w-full md:w-[300px] lg:w-[500px] h-[300px] md:h-[450px] overflow-hidden rounded-lg">
          <Image
            src="/images/auth_lady.png"
            alt="auth"
            width={500}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full max-w-md md:max-w-[450px] text-center md:text-left">
          <h2 className="font-bold text-3xl md:text-[35px] mb-6">
            Please Login
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <div className="mb-4">
                  <label className="block text-lg font-semibold">Email</label>
                  <Field
                    type="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border rounded-md"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-semibold">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="mt-1 block w-full px-3 py-2 border rounded-md"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

               <div className="flex gap-x-5">
               <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-6 py-3 bg-orange-500 text-black hover:bg-gray-200 rounded-md flex items-center justify-center gap-2"
                >
                  Login <LogIn />
                </button>
               
               </div>

                <div className="flex gap-4 mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setFieldValue("email", adminCredentials.email);
                      setFieldValue("password", adminCredentials.password);
                    }}
                    className="w-full md:w-auto px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 flex justify-center items-center gap-2"
                  >
                    Login as Admin 
                    <GrUserAdmin/>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFieldValue("email", userCredentials.email);
                      setFieldValue("password", userCredentials.password);
                    }}
                    className="w-full md:w-auto px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 flex justify-center items-center gap-2"
                  >
                    Login as User
                    <GrUser/>
                  </button>
                </div>
                <h3 className="font-bold text-sm mt-4 text-gray-300">
                  Use the buttons below to quickly fill in login credentials:
                  'Login as Admin' for admin access and 'Login as User' for a
                  standard user account. This feature helps you easily explore
                  the application without needing to manually enter credentials
                </h3>
              </Form>
            )}
          </Formik>

          <button onClick={() => signIn("google", {
                  callbackUrl: "http://localhost:3000"
                })} className="w-full font-bold md:w-auto px-6 py-3 bg-orange-500 text-black hover:bg-gray-200 rounded-md flex items-center justify-center gap-2">Login With Google <BsGoogle/></button>

          {/* Links Section */}
          <div className="mt-6">
            <p>
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-orange-400 hover:underline"
              >
                Create Account
              </Link>
            </p>
            <p>
              Forgot your password?{" "}
              <Link
                href="/forgot-password"
                className="text-orange-400 hover:underline"
              >
                Forgot password
              </Link>
            </p>
          </div>

          <p className="mt-4 text-gray-500 text-sm">
            Note: Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
