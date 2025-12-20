import React from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { cn } from "../../utils/cn";

export interface ImageProps extends Omit<NextImageProps, "className"> {
  variant?:
    | "default"
    | "rounded"
    | "circle"
    | "thumbnail"
    | "cover"
    | "contain";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "auto";
  className?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

const Image: React.FC<ImageProps> = ({
  variant = "default",
  size = "auto",
  className,
  objectFit = "cover",
  ...props
}) => {
  const variantStyles = {
    default: "",
    rounded: "rounded-lg",
    circle: "rounded-full",
    thumbnail: "rounded-md border-2 border-gray-200",
    cover: "object-cover",
    contain: "object-contain",
  };

  const sizeStyles = {
    xs: "w-8 h-8",
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
    "2xl": "w-48 h-48",
    full: "w-full h-full",
    auto: "",
  };

  const objectFitClass =
    objectFit === "cover"
      ? "object-cover"
      : objectFit === "contain"
      ? "object-contain"
      : objectFit === "fill"
      ? "object-fill"
      : objectFit === "none"
      ? "object-none"
      : "object-scale-down";

  return (
    <NextImage
      className={cn(
        variantStyles[variant],
        sizeStyles[size],
        objectFitClass,
        className
      )}
      {...props}
    />
  );
};

export default Image;
