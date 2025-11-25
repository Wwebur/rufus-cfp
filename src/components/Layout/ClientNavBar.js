import * as React from "react";
import NavBar from "../NavBar";

const ClientNavBar = ({ children }) => {
  const [isActive, setIsActive] = React.useState(false);
  const toggleNavbar = React.useCallback(() => {
    setIsActive(prev => !prev);
  }, []);

  return (
    <>
      <NavBar isActive={isActive} toggleNavbar={toggleNavbar} />
      {children}
    </>
  );
};

export default ClientNavBar;

