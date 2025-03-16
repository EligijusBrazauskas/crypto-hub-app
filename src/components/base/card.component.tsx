import { HTMLAttributes } from "react";
import { cn } from "utils/cn";

const styles = 'flex flex-col rounded-3xl'

export const Card = ({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) => (<div className={cn(styles, className)} {...rest}>{children}</div>)