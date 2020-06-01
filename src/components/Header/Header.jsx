import React, {useState} from "react";
import "./Header.css";
import SearchField from "./SearchField";
import NavBar from "./NavBar";

const Header = (props) => {
  const [visibilityStatus, setVisibilityStatus] = useState(true);

  return (
    <div className="header__container">
      <h1 className="header__container-title">SW DB</h1>
      <NavBar setVisibilityStatus={setVisibilityStatus} />
      <SearchField visibilityStatus={visibilityStatus} setSearchTerm={props.setSearchTerm}/>
    </div>
  );
};

export default Header;
