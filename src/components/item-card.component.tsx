import { Card } from "components/base";
import { HTMLAttributes } from "react";
import { cn } from "utils/cn";

const styles = "w-full flex-1 shadow-large sm:min-w-64 transition-all duration-200 ease-out hover:scale-105 hover:bg-accent-blue hover:cursor-pointer hover:shadow-outline"

export const ItemCard = ({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <Card className={cn(styles, className)} {...rest}>
    {children}
  </Card>
)