import * as React from "react";

import "./scss/index.scss";

type ButtonType = "submit" | "reset" | "button";
export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  secondary?: boolean;
  btnRef?: React.RefObject<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  children,
  secondary,
  btnRef,
  type,
  ...otherProps
}) => (
  <button
    className={`button ${secondary ? "secondary" : ""} ${className}`}
    ref={btnRef}
    type={type as ButtonType}
    {...otherProps}
  >
    <span>
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
    </span>

  </button>
);

export default Button;
