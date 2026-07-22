import { ComponentProps, ReactNode } from "react";
import { Button } from "../ui/button";
import { ClassNameValue } from "tailwind-merge";

interface MeliButtonProps extends ComponentProps<typeof Button> {
  icon?: ReactNode;
}

const MeliButton = (props:MeliButtonProps) => {
  const { icon, className, ...rest } = props;
  const cn: ClassNameValue = `cursor-pointer bg-muted border-default hover:bg-muted-dark ${props.className || ""}`;
  return (
    <Button className={cn} {...rest}>
      {props.icon}
      {props.children}
    </Button>
  );
};
export default MeliButton;