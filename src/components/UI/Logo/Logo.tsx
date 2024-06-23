import { FC } from "react";
import { Link } from "@tanstack/react-router";
import "./Logo.scss";
import { ReactComponent as LogoIcon } from "@icons/logo-icon.svg";
import { getCssVariableValue } from "@/utils/utils";

const Logo: FC = () => {
  return (
    <Link to="/" className="horizontal-container logo link">
      <LogoIcon className="logo__icon" width="32" height="32" stroke={getCssVariableValue("--AccentLight")} />
      <p className="logo__text sub-title">sporthub</p>
    </Link>
  );
};

export default Logo;
