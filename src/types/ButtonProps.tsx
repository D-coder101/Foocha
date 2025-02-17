type ButtonVariant =
  | "small"
  | "primary"
  | "secondary"
  | "outline"
  | "danger"
  | "success"
  | "rounded"
  | "outlineRounded";
type ButtonSize = "sm" | "md" | "lg";
type ButtonType = "reset" | "submit" | "button";

export interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  fullRounded?: boolean;
  buttonType?: ButtonVariant;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
