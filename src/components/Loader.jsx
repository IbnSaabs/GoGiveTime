import React from "react";
import spinner from "../assets/spinner.gif";
import splash from "../assets/splash_icon.svg";

export const Loader = () => {
  const [showSpinner, setShowSpinner] = React.useState(false);

  //hide splash icon and show spinner after 700ms
  React.useEffect(() => {
    setTimeout(() => {
      setShowSpinner(true);
    }, 700);
  }, []);

  return (
    <div role="status " className="h-screen flex justify-center items-center">
      {showSpinner ? (
        <img src={spinner} alt="spinner" />
      ) : (
        <img
          className=" transition-opacity duration-300 "
          src={splash}
          alt="splash icon"
        />
      )}
    </div>
  );
};
