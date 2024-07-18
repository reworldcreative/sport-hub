import { ChangeEvent, FC, useState } from "react";
import "./Input.scss";
import { ReactComponent as EyeIcon } from "@icons/eye.svg";
import { Link } from "@tanstack/react-router";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  id?: string;
  name: string;
  register?: UseFormRegister<FieldValues>;
  settings?: RegisterOptions;
  isValid?: boolean;
  message?: string;
}

const Input: FC<InputProps> = ({ label, placeholder, id, name, register, settings, isValid, message, ...props }) => {
  const [type, setType] = useState(props.type);

  const changeType = () => {
    setType(type === "password" ? "text" : "password");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <div className={`input ${!isValid ? "error" : ""}`}>
      <div className="input__label-wrapper">
        <label htmlFor={id} className="input__label">
          {label}
        </label>
        {props.type === "password" && (
          <Link to={"/"} className="link input__label accent">
            Forgot password?
          </Link>
        )}
      </div>
      <div className="input__wrapper">
        <input
          {...props}
          className="text input__input"
          type={type}
          id={id}
          placeholder={placeholder}
          {...(register ? register(name, settings) : { name, onChange: handleChange })}
        />
        {props.type === "password" && <EyeIcon className="text input__icon" onClick={changeType} />}
      </div>
      {!isValid && <p className="input__label error-message">{message}</p>}
    </div>
  );
};

export default Input;
