import { FC } from "react";
import "./LogInForm.scss";
import Button from "@/components/UI/Button/Button";
import Input from "@/components/UI/Input/Input";

const LogInForm: FC = () => {
  return (
    <form className="form-block log-in-form">
      <h1 className="caption">Sign in</h1>

      <fieldset className="form-block form-fieldset">
        <legend className="visibility-hidden">Authorization Information</legend>

        <Input />

        <Button addClass="log-in-form__button log-in-button">Sign in</Button>
      </fieldset>
    </form>
  );
};

export default LogInForm;
