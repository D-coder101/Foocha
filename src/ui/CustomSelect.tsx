import { useField } from "formik";
import { CustomSelectProps } from "../types/CustomSelect";

export default function CustomSelect({
  options,
  label,
  placeholder,
  textColor = "text-white",
  border,
  padding,
  disabled,
  changeFn,
  ...props
}: CustomSelectProps) {
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
      {/* focus:border-blue-400 
      ${meta.error && meta.touched ? "border-red-500" : "border-blue-400"} */}
      <select
        {...field}
        {...props}
        className={`border-2 ${
          border ? border : ""
        } ${textColor} bg-transparent w-full focus:ring-0 rounded-md py-2 px-3 outline-0 ${
          padding ? padding : "py-2 px-3"
        } ${meta.error && meta.touched ? "border-red-500" : ""}
          `}
        disabled={disabled}
        onChange={changeFn}
      >
        {/* {placeholder && ( */}
        <option value="" disabled>
          {placeholder}
        </option>
        {/* )} */}
        {options &&
          options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-black"
            >
              {option.label}
            </option>
          ))}
      </select>
      <div className="h-4 text-right">
        {meta.error && meta.touched && (
          <p className=" text-xs text-right text-red-500">{meta.error}</p>
        )}
      </div>
    </div>
  );
}
