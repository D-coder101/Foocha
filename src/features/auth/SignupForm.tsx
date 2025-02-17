import { AuthCard } from "../../components/auth-card";
import { Form, Formik, FormikHelpers } from "formik";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "../../ui/Button";
import CustomInput from "../../ui/CustomInput";
import { registerSchema } from "../../schemas/SignupSchema";

interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const onSubmit = async (
  values: RegisterFormValues,
  actions: FormikHelpers<RegisterFormValues>
) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  alert(JSON.stringify(values, null, 2));
  actions.resetForm();
};

export default function SignupForm() {
  return (
    <AuthCard
      cardTitle="Get Started!"
      cardDescription="Create an account."
      backButtonHref="/login"
      backButtonLabel="Already have an account ?"
      showSocials
    >
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-1">
              <CustomInput
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <CustomInput
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              <CustomInput
                label="Confirm Password"
                name="confirmPassword"
                type="confirmPassword"
                placeholder="Confirm your password"
              />
            </div>
            <Button buttonType="primary" fullWidth disabled={isSubmitting}>
              <span className="flex items-center">
                {isSubmitting ? (
                  <ClipLoader color="white" size={20} />
                ) : (
                  "Register"
                )}
              </span>
            </Button>
          </Form>
        )}
      </Formik>
    </AuthCard>
  );
}
