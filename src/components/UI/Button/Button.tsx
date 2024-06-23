import { FC, ElementType } from "react";
import "./Button.scss";
import { Link } from "@tanstack/react-router";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
  iconType?: "left" | "right" | "only" | "none";
  addClass: string;
  icon?: ElementType;
  link?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  color = "primary",
  iconType = "left",
  icon: Icon,
  addClass,
  link,
  ...props
}) => {
  return link ? (
    <Link to={link} className={`button ${color} ${iconType} ${addClass ?? ""}`}>
      {Icon && iconType != "none" && <Icon className={`button__icon ${iconType}`} />}

      {iconType != "only" && children}
    </Link>
  ) : (
    <button {...props} className={`button ${color} ${iconType} ${addClass ?? ""}`}>
      {Icon && iconType != "none" && <Icon className={`button__icon ${iconType}`} />}

      {iconType != "only" && children}
    </button>
  );
};

export default Button;
