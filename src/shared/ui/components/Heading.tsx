import React, { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  weight?: "normal" | "medium" | "semibold" | "bold" | "extrabold";
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  as = "h2",
  size = "lg",
  weight = "extrabold",
  children,
  className,
  ...props
}) => {
  const Component = as;

  const sizeStyles = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
  };

  const weightStyles = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  return (
    <Component
      className={cn(sizeStyles[size], weightStyles[weight], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Heading;
