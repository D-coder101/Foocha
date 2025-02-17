import { Form, Formik, FormikHelpers } from "formik";
// import { useNavigate } from "react-router-dom";
import { customerDetailsSchema } from "../../schemas/CustomerDetailsSchema";
import CustomInput from "../../ui/CustomInput";
import CustomSelect from "../../ui/CustomSelect";
import { useQuery } from "@tanstack/react-query";
import { fetchLgas, fetchStates } from "../../services/apiCountries";
import { useState } from "react";
import Button from "../../ui/Button";
import { ClipLoader } from "react-spinners";

interface CustomerDetailsValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  deliveryAddress: string;
  // city: string;
  state: string;
  zipCode: string;
  lga: string;
}

export default function DeliveryForm() {
  // const navigate = useNavigate();

  const { data: states } = useQuery({
    queryKey: ["states"],
    queryFn: fetchStates,
  });

  const [selectedState, setSelectedState] = useState<string | null>(null);
  const { data: lgas, isLoading: loadingLgas } = useQuery({
    queryKey: ["lgas", selectedState],
    queryFn: () => fetchLgas(selectedState!),
    enabled: !!selectedState,
  });
  // console.log(lgas);

  const onSubmit = async (
    values: CustomerDetailsValues,
    actions: FormikHelpers<CustomerDetailsValues>
  ) => {
    console.log("Form is submitted");
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // alert(JSON.stringify(values, null, 2));
    actions.resetForm();
    // navigate("/");
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
        deliveryAddress: "",
        // city: "",
        state: "",
        zipCode: "",
        lga: "",
      }}
      validationSchema={customerDetailsSchema}
      onSubmit={onSubmit}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form>
          <div className="grid grid-cols-2 items-center gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-10">
            <CustomInput
              label="First Name"
              name="firstName"
              textColor="text-gray-600"
              // padding="py-3 px-3"
              border="border-gray-300"
              type="text"
              placeholder="Enter your First Name"
            />
            <CustomInput
              label="Last Name"
              name="lastName"
              textColor="text-gray-600"
              // padding="py-3 px-3"
              border="border-gray-300"
              type="text"
              placeholder="Enter your Last Name"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-10">
            <div className="md:col-span-2">
              <CustomInput
                label="Delivery Address"
                name="deliveryAddress"
                textColor="text-gray-600"
                //   padding="py-3 px-3"
                border="border-gray-300"
                type="text"
                placeholder="Enter your Address"
              />
            </div>
            <CustomInput
              label="Phone Number"
              name="phoneNumber"
              textColor="text-gray-600"
              // padding="py-3 px-3"
              border="border-gray-300"
              type="text"
              placeholder="Enter your Phone Number"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-10">
            {/* <CustomInput
              label="City"
              name="city"
              textColor="text-gray-500"
              // padding="py-3 px-3"
              border="border-gray-300"
              type="text"
              placeholder="Enter your City"
            /> */}
            <CustomSelect
              label="State"
              name="state"
              textColor="text-gray-600"
              // padding="py-3 px-3"
              border="border-gray-300"
              placeholder="Select state..."
              options={
                states?.map((state: { name: string }) => ({
                  value: state.name,
                  label: state.name,
                })) || []
              }
              changeFn={(e: React.ChangeEvent<HTMLSelectElement>) => {
                const state = e.target.value;
                setFieldValue("state", state);
                setSelectedState(state); // Trigger LGA fetch
                setFieldValue("lga", ""); // Reset LGA selection
              }}
            />
            <CustomSelect
              label="LGA"
              name="lga"
              textColor="text-gray-600"
              //   padding="py-3 px-3"
              border="border-gray-300"
              placeholder="Select lga..."
              options={
                lgas?.map((lga: string) => ({
                  value: lga,
                  label: lga,
                })) || []
              }
              changeFn={(e: React.ChangeEvent<HTMLSelectElement>) => {
                const selectedLga = e.target.value;
                setFieldValue("lga", selectedLga);
              }}
              disabled={!selectedState || loadingLgas}
            />
            <CustomInput
              label="Zip Code"
              name="zipCode"
              textColor="text-gray-600"
              // padding="py-3 px-3"
              border="border-gray-300"
              type="text"
              placeholder="Enter your Zip Code"
            />
          </div>
          <div className="grid md:grid-cols-3 items-center gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-10"></div>

          <Button
            type="submit"
            disabled={isSubmitting}
            // onClick={() => console.log("clicked")}
            // buttonType="button"
          >
            <span className="flex items-center">
              {isSubmitting ? <ClipLoader color="white" size={20} /> : "Next"}
            </span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
