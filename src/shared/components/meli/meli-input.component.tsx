import { ComponentProps, HTMLAttributes, InputHTMLAttributes } from "react";
import { Input } from "../ui/input";

type variants = "default" | "primary" | "secondary";

interface MeliInputProps extends ComponentProps<typeof Input> {
  variant?: variants;
  className?: string;
}

const MeliInput =(props: MeliInputProps)=>{ 
  
  const { variant, className, ...rest } = props;

  const classNames: Record<variants, string> = {
    default: "bg-white border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full",
    primary: "input-primary",
    secondary: "input-secondary",
  };

  return (
    <Input className={`${classNames[variant || "default"]} ${className || ""}`} {...rest} />
  );
}
export default MeliInput;