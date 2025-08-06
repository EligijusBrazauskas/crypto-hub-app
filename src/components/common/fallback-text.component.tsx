import { ComponentProps } from "react";

export const FallbackText = ({ children, fallback = "N/A", ...rest }: ComponentProps<'span'> & { fallback?: string }) => (
  <span
    {...rest}
  >{children || fallback}</span>
)