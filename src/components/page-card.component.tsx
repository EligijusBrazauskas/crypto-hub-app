import { Card } from "components/base";
import { HTMLAttributes } from "react";
import { cn } from "utils/cn";

const styles =
  "w-full flex-1 bg-gradient-to-r from-white to-accent-white pt-5 pb-20 sm:py-10 px-2 sm:px-5 gap-10";

export const PageCard = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => (
  <Card className={cn(styles, className)} {...rest}>{children}</Card>
);
