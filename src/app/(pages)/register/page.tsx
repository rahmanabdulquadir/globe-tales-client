"use client";

import { useRegisterCustomerMutation } from "@/redux/features/auth/auth.api";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

type TFormValues = typeof initialValues;

const validationSchema = Yup.object({
  firstName: Yup.string().required("* First name is required"),
  lastName: Yup.string().required("* Last name is required"),
  email: Yup.string()
    .email("* Invalid email address")
    .required("* Email is required"),
  password: Yup.string().required("* Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "* Passwords must match")
    .required("* Confirm password is required"),
});

const CreateAccount = () => {
  const [register] = useRegisterCustomerMutation();
  const router = useRouter();

  const handleRegister = async (values: TFormValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      const { data } = await register(values);
      if (!data) return toast.error("Something went wrong");
      if (!data.success) return toast.error(data.message);

      toast.success("Successfully registered", { description: "Now please login" });
      router.push("/login");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 lg:p-[15px] space-y-6 lg:space-y-0 space-x-10">
      <div className="w-full lg:w-[500px] lg:h-[450px] h-auto overflow-hidden rounded-[15px]">
        <Image
          src="/images/signUp.jpg"
          alt="auth"
          width={300}
          height={350}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full p-6 lg:p-[25px] max-w-lg shadow-md rounded-[12px]">
        <h2 className="font-bold text-center text-2xl lg:text-[35px] mb-6">
          Create an Account
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-white text-lg font-semibold">
                  Your First Name
                </label>
                <Field
                  type="text"
                  name="firstName"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-lg font-semibold">
                  Your Last Name
                </label>
                <Field
                  type="text"
                  name="lastName"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-lg font-semibold">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-lg font-semibold">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-lg font-semibold">
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white py-3 hover:bg-orange-600 rounded-md"
              >
                Submit & Register
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-6 text-start">
          <p className="text-white">
            Already have an account?{" "}
            <Link href="/login" className="text-orange-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
        <p className="mt-4 text-gray-300 text-sm text-start">
          Note: Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
