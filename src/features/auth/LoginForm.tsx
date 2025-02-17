import { AuthCard } from "../../components/auth-card";
import { Form, Formik, FormikHelpers } from "formik";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "../../ui/Button";
import { loginSchema } from "../../schemas/LoginSchema";
import CustomInput from "../../ui/CustomInput";
import LinkButton from "../../ui/LinkButton";
import { useNavigate } from "react-router-dom";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const navigate = useNavigate();

  const onSubmit = async (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(JSON.stringify(values, null, 2));
    actions.resetForm();
    navigate("/");
  };

  return (
    <AuthCard
      cardTitle="Welcome Back!"
      cardDescription="Login to your account."
      backButtonHref="/signup"
      backButtonLabel="Don't have an account ?"
      showSocials
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
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
            <div className="mb-1">
              <LinkButton to="/reset-password">Forget password? </LinkButton>
            </div>
            <Button buttonType="primary" fullWidth disabled={isSubmitting}>
              <span className="flex items-center">
                {isSubmitting ? (
                  <ClipLoader color="white" size={20} />
                ) : (
                  "Login"
                )}
              </span>
            </Button>
          </Form>
        )}
      </Formik>
    </AuthCard>
  );
}
