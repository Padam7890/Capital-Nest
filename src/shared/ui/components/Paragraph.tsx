import React, { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  color?: "default" | "muted" | "primary" | "secondary" | "danger";
  align?: "left" | "center" | "right" | "justify";
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({
  size = "md",
  weight = "normal",
  color = "default",
  align = "left",
  children,
  className,
  ...props
}) => {
  const sizeStyles = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
  };

  const weightStyles = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const colorStyles = {
    default: "text-[#2E2E2E]",
    muted: "text-[#8E8E8E]",
    primary: "text-primary",
    secondary: "text-secondary",
    danger: "text-red-600",
  };

  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  return (
    <p
      className={cn(
        sizeStyles[size],
        weightStyles[weight],
        colorStyles[color],
        alignStyles[align],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
