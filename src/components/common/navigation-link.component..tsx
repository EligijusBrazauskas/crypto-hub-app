import clsx from "clsx";
import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

interface NavigationLinkProps {
  pathTo: string;
}

export const NavigationLink = ({
  pathTo,
  children,
}: PropsWithChildren<NavigationLinkProps>) => (
  <NavLink
    to={pathTo}
    className={({ isActive }) =>
      clsx(
        "flex w-full items-center justify-center rounded-2xl p-[15px] text-secondary transition-all hover:bg-blue-100 sm:justify-start",
        {
          "before:content=[''] bg-primary text-white before:absolute before:bottom-[13px] before:left-[-32px] before:h-[30px] before:w-[7px] before:rounded-r-md before:bg-primary":
            isActive,
        },
      )
    }
  >
    {children}
  </NavLink>
);
