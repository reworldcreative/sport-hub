import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Button from "@/components/UI/Button/Button";
import HeaderProfile from "@/components/UI/HeaderProfile/HeaderProfile";
import NotificationBlock from "@/components/UI/NotificationBlock/NotificationBlock";

const HeaderMenu: FC = () => {
  const authorizedData = useSelector((state: RootState) => state.authorization);

  return (
    <>
      <NotificationBlock />

      {!authorizedData.authorized ? (
        // <Button addClass="logIn__button" onClick={logInHandle}>
        //   Sign in
        // </Button>

        <Button link={"/login"} addClass="logIn__button">
          Sign in
        </Button>
      ) : (
        <>
          <Button color="secondary">Video</Button>

          <Button color="secondary">Store</Button>

          <HeaderProfile />
        </>
      )}
    </>
  );
};

export default HeaderMenu;
