import { FC } from "react";
import "./Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = () => {
  return (
    <div className="input">
      <label htmlFor="email" className="input-label">
        Email
      </label>
      <input type="text" id="email" name="email" />
    </div>
  );
};

export default Input;
