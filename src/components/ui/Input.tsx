interface InputProps {
  placeholder: string;
  reference?: any;
  fullWidth?: boolean;
}

export const Input = ({ placeholder, reference, fullWidth }: InputProps) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={"text"}
        className={`px-4 py-2 border rounded m-2 ${
          fullWidth ? " w-full " : ""
        }`}
        ref={reference}
      ></input>
    </div>
  );
};
