import { HTMLAttributes } from "react";
import { cn } from "utils/cn";

export const Flex = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex", className)}
    {...rest}
  />
)