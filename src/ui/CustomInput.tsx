import { useField } from "formik";
import { CustomInputProps } from "../types/CustomInput";

export default function CustomInput({
  textColor = "text-white",
  border,
  padding,
  label,
  ...props
}: CustomInputProps) {
  const [field, meta] = useField(props.name);
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={props.name}
          className={`text-left font-medium ${textColor}`}
        >
          {label}
        </label>
      )}
      <input
        {...field}
        {...props}
        className={`border-2  ${textColor}  bg-transparent placeholder:text-sm placeholder:font-medium w-full focus:ring-0 rounded-md ${
          padding ? padding : "py-2 px-3"
        } outline-0 focus:border-blue-400 
       ${
         meta.error && meta.touched
           ? "border-red-500"
           : border
           ? border
           : "border-blue-400"
       }
          }`}
      />
      <div className="h-4 text-right">
        {meta.error && meta.touched && (
          <p className=" text-xs text-right text-red-500">{meta.error}</p>
        )}
      </div>
    </div>
  );
}
