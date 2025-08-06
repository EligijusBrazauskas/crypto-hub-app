import { ComponentProps, PropsWithChildren } from "react";

export const Spinner = ({
  children,
  isLoading,
  ...rest
}: PropsWithChildren<{ isLoading: boolean }> & ComponentProps<"div">) => (
  <div className="h-full w-full">
    {isLoading ? (
      <div
        className="m-auto h-10 w-10 animate-spin rounded-3xl border-4 border-secondary-ocean border-t-gray-200 border-solid"
        {...rest}
      />
    ) : children}
  </div>
);
