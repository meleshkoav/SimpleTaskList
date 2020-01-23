import React from "react";
import "./Button.scss";

export interface IButtonProps {
  text: string;
  type?: "green" | "red" | "default";
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = props => {
  const { text, onClick, type = "default" } = props;
  return (
    <div className="button" onClick={onClick} data-type={type}>
      {text}
    </div>
  );
};

export default Button;
