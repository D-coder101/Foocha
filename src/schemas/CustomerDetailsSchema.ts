import * as Yup from "yup";

export const customerDetailsSchema = () =>
  // stateOptions: string[] = [],
  // lgaOptions: string[] = []
  Yup.object().shape({
    firstName: Yup.string()
      .required("required")
      .min(2, "First name must be at least 2 characters"),
    lastName: Yup.string()
      .required("required")
      .min(2, "Last name must be at least 2 characters"),
    phoneNumber: Yup.string()
      .required("required")
      .matches(/^\d{10,15}$/, "Phone number must be between 10 and 15 digits"),
    deliveryAddress: Yup.string()
      .required("required")
      .min(5, "Delivery address must be at least 5 characters"),
    // city: Yup.string()
    //   .required("City is required")
    //   .min(2, "City must be at least 2 characters"),
    state: Yup.string().required("required"),
    // .oneOf(stateOptions, "Invalid state selected"),
    zipCode: Yup.string()
      .required("required")
      .matches(/^\d{5,6}$/, "ZIP Code must be 5 or 6 digits"),
    lga: Yup.string().required("required"),
    // .oneOf(lgaOptions, "Invalid LGA selected"),
  });
