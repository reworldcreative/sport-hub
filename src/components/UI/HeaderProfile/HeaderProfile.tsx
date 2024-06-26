import { FC, useState } from "react";
import "./HeaderProfile.scss";
import avatar from "@img/avatars/avatar1.jpg";
import { ReactComponent as EditIcon } from "@icons/edit.svg";
import { ReactComponent as DiamondIcon } from "@icons/diamond.svg";
import { ReactComponent as LogOut } from "@icons/logOut.svg";

const HeaderProfile: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header-profile">
      <button className="horizontal-container text header-profile__button" onClick={toggleOpen}>
        <img src={avatar} alt="man face" className="header-profile__avatar" width="24" height="24" />
        Profile
      </button>

      <ul className={`header-profile__list ${isOpen ? "visible" : ""}`}>
        <li className="header-profile__item">
          <div className="horizontal-container header-profile__link">
            <EditIcon className="header-profile__item-icon" width="20" height="20" />
            <p className="text">Edit profile</p>
          </div>
        </li>

        <li className="header-profile__item">
          <div className="horizontal-container header-profile__link">
            <DiamondIcon className="header-profile__item-icon" width="20" height="20" />

            <p className="text">Switch to business account</p>
          </div>
        </li>

        <li className="header-profile__item">
          <div className="horizontal-container header-profile__link">
            <LogOut className="header-profile__item-icon" width="20" height="20" />

            <p className="text">Log out</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HeaderProfile;
