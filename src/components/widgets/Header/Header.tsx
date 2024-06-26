import { FC } from "react";
import "./Header.scss";
import Logo from "@/components/UI/Logo/Logo";
import SearchBlock from "@/components/UI/SearchBlock/SearchBlock";
import Burger from "@/components/UI/Burger/Burger";
import { useMediaQuery } from "react-responsive";
import HeaderMenu from "./HeaderMenu";

const Header: FC = () => {
  const isSmallTablet = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header className="horizontal-container header">
      <div className="horizontal-container">
        {isSmallTablet && <Burger />}

        <Logo />
      </div>

      <div className="horizontal-container header__menu">
        <SearchBlock />

        {!isSmallTablet && (
          <div className="horizontal-container header__menu-block">
            <HeaderMenu />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
