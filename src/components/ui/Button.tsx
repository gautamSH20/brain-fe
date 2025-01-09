export interface ButtonProps {
  vairant: "primary" | "secondary";
  size: "lg" | "md" | "sm";
  text: string;
  startIcon?: any;
  endIcon?: any;
  onclick: () => void;
}

const styleSize = {
  lg: "px-8 py-4 text-xl rounded-xl",
  md: "px-6 py-2 text-md rounded-md",
  sm: "px-4 py-1 text-sm rounded-sm",
};

const variantProp = {
  primary: "bg-[#5046e4] text-white",
  secondary: "bg-[#e1e9ff] text-[#4136bf]",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={styleSize[props.size] + " " + variantProp[props.vairant]}
    >
      {props.text}
    </button>
  );
};
