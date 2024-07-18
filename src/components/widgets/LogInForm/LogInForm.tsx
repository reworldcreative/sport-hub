import { FC } from "react";
import { useDispatch } from "react-redux";
import "./LogInForm.scss";
import Button from "@/components/UI/Button/Button";
import Input from "@/components/UI/Input/Input";
import { Link, useNavigate } from "@tanstack/react-router";
import LogInTerms from "@/components/UI/LogInTerms/LogInTerms";
import { FieldValues, useForm } from "react-hook-form";
import { logIn } from "@/store/authorizationSlice";

const LogInForm: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logInHandle = () => {
    dispatch(logIn("customer"));
  };

  const {
    register,
    handleSubmit,
    // control,
    // reset,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: "onBlur",
  });

  const onSubmit = (data: FieldValues) => {
    logInHandle();
    navigate({ to: "/" });
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-block log-in-form">
      <h1 className="caption">Sign in</h1>

      <fieldset className="form-block form-fieldset">
        <legend className="visibility-hidden">Authorization Information</legend>

        <Input
          label="Email"
          placeholder="Your Email"
          id="email"
          name="email"
          register={register}
          isValid={errors.email ? false : true}
          settings={{
            required: "must be filled",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
            minLength: { value: 3, message: "Minimum length should be 3" },
            maxLength: { value: 30, message: "Maximum length should be 30" },
          }}
          message={errors?.email?.message?.toString() || "error!"}
        />
        <Input
          label="Password"
          placeholder="Your password"
          type="password"
          name="password"
          register={register}
          isValid={errors.password ? false : true}
          settings={{
            required: "must be filled",
            minLength: { value: 3, message: "Minimum length should be 3" },
            maxLength: { value: 30, message: "Maximum length should be 30" },
          }}
          message={errors?.password?.message?.toString() || "error!"}
        />
      </fieldset>
      <Button type="submit" addClass="log-in-form__button log-in-button" disabled={!isValid}>
        Sign in
      </Button>

      <div className="log-in__redirect">
        <p className="text">Don’t have an account?</p>
        <Link to="/" className="link">
          Sign up
        </Link>
      </div>

      <LogInTerms />
    </form>
  );
};

export default LogInForm;
