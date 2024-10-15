import { TextField } from "@mui/material";

const CustomInput = ({
  size = "small",
  req = false,
  className,
  label = "",
  multi = false,
  minRows = "",
  maxRows = "",
  rows = "",
  ...props
}) => {
  return (
    <>
      <TextField
        required={req}
        size={size}
        multiline={multi}
        className={`w-full ${className}`}
        label={label}
        minRows={minRows}
        maxRows={maxRows}
        rows={rows}
        {...props}
      />
    </>
  );
};

export default CustomInput;
