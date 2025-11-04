import { ComponentProps, PropsWithChildren } from "react";

interface SpinnerProps {
  isLoading: boolean,
  spinnerProps?: ComponentProps<"div">;
}

export const Spinner = ({
  children,
  isLoading,
  spinnerProps,
  ...rest
}: PropsWithChildren<SpinnerProps> & ComponentProps<"div">) => (
  <div className="h-full w-full" {...rest}>
    {isLoading ? (
      <div
        className="m-auto h-10 w-10 animate-spin rounded-3xl border-4 border-secondary-ocean border-t-gray-200 border-solid"
        {...spinnerProps}
      />
    ) : children}
  </div>
);
