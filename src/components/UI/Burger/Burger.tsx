import { FC } from "react";
import "./Burger.scss";

const Burger: FC = () => {
  return (
    <button className="burger">
      <span className="burger__line" />
    </button>
  );
};

export default Burger;
