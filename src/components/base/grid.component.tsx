import { HTMLAttributes } from "react";
import { cn } from "utils/cn";

export const Grid = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid", className)}
    {...rest}
  />
)