import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.scss";
import { RootState } from "@/store/store";
import { logIn } from "@/store/authorizationSlice";
import Logo from "@/components/UI/Logo/Logo";
import SearchBlock from "@/components/UI/SearchBlock/SearchBlock";
import NotificationBlock from "@/components/UI/NotificationBlock/NotificationBlock";
import Button from "@/components/UI/Button/Button";

const Header: FC = () => {
  const authorizedData = useSelector((state: RootState) => state.authorization);
  const dispatch = useDispatch();

  const logInHandle = () => {
    dispatch(logIn("customer"));
  };

  return (
    <header className="header horizontal-container">
      <Logo />

      <div className="header__menu horizontal-container">
        <SearchBlock />

        <NotificationBlock />

        {!authorizedData.authorized && (
          <Button link={"/login"} addClass="logIn__button" onClick={logInHandle}>
            Sign in
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
