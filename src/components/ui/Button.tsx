import { ReactElement } from "react";

export interface ButtonProps {
  vairant: "primary" | "secondary";
  size: "lg" | "md" | "sm";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onclick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const styleSize = {
  lg: "px-8 py-4 text-xl rounded-xl",
  md: "px-6 py-2 text-md rounded-md",
  sm: "px-4 py-1 text-sm rounded-sm",
};

const variantProp = {
  primary: "bg-[#5046e4] text-white",
  secondary: "bg-[#9db6f9] text-[#4136bf]",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${styleSize[props.size]} ${variantProp[props.vairant]} m-2 ${
        props.fullWidth ? " w-full flex justify-center items-center" : ""
      }} ${props.loading ? " opacity-60" : null} `}
      disabled={props.loading}
      onClick={props.onclick}
    >
      <div className="flex items-center">
        {props.startIcon}
        <div className="pl-2 pr-2">{props.text}</div>
      </div>
    </button>
  );
};
