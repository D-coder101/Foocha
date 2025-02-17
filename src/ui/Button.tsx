import { Link } from "react-router-dom";
import { type ButtonProps } from "../types/ButtonProps";

function Button({
  children,
  disabled,
  to,
  type = "submit",
  onClick,
  size = "md",
  fullWidth = false,
  buttonType = "primary",
}: // fullRounded = false,
ButtonProps) {
  const sizes = {
    sm: "px-3 py-3 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const base = `inline-flex gap-1 tracking-wider items-center justify-center focus:outline-none transition-colors duration-300 ease-in-out ${
    disabled && "cursor-not-allowed opacity-70"
  } ${sizes[size]} ${fullWidth && "w-full"}`;

  const variant = {
    primary:
      base +
      " bg-blue-600 text-white hover:bg-blue-700 border-2 border-blue-600 hover:border-blue-700 rounded-md",
    secondary: base + " bg-gray-500 text-white hover:bg-gray-600",
    outline:
      base +
      " border-2 border-blue-500 text-blue-400 hover:border-blue-600 hover:bg-blue-600 hover:text-white rounded-md",
    danger: base + " bg-red-500 text-white hover:bg-red-600",
    success: base + "bg-green-500 text-white hover:bg-green-600",
    rounded:
      base +
      " bg-blue-600 text-white hover:bg-blue-700 border-2 border-blue-600 hover:border-blue-700 rounded-full font-semibold shadow-lg",
    small:
      base + " rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-lg",
    outlineRounded:
      base +
      " border-2 border-blue-500 text-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white rounded-full",
  };

  if (to)
    return (
      <Link to={to} className={variant[buttonType]}>
        {children}
      </Link>
    );

  return (
    <button
      disabled={disabled}
      className={variant[buttonType]}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
