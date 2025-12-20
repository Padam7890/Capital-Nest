import React, { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  size = "lg",
  children,
  className,
  ...props
}) => {
  const sizeStyles = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "container",
    xl: "max-w-screen-xl",
    full: "w-full",
  };

  return (
    <div
      className={cn(
        sizeStyles[size],
        "mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
