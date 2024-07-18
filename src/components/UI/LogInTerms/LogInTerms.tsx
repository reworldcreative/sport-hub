import { FC } from "react";
// import './LogInTerms.scss'
import { Link } from "@tanstack/react-router";

const LogInTerms: FC = () => {
  return (
    <div className="log-in__terms">
      <p className="log-in__small-text">
        By proceeding, you agree to our
        <Link to="/" className="link">
          {" "}
          Terms of Use{" "}
        </Link>
        and{" "}
        <Link to="/" className="link">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default LogInTerms;
